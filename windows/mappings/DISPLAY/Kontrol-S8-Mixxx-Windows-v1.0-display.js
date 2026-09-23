/* Kontrol S8 for Mixxx Windows v1.0 — self-contained display mapping. */

/*
 * Mission 289 - integrated renderer preserving the accepted Mission 288 optimization.
 *
 * Transport authority: S8 Mission 060 physical evidence, IF6 / EP04, two
 * 480x272 screens, RGB565, full-frame RLE envelope. This implementation is a
 * Windows/Mixxx 2.5.6 target. It renders only state read from Mixxx, the
 * bounded getS8DisplayState bridge, or the [S8Display] context controls.
 *
 * No LED output. No fake waveform, artwork, effect names, or browser rows. If
 * a source is unavailable, the display says so instead of inventing content.
 */
/* global engine, controller */
/* exported S8DisplayWindowsV1 */
var S8DisplayWindowsV1 = (function() {
    "use strict";

    var WIDTH = 480;
    var HEIGHT = 272;
    var PIXEL_COUNT = WIDTH * HEIGHT;
    var PAIR_COUNT = PIXEL_COUNT / 2;
    var HEADER_SIZE = 16;
    var FOOTER_SIZE = 8;
    var MAX_FRAME_SIZE = HEADER_SIZE + PIXEL_COUNT * 4 + FOOTER_SIZE;
    // One screen per tick. 16 ms gives each display a fresh opportunity every
    // ~32 ms (about 31 fps) while the native queue still coalesces stale work.
    var TICK_MS = 16;
    var BUNDLE_ID = "S8_MAPPING_BUNDLE_WINDOWS_V1_0_20260921";
    var DISPLAY_XML = "Kontrol-S8-Mixxx-Windows-v1.0.bulk.xml";
    var DISPLAY_SCRIPT = "Kontrol-S8-Mixxx-Windows-v1.0-display.js";
    var LOG_PREFIX = "[S8_DISPLAY_WINDOWS_V1_0] ";

    var active = false;
    var timerId = 0;
    var lifecycleGeneration = 0;
    var nextScreen = 0;
    var frameBuffers = [new Array(PIXEL_COUNT), new Array(PIXEL_COUNT)];
    // controller.send consumes the array synchronously. Reusing one encoder
    // buffer per physical screen removes the largest per-frame JS allocation
    // without sharing mutable state between LEFT and RIGHT.
    var encodedBuffers = [new Array(MAX_FRAME_SIZE), new Array(MAX_FRAME_SIZE)];
    var encodedOnce = [false, false];
    var compositionState = [createCompositionState(), createCompositionState()];
    var lastFingerprint = [null, null];
    var sentFrames = [0, 0];
    // QML reference default. Kept local until the side-key HID controls have
    // evidence-backed identities and can safely own zoom changes.
    var waveformZoom = [7, 7];
    var sendFailures = 0;
    // Private V1.0 candidate: non-blocking, display-only introduction.
    var SPLASH_DURATION_MS = 7000;
    var splashUntil = 0;
    var frameSendFailureStreams = createFailureStreams(2);
    var trackMetadataFailureStreams = createFailureStreams(5);
    var displayStateFailureStreams = createFailureStreams(5);
    var browserStateFailureStream = createFailureStream();
    var performance = createPerformanceState();

    function createCompositionState() {
        return {mode: "NONE", topKey: null, footerKey: null};
    }

    function createPerformanceState() {
        return {samples: 0, readMs: 0, renderMs: 0, encodeMs: 0, submitMs: 0,
            maxReadMs: 0, maxRenderMs: 0, maxEncodeMs: 0, maxSubmitMs: 0,
            fullCompositions: 0, incrementalCompositions: 0,
            compositionPixels: 0, presentationPixels: 0,
            encodedBufferReuses: 0};
    }

    function rgb565(r, g, b) {
        return ((r >> 3) << 11) | ((g >> 2) << 5) | (b >> 3);
    }

    var COLOR = {
        bg: rgb565(7, 10, 14),
        panel: rgb565(12, 23, 31),
        primary: rgb565(236, 242, 244),
        secondary: rgb565(151, 166, 174),
        muted: rgb565(70, 81, 88),
        border: rgb565(98, 119, 130),
        cyan: rgb565(49, 202, 232),
        magenta: rgb565(238, 77, 181),
        green: rgb565(69, 214, 125),
        orange: rgb565(255, 98, 29),
        loopShade: rgb565(14, 70, 47),
        selection: rgb565(23, 55, 78),
        yellow: rgb565(255, 177, 58),
        red: rgb565(238, 77, 77),
        blue: rgb565(79, 133, 255)
    };

    // 5x7 uppercase bitmap font. Rows are five-bit masks, MSB at the left.
    var FONT = {
        " ":[0,0,0,0,0,0,0],
        "A":[14,17,17,31,17,17,17], "B":[30,17,17,30,17,17,30],
        "C":[14,17,16,16,16,17,14], "D":[30,17,17,17,17,17,30],
        "E":[31,16,16,30,16,16,31], "F":[31,16,16,30,16,16,16],
        "G":[14,17,16,23,17,17,14], "H":[17,17,17,31,17,17,17],
        "I":[31,4,4,4,4,4,31], "J":[7,2,2,2,18,18,12],
        "K":[17,18,20,24,20,18,17], "L":[16,16,16,16,16,16,31],
        "M":[17,27,21,21,17,17,17], "N":[17,25,21,19,17,17,17],
        "O":[14,17,17,17,17,17,14], "P":[30,17,17,30,16,16,16],
        "Q":[14,17,17,17,21,18,13], "R":[30,17,17,30,20,18,17],
        "S":[15,16,16,14,1,1,30], "T":[31,4,4,4,4,4,4],
        "U":[17,17,17,17,17,17,14], "V":[17,17,17,17,17,10,4],
        "W":[17,17,17,21,21,21,10], "X":[17,17,10,4,10,17,17],
        "Y":[17,17,10,4,4,4,4], "Z":[31,1,2,4,8,16,31],
        "0":[14,17,19,21,25,17,14], "1":[4,12,4,4,4,4,14],
        "2":[14,17,1,2,4,8,31], "3":[30,1,1,14,1,1,30],
        "4":[2,6,10,18,31,2,2], "5":[31,16,16,30,1,1,30],
        "6":[14,16,16,30,17,17,14], "7":[31,1,2,4,8,8,8],
        "8":[14,17,17,14,17,17,14], "9":[14,17,17,15,1,1,14],
        ".":[0,0,0,0,0,6,6], ",":[0,0,0,0,6,6,4],
        ":":[0,6,6,0,6,6,0], ";":[0,6,6,0,6,6,4],
        "-":[0,0,0,31,0,0,0], "+":[0,4,4,31,4,4,0],
        "%":[17,2,4,8,17,0,0], "/":[1,2,4,8,16,0,0],
        "_":[0,0,0,0,0,0,31], "?":[14,17,1,2,4,0,4],
        "@":[14,17,23,21,23,16,14],
        "=":[0,31,0,31,0,0,0], "(":[2,4,8,8,8,4,2], ")":[8,4,2,2,2,4,8],
        "[":[14,8,8,8,8,8,14], "]":[14,2,2,2,2,2,14],
        "<":[2,4,8,16,8,4,2], ">":[8,4,2,1,2,4,8]
    };

    function log(event, payload) {
        var body = payload || {};
        body.event = event;
        try {
            console.info(LOG_PREFIX + JSON.stringify(body));
        } catch (error) {
            console.info(LOG_PREFIX + event);
        }
    }

    function createFailureStream() {
        return {episode: 0, episodeFailures: 0, totalFailures: 0, nextReportAt: 1};
    }

    function createFailureStreams(count) {
        var streams = [];
        for (var index = 0; index < count; index += 1) {
            streams.push(createFailureStream());
        }
        return streams;
    }

    function recordFailure(stream) {
        stream.totalFailures += 1;
        stream.episodeFailures += 1;
        if (stream.episodeFailures === 1) {
            stream.episode += 1;
            stream.nextReportAt = 1;
        }
        if (stream.episodeFailures !== stream.nextReportAt) {
            return false;
        }
        stream.nextReportAt *= 2;
        return true;
    }

    function recordSuccess(stream) {
        stream.episodeFailures = 0;
        stream.nextReportAt = 1;
    }

    function finite(value) {
        return typeof value === "number" && isFinite(value);
    }

    function clamp(value, low, high) {
        return Math.max(low, Math.min(high, value));
    }

    function safeGet(group, key, fallback) {
        try {
            var value = engine.getValue(group, key);
            return finite(value) ? value : (fallback || 0);
        } catch (error) {
            return fallback || 0;
        }
    }

    function safeParameter(group, key, fallback) {
        try {
            if (typeof engine.getParameter === "function") {
                var value = engine.getParameter(group, key);
                return finite(value) ? value : (fallback || 0);
            }
        } catch (error) {
            // fall through to getValue
        }
        return safeGet(group, key, fallback);
    }

    function safeTrackMetadata(deck) {
        var failureStream = trackMetadataFailureStreams[deck];
        try {
            if (typeof engine.getTrackMetadata === "function") {
                var metadata = engine.getTrackMetadata("[Channel" + deck + "]");
                recordSuccess(failureStream);
                if (metadata) {
                    return metadata;
                }
            }
        } catch (error) {
            if (recordFailure(failureStream)) {
                log("TRACK_METADATA_UNAVAILABLE", {deck: deck, error: String(error),
                    episode: failureStream.episode,
                    episodeFailures: failureStream.episodeFailures,
                    totalFailures: failureStream.totalFailures});
            }
        }
        return null;
    }

    function safeDisplayState(deck, position, windowFraction) {
        var failureStream = displayStateFailureStreams[deck];
        try {
            if (typeof engine.getS8DisplayState === "function") {
                var state = engine.getS8DisplayState(
                    "[Channel" + deck + "]", position, windowFraction);
                recordSuccess(failureStream);
                return state || null;
            }
        } catch (error) {
            if (recordFailure(failureStream)) {
                log("DISPLAY_STATE_UNAVAILABLE", {deck: deck, error: String(error),
                    episode: failureStream.episode,
                    episodeFailures: failureStream.episodeFailures,
                    totalFailures: failureStream.totalFailures});
            }
        }
        return null;
    }

    function safeBrowserState(visibleRows) {
        try {
            if (typeof engine.getS8BrowserState === "function") {
                var state = engine.getS8BrowserState(clamp(Math.round(visibleRows || 5), 4, 9));
                recordSuccess(browserStateFailureStream);
                return state || null;
            }
        } catch (error) {
            if (recordFailure(browserStateFailureStream)) {
                log("BROWSER_STATE_UNAVAILABLE", {error: String(error),
                    episode: browserStateFailureStream.episode,
                    episodeFailures: browserStateFailureStream.episodeFailures,
                    totalFailures: browserStateFailureStream.totalFailures});
            }
        }
        return null;
    }

    function safeMetadataString(metadata, property) {
        if (!metadata) {
            return "";
        }
        try {
            var value = metadata[property];
            return value === undefined || value === null ? "" : String(value);
        } catch (error) {
            return "";
        }
    }

    function bridgeValue(side, suffix, fallback) {
        var key = (side === "LEFT" ? "left_" : "right_") + suffix;
        return safeGet("[S8Display]", key, fallback);
    }

    function deckForScreen(screen) {
        var side = screen === 0 ? "LEFT" : "RIGHT";
        var fallback = screen === 0 ? 1 : 2;
        var deck = Math.round(bridgeValue(side, "deck", fallback));
        if (screen === 0 && deck !== 1 && deck !== 3) {
            deck = 1;
        }
        if (screen === 1 && deck !== 2 && deck !== 4) {
            deck = 2;
        }
        return deck;
    }

    function effectUnitForScreen(screen) {
        return deckForScreen(screen);
    }

    function safeEffectState(unit) {
        try {
            if (typeof engine.getS8EffectState === "function") {
                return engine.getS8EffectState(unit) || null;
            }
        } catch (error) {
            log("EFFECT_STATE_UNAVAILABLE", {unit: unit, error: String(error)});
        }
        return null;
    }

    function safePreference(name, fallback) {
        try {
            if (typeof engine.getS8Preference === "function") {
                var value = engine.getS8Preference(name, fallback);
                return finite(value) ? value : fallback;
            }
        } catch (error) {
            log("PREFERENCE_UNAVAILABLE", {name: name, error: String(error)});
        }
        return fallback;
    }

    function readProductState(side) {
        var generationBefore = Math.round(bridgeValue(side, "generation", 0));
        var connected = bridgeValue(side, "connected", 0) > 0;
        var result = {
            available: false,
            generation: generationBefore,
            revision: Math.round(bridgeValue(side, "state_revision", 0)),
            viewMode: clamp(Math.round(bridgeValue(side, "view_mode", 0)), 0, 2),
            waveformMode: clamp(Math.round(bridgeValue(side, "waveform_mode", 0)), 0, 3),
            informationOverlay: clamp(Math.round(bridgeValue(side, "information_overlay", 0)), 0, 4),
            stemsPage: clamp(Math.round(bridgeValue(side, "stems_page", 0)), 0, 1),
            activePanel: clamp(Math.round(bridgeValue(side, "active_panel", 0)), 0, 3),
            settingsOpen: bridgeValue(side, "settings_open", 0) > 0,
            settingsPage: clamp(Math.round(bridgeValue(side, "settings_page", 0)), 0, 11),
            waveformZoom: clamp(Math.round(bridgeValue(side, "waveform_zoom", 7)), 0, 9),
            mixerFxProduct: clamp(Math.round(bridgeValue(side, "mixer_fx_product", 0)), 0, 4),
            masterTempoPopup: bridgeValue(side, "master_tempo_popup", 0) > 0,
            masterTempoBpm: bridgeValue(side, "master_tempo_bpm", 124),
            loadStatus: clamp(Math.round(bridgeValue(side, "load_status", 0)), 0, 2),
            loadRejectReason: clamp(Math.round(bridgeValue(side, "load_reject_reason", 0)), 0, 3),
            sortPopup: bridgeValue(side, "sort_popup", 0) > 0,
            // Android parity: one arbitrated popup per side. Numeric only, so the
            // renderer keeps owning the text.
            popupKind: clamp(Math.round(bridgeValue(side, "popup_kind", 0)), 0, 3),
            popupPhase: clamp(Math.round(bridgeValue(side, "popup_phase", 0)), 0, 5),
            popupTitle: clamp(Math.round(bridgeValue(side, "popup_title", 0)), 0, 5),
            popupValue: bridgeValue(side, "popup_value", 0),
            popupHasValue: bridgeValue(side, "popup_has_value", 0) > 0,
            popupDeck: Math.max(0, Math.round(bridgeValue(side, "popup_deck", 0))),
            popupMaster: bridgeValue(side, "popup_master", 0) > 0,
            popupPendingIndex: Math.max(0, Math.round(bridgeValue(side, "popup_pending_index", 0))),
            popupPendingDescending: bridgeValue(side, "popup_pending_descending", 0) > 0,
            popupPendingCriteria: Math.max(0, Math.round(bridgeValue(side, "popup_pending_criteria", 0))),
            sliceBoundaries: [],
            sliceBeats: bridgeValue(side, "slice_beats", 0),
            sliceToken: bridgeValue(side, "slice_token", 0),
            sliceMask: Math.round(bridgeValue(side, "slice_mask", 0)),
            samplerBank: Math.max(0, Math.round(bridgeValue(side, "sampler_bank", 0)))
        };
        for (var slice = 1; slice <= 9; slice += 1) {
            result.sliceBoundaries.push(bridgeValue(side, slice <= 8 ? "slice_" + slice : "slice_end", -1));
        }
        var generationAfter = Math.round(bridgeValue(side, "generation", 0));
        result.available = connected && generationBefore > 0 && generationBefore === generationAfter;
        if (!result.available) {
            result.generation = generationAfter;
            result.viewMode = 0;
            result.waveformMode = 0;
            result.informationOverlay = 0;
            result.stemsPage = 0;
            result.activePanel = 0;
            result.settingsOpen = false;
            result.settingsPage = 0;
            result.waveformZoom = 7;
            result.mixerFxProduct = 0;
            result.masterTempoPopup = false;
            result.masterTempoBpm = 124;
            result.loadStatus = 0;
            result.loadRejectReason = 0;
            result.sortPopup = false;
            result.popupKind = 0;
            result.popupPhase = 0;
            result.popupTitle = 0;
            result.popupValue = 0;
            result.popupHasValue = false;
            result.popupDeck = 0;
            result.popupMaster = false;
            result.popupPendingIndex = 0;
            result.popupPendingDescending = false;
            result.popupPendingCriteria = 0;
            result.sliceBeats = 0;
            result.sliceMask = 0;
            result.sliceBoundaries = [];
        }
        return result;
    }

    function readDeckSummary(deck) {
        var group = "[Channel" + deck + "]";
        var loaded = safeGet(group, "track_loaded", 0) > 0;
        var metadata = loaded ? safeTrackMetadata(deck) : null;
        var bpm = safeGet(group, "visual_bpm", 0) || safeGet(group, "bpm", 0);
        var position = clamp(safeGet(group, "playposition", 0), 0, 1);
        var displayState = loaded ? safeDisplayState(deck, position, 1) : null;
        return {
            deck: deck,
            loaded: loaded,
            bpmPrecision: clamp(Math.round(safePreference("bpm_precision", 2)), 1, 2),
            title: loaded ? safeMetadataString(metadata, "title") : "",
            artist: loaded ? safeMetadataString(metadata, "artist") : "",
            keyText: loaded ? safeMetadataString(metadata, "key") : "",
            bpm: bpm,
            play: (safeGet(group, "play_indicator", 0) || safeGet(group, "play", 0)) > 0,
            position: position,
            overview: displayState && displayState.overview ? displayState.overview : [],
            artwork: loaded ? readArtwork(group, metadata) : null,
            loop: safeGet(group, "loop_enabled", 0) > 0,
            loopSize: Math.max(0, safeGet(group, "beatloop_size", 0)),
            loopStart: safeGet(group, "loop_start_position", -1),
            loopEnd: safeGet(group, "loop_end_position", -1),
            trackSamples: Math.max(0, safeGet(group, "track_samples", 0)),
            duration: Math.max(0, safeGet(group, "duration", 0)),
            bpm: Math.max(0, safeGet(group, "bpm", 0)),
            sync: safeGet(group, "sync_enabled", 0) > 0,
            master: safeGet(group, "sync_leader", 0) > 0
        };
    }

    var artworkCache = Object.create(null);
    function readArtwork(group, metadata) {
        var identity = safeMetadataString(metadata, "identity");
        var now = Date.now();
        var cached = artworkCache[group];
        if (!cached || cached.identity !== identity) {
            cached = {identity: identity, nextPoll: 0, state: {available: false, revision: 0}};
            artworkCache[group] = cached;
        }
        if (now >= cached.nextPoll) {
            cached.nextPoll = now + 250;
            try {
                if (typeof engine.getS8Artwork === "function") {
                    var state = engine.getS8Artwork(group);
                    cached.state = state && state.available && state.width > 0 && state.width <= 64 &&
                        state.height > 0 && state.height <= 64 && state.pixels &&
                        state.pixels.length === state.width * state.height ? state :
                        {available: false, revision: state ? state.revision : 0};
                }
            } catch (error) {
                cached.state = {available: false, revision: 0};
            }
        }
        return cached.state;
    }

    function readSnapshot(screen) {
        var side = screen === 0 ? "LEFT" : "RIGHT";
        var deck = deckForScreen(screen);
        var group = "[Channel" + deck + "]";
        var bpm = safeGet(group, "visual_bpm", 0);
        if (!(bpm > 0)) {
            bpm = safeGet(group, "bpm", 0);
        }
        var loaded = safeGet(group, "track_loaded", 0) > 0;
        var originalBpm = safeGet(group, "file_bpm", 0);
        var ratePercent = originalBpm > 0 && bpm > 0 ? 100 * (bpm / originalBpm - 1) : null;
        var position = clamp(safeGet(group, "playposition", 0), 0, 1);
        var duration = Math.max(0, safeGet(group, "duration", 0));
        var metadata = loaded ? safeTrackMetadata(deck) : null;
        var productState = readProductState(side);
        var zoom = productState.available ? productState.waveformZoom : waveformZoom[screen];
        var visibleSeconds = 8 * Math.pow(2, (7 - zoom) / 2);
        var windowFraction = duration > 0 ? clamp(visibleSeconds / duration, 0.001, 1) : 1;
        var waveformCenter = position;
        var padMode = clamp(Math.round(bridgeValue(side, "pad_mode", 0)), 0, 4);
        if ((padMode === 2 || padMode === 3) && productState.sliceBeats > 0) {
            try {
                if (typeof engine.isS8SliceWindowCurrent !== "function" ||
                        !engine.isS8SliceWindowCurrent(group, productState.sliceToken)) {
                    productState.sliceBeats = 0;
                    productState.sliceBoundaries = [];
                    productState.sliceMask = 0;
                }
            } catch (error) {
                productState.sliceBeats = 0;
                productState.sliceBoundaries = [];
                productState.sliceMask = 0;
            }
        }
        if ((padMode === 2 || padMode === 3) && productState.sliceBeats > 0 &&
                productState.sliceBoundaries.length === 9) {
            windowFraction = productState.sliceBoundaries[8] - productState.sliceBoundaries[0];
            waveformCenter = (productState.sliceBoundaries[0] + productState.sliceBoundaries[8]) / 2;
        }
        var displayState = loaded ? safeDisplayState(deck, waveformCenter, windowFraction) : null;
        var waveform = displayState && displayState.waveform ? displayState.waveform : [];
        var overview = displayState && displayState.overview ? displayState.overview : [];
        var hotcues = displayState && displayState.hotcues ? displayState.hotcues : [];
        var browserRows = clamp(Math.round(safePreference("browser_rows", 5)), 4, 9);
        var browserState = Math.round(bridgeValue(side, "context", 0)) === 1 ?
            safeBrowserState(browserRows) : null;
        var unit = effectUnitForScreen(screen);
        var unitGroup = "[EffectRack1_EffectUnit" + unit + "]";
        var effectState = safeEffectState(unit);
        var fx = [];
        for (var slot = 1; slot <= 3; slot += 1) {
            var slotGroup = unitGroup.slice(0, -1) + "_Effect" + slot + "]";
            var nativeSlot = effectState && effectState.slots ? effectState.slots[slot - 1] : null;
            fx.push({
                enabled: safeGet(slotGroup, "enabled", 0) > 0,
                meta: clamp(safeParameter(slotGroup, "meta", 0), 0, 1),
                name: nativeSlot && nativeSlot.name ? String(nativeSlot.name) : "",
                loadedEffect: nativeSlot ? Number(nativeSlot.loadedEffect) || 0 : 0,
                parameters: nativeSlot && nativeSlot.parameters ? nativeSlot.parameters : []
            });
        }
        var samplers = [];
        if (padMode === 4) {
            var firstSampler = (screen === 0 ? 1 : 9) + productState.samplerBank * 16;
            for (var sampler = firstSampler; sampler < firstSampler + 8; sampler += 1) {
                var samplerGroup = "[Sampler" + sampler + "]";
                var samplerAvailable = sampler <= safeGet("[App]", "num_samplers", 0);
                var samplerLoaded = samplerAvailable && safeGet(samplerGroup, "track_loaded", 0) > 0;
                var samplerMetadata = samplerLoaded && typeof engine.getTrackMetadata === "function" ?
                    engine.getTrackMetadata(samplerGroup) : null;
                samplers.push({number: sampler, available: samplerAvailable, loaded: samplerLoaded,
                    title: safeMetadataString(samplerMetadata, "title"),
                    play: samplerAvailable && safeGet(samplerGroup, "play", 0) > 0,
                    position: samplerAvailable ? clamp(safeGet(samplerGroup, "playposition", 0), 0, 1) : 0});
            }
        }
        return {
            screen: screen,
            samplers: samplers,
            side: side,
            deck: deck,
            group: group,
            context: Math.round(bridgeValue(side, "context", 0)),
            touchMask: Math.round(bridgeValue(side, "touch_mask", 0)),
            fxSlot: clamp(Math.round(bridgeValue(side, "fx_slot", 1)), 1, 4),
            padMode: clamp(Math.round(bridgeValue(side, "pad_mode", 0)), 0, 4),
            loaded: loaded,
            artwork: readArtwork(group, metadata),
            title: loaded ? safeMetadataString(metadata, "title") : "",
            artist: loaded ? safeMetadataString(metadata, "artist") : "",
            keyText: loaded ? safeMetadataString(metadata, "key") : "",
            keylock: safeGet(group, "keylock", 0) > 0,
            pitch: safeGet(group, "pitch", 0),
            bpm: bpm,
            originalBpm: originalBpm,
            ratePercent: ratePercent,
            bpmPrecision: clamp(Math.round(safePreference("bpm_precision", 2)), 1, 2),
            browserRows: browserRows,
            play: (safeGet(group, "play_indicator", 0) || safeGet(group, "play", 0)) > 0,
            cue: safeGet(group, "cue_indicator", 0) > 0,
            sync: safeGet(group, "sync_enabled", 0) > 0,
            master: safeGet(group, "sync_leader", 0) > 0,
            slip: safeGet(group, "slip_enabled", 0) > 0,
            pfl: safeGet(group, "pfl", 0) > 0,
            quantize: safeGet(group, "quantize", 0) > 0,
            loop: safeGet(group, "loop_enabled", 0) > 0,
            loopSize: Math.max(0, safeGet(group, "beatloop_size", 0)),
            loopStart: safeGet(group, "loop_start_position", -1),
            loopEnd: safeGet(group, "loop_end_position", -1),
            rate: safeGet(group, "rate", 0),
            position: position,
            duration: duration,
            trackSamples: Math.max(0, safeGet(group, "track_samples", 0)),
            elapsed: position * duration,
            remaining: Math.max(0, duration - position * duration),
            beatActive: safeGet(group, "beat_active", 0) > 0,
            beatPhase: clamp(safeGet(group, "beat_distance", 0), -1, 1),
            waveformComplete: !!(displayState && displayState.waveformComplete),
            waveform: waveform,
            waveformWindowStart: displayState && finite(Number(displayState.waveformWindowStart)) ?
                Number(displayState.waveformWindowStart) : position - windowFraction / 2,
            waveformWindowEnd: displayState && finite(Number(displayState.waveformWindowEnd)) ?
                Number(displayState.waveformWindowEnd) : position + windowFraction / 2,
            waveformZoom: zoom,
            overview: overview,
            hotcues: hotcues,
            browser: browserState || {available: false, mode: "tracks", path: "BROWSER", rows: [], selectedIndex: 0},
            productState: productState,
            deckSummaries: productState.viewMode > 0 ? [1, 2, 3, 4].map(readDeckSummary) : [],
            volume: clamp(safeParameter(group, "volume", 1), 0, 1),
            fxUnit: unit,
            fxMode: Math.round(safePreference("fx_unit_" + unit + "_mode", 0)) ? "SINGLE" : "GROUP",
            effectState: effectState,
            fxEnabled: safeGet(unitGroup, "enabled", 0) > 0,
            fxMix: clamp(safeParameter(unitGroup, "mix", 0), 0, 1),
            fx: fx
        };
    }

    function normalizedText(value) {
        var input = String(value || "").toUpperCase();
        var out = "";
        for (var i = 0; i < input.length; i += 1) {
            var c = input.charAt(i);
            if (FONT[c]) {
                out += c;
            } else {
                // Small transliteration set for common Latin metadata.
                var map = {"Á":"A","À":"A","Â":"A","Ã":"A","Ä":"A","É":"E","È":"E","Ê":"E","Ë":"E",
                    "Í":"I","Ì":"I","Î":"I","Ï":"I","Ó":"O","Ò":"O","Ô":"O","Õ":"O","Ö":"O",
                    "Ú":"U","Ù":"U","Û":"U","Ü":"U","Ç":"C","Ñ":"N"};
                out += map[c] || "?";
            }
        }
        return out;
    }

    function formatNumber(value, digits) {
        if (!finite(value)) {
            return "0";
        }
        return value.toFixed(digits === undefined ? 1 : digits);
    }

    function formatLoopSize(value) {
        value = Number(value);
        if (!finite(value) || value <= 0) { return "--"; }
        if (Math.abs(value - Math.round(value)) < 0.000001) {
            return String(Math.round(value));
        }
        var denominators = [2, 4, 8, 16, 32];
        for (var index = 0; index < denominators.length; index += 1) {
            if (Math.abs(value - 1 / denominators[index]) < 0.000001) {
                return "1/" + String(denominators[index]);
            }
        }
        return formatNumber(value, 3).replace(/0+$/, "").replace(/\.$/, "");
    }

    function formatTime(seconds) {
        seconds = Math.max(0, Math.round(seconds || 0));
        var minutes = Math.floor(seconds / 60);
        var remain = seconds % 60;
        return String(minutes) + ":" + (remain < 10 ? "0" : "") + String(remain);
    }

    function fill(pixels, color) {
        for (var i = 0; i < PIXEL_COUNT; i += 1) {
            pixels[i] = color;
        }
    }

    function pixel(pixels, x, y, color) {
        if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT) {
            return;
        }
        pixels[y * WIDTH + x] = color;
    }

    function fillRect(pixels, x, y, w, h, color) {
        var left = clamp(Math.floor(x), 0, WIDTH);
        var top = clamp(Math.floor(y), 0, HEIGHT);
        var right = clamp(Math.floor(x + w), 0, WIDTH);
        var bottom = clamp(Math.floor(y + h), 0, HEIGHT);
        for (var yy = top; yy < bottom; yy += 1) {
            var base = yy * WIDTH;
            for (var xx = left; xx < right; xx += 1) {
                pixels[base + xx] = color;
            }
        }
    }

    // RGB565 has no alpha channel. A sparse ordered dither retains waveform
    // peaks and the playhead while visibly marking the loop interval.
    function fillTranslucentLoopShade(pixels, x, y, w, h) {
        var left = clamp(Math.floor(x), 0, WIDTH);
        var top = clamp(Math.floor(y), 0, HEIGHT);
        var right = clamp(Math.floor(x + w), 0, WIDTH);
        var bottom = clamp(Math.floor(y + h), 0, HEIGHT);
        for (var row = top; row < bottom; row += 1) {
            for (var column = left; column < right; column += 1) {
                if (((column + row * 2) & 3) === 0) {
                    pixel(pixels, column, row, COLOR.loopShade);
                }
            }
        }
    }

    function rect(pixels, x, y, w, h, color) {
        fillRect(pixels, x, y, w, 1, color);
        fillRect(pixels, x, y + h - 1, w, 1, color);
        fillRect(pixels, x, y, 1, h, color);
        fillRect(pixels, x + w - 1, y, 1, h, color);
    }

    function drawChar(pixels, c, x, y, scale, color) {
        var rows = FONT[c] || FONT["?"];
        for (var row = 0; row < 7; row += 1) {
            for (var col = 0; col < 5; col += 1) {
                if (rows[row] & (1 << (4 - col))) {
                    fillRect(pixels, x + col * scale, y + row * scale, scale, scale, color);
                }
            }
        }
    }

    function text(pixels, value, x, y, scale, color, maxChars) {
        var clean = normalizedText(value);
        if (maxChars && clean.length > maxChars) {
            clean = clean.slice(0, Math.max(0, maxChars - 1)) + ">";
        }
        var cursor = x;
        for (var i = 0; i < clean.length; i += 1) {
            drawChar(pixels, clean.charAt(i), cursor, y, scale, color);
            cursor += 6 * scale;
        }
        return cursor;
    }

    function labelBox(pixels, label, x, y, activeFlag, activeColor) {
        var color = activeFlag ? activeColor : COLOR.muted;
        fillRect(pixels, x, y, 58, 18, color);
        text(pixels, label, x + 5, y + 5, 1, COLOR.primary, 8);
    }

    function bar(pixels, x, y, w, h, value, color) {
        value = clamp(value, 0, 1);
        fillRect(pixels, x, y, w, h, COLOR.muted);
        fillRect(pixels, x, y, Math.round(w * value), h, color);
        rect(pixels, x, y, w, h, COLOR.border);
    }

    function drawCdPlaceholder(pixels, x, y, size, selected) {
        fillRect(pixels, x, y, size, size, COLOR.panel);
        rect(pixels, x, y, size, size, selected ? COLOR.cyan : COLOR.border);
        var radius = Math.max(3, Math.floor(size * 0.34));
        var centerX = x + Math.floor(size / 2);
        var centerY = y + Math.floor(size / 2);
        for (var yy = -radius; yy <= radius; yy += 1) {
            for (var xx = -radius; xx <= radius; xx += 1) {
                var distance = xx * xx + yy * yy;
                if (distance <= radius * radius && distance >= (radius - 2) * (radius - 2)) {
                    pixel(pixels, centerX + xx, centerY + yy, COLOR.secondary);
                }
            }
        }
        fillRect(pixels, centerX - 1, centerY - 1, 3, 3, COLOR.orange);
    }

    function drawArtworkScaled(pixels, artwork, x, y, size) {
        if (!artwork || !artwork.available || !artwork.width || !artwork.height || !artwork.pixels) {
            return false;
        }
        var scale = Math.min(size / artwork.width, size / artwork.height);
        var width = Math.max(1, Math.floor(artwork.width * scale));
        var height = Math.max(1, Math.floor(artwork.height * scale));
        var left = x + Math.floor((size - width) / 2);
        var top = y + Math.floor((size - height) / 2);
        for (var yy = 0; yy < height; yy += 1) {
            for (var xx = 0; xx < width; xx += 1) {
                var sourceX = Math.min(artwork.width - 1, Math.floor(xx / scale));
                var sourceY = Math.min(artwork.height - 1, Math.floor(yy / scale));
                pixel(pixels, left + xx, top + yy, artwork.pixels[sourceY * artwork.width + sourceX]);
            }
        }
        return true;
    }

    function sampleValue(sample, key) {
        if (!sample) { return 0; }
        var value = Number(sample[key]);
        return finite(value) ? clamp(value, 0, 1) : 0;
    }

    function waveformSignature(samples) {
        if (!samples || !samples.length) { return "0"; }
        var parts = [samples.length];
        for (var index = 0; index < 8; index += 1) {
            var sample = samples[Math.floor(index * (samples.length - 1) / 7)];
            parts.push(Math.round(sampleValue(sample, "low") * 31));
            parts.push(Math.round(sampleValue(sample, "mid") * 31));
            parts.push(Math.round(sampleValue(sample, "high") * 31));
        }
        return parts.join(".");
    }

    function renderWaveform(pixels, snapshot, accent) {
        var x = 8, y = 80, w = 464, h = 84, center = y + Math.floor(h / 2);
        fillRect(pixels, x, y, w, h, COLOR.panel);
        rect(pixels, x, y, w, h, COLOR.border);
        var samples = snapshot.waveform || [];
        if (!samples.length) {
            text(pixels, snapshot.loaded ? "WAVEFORM ANALYSIS PENDING" : "NO TRACK LOADED",
                x + 110, y + 45, 1, COLOR.secondary, 40);
            return;
        }

        var windowStart = snapshot.waveformWindowStart;
        var windowEnd = snapshot.waveformWindowEnd;
        var windowSpan = Math.max(0.000001, windowEnd - windowStart);
        if (snapshot.loop && snapshot.trackSamples > 0 && snapshot.loopStart >= 0 && snapshot.loopEnd > snapshot.loopStart) {
            var loopStartNorm = snapshot.loopStart / snapshot.trackSamples;
            var loopEndNorm = snapshot.loopEnd / snapshot.trackSamples;
            var loopLeft = x + Math.round(w * (loopStartNorm - windowStart) / windowSpan);
            var loopRight = x + Math.round(w * (loopEndNorm - windowStart) / windowSpan);
            fillRect(pixels, loopLeft, y + 1, loopRight - loopLeft, h - 2, COLOR.loopShade);
            fillRect(pixels, loopLeft, y + 1, 2, h - 2, COLOR.green);
            fillRect(pixels, loopRight - 1, y + 1, 2, h - 2, COLOR.green);
        }

        var visibleTrackSeconds = Math.max(0.001, snapshot.duration * windowSpan);
        if (snapshot.bpm > 0) {
            var beatPixels = w * (60 / snapshot.bpm) / visibleTrackSeconds;
            if (beatPixels >= 5) {
                var offset = snapshot.beatPhase * beatPixels;
                for (var beatX = Math.floor(w / 2 - offset); beatX < w; beatX += beatPixels) {
                    fillRect(pixels, x + Math.round(beatX), y + 1, 1, h - 2, COLOR.muted);
                }
                for (beatX = Math.floor(w / 2 - offset - beatPixels); beatX >= 0; beatX -= beatPixels) {
                    fillRect(pixels, x + Math.round(beatX), y + 1, 1, h - 2, COLOR.muted);
                }
            }
        }

        var waveformMode = snapshot.productState ? snapshot.productState.waveformMode : 0;
        for (var column = 0; column < w - 2; column += 1) {
            var sample = samples[Math.floor(column * samples.length / (w - 2))];
            var low = Math.round(sampleValue(sample, "low") * (h / 2 - 3));
            var mid = Math.round(sampleValue(sample, "mid") * 27);
            var high = Math.round(sampleValue(sample, "high") * 17);
            var allPeak = Math.round(sampleValue(sample, "peak") * (h / 2 - 3));
            if (!low && !mid && !high && !allPeak) { continue; }
            if (waveformMode === 1) {
                var peak = Math.max(allPeak, low, mid, high);
                fillRect(pixels, x + 1 + column, center - peak, 1, peak * 2 + 1, COLOR.cyan);
            } else if (waveformMode === 3) {
                fillRect(pixels, x + 1 + column, y + 16 - Math.round(low / 3), 1,
                    Math.max(1, Math.round(low * 2 / 3)), COLOR.orange);
                fillRect(pixels, x + 1 + column, y + 42 - Math.round(mid / 3), 1,
                    Math.max(1, Math.round(mid * 2 / 3)), COLOR.green);
                fillRect(pixels, x + 1 + column, y + 68 - Math.round(high / 3), 1,
                    Math.max(1, Math.round(high * 2 / 3)), COLOR.cyan);
            } else {
                fillRect(pixels, x + 1 + column, center - low, 1, low * 2 + 1, COLOR.orange);
                fillRect(pixels, x + 1 + column, center - mid, 1, mid * 2 + 1, COLOR.green);
                fillRect(pixels, x + 1 + column, center - high, 1, high * 2 + 1, COLOR.cyan);
                if (allPeak > Math.max(low, mid, high) + 4) {
                    pixel(pixels, x + 1 + column, center - allPeak, COLOR.primary);
                    pixel(pixels, x + 1 + column, center + allPeak, COLOR.primary);
                }
            }
        }

        for (var cueIndex = 0; cueIndex < snapshot.hotcues.length; cueIndex += 1) {
            var cuePosition = snapshot.trackSamples > 0 ? Number(snapshot.hotcues[cueIndex].position) / snapshot.trackSamples : -1;
            if (finite(cuePosition) && cuePosition >= windowStart && cuePosition <= windowEnd) {
                var cueX = x + Math.round(w * (cuePosition - windowStart) / windowSpan);
                fillRect(pixels, cueX, y + 1, 2, 8, COLOR.yellow);
            }
        }
        var playhead = (snapshot.padMode === 2 || snapshot.padMode === 3) && snapshot.productState.sliceBeats > 0 ?
            clamp(Math.round(w * (snapshot.position - windowStart) / windowSpan), 1, w - 2) : Math.floor(w / 2);
        fillRect(pixels, x + playhead - 1, y + 1, 3, h - 2,
            snapshot.beatActive ? COLOR.primary : accent);
        if ((snapshot.padMode === 2 || snapshot.padMode === 3) && snapshot.productState.sliceBeats > 0) {
            var sliceColor = snapshot.padMode === 3 ? COLOR.green : COLOR.cyan;
            var boundaries = snapshot.productState.sliceBoundaries;
            for (var slice = 0; slice < 8; slice += 1) {
                var left = x + Math.round(w * (boundaries[slice] - windowStart) / windowSpan);
                var right = x + Math.round(w * (boundaries[slice + 1] - windowStart) / windowSpan);
                var current = snapshot.position >= boundaries[slice] && snapshot.position < boundaries[slice + 1];
                if (snapshot.productState.sliceMask & (1 << slice)) {
                    fillRect(pixels, left, y + h - 8, right - left, 7, sliceColor);
                }
                fillRect(pixels, left, y + 1, 1, h - 2, sliceColor);
                text(pixels, String(slice + 1), left + 3, y + 5, 1,
                    current ? COLOR.primary : sliceColor, 1);
            }
        }
        if (waveformMode === 2) {
            var phaseX = x + Math.floor(w / 2) + Math.round(snapshot.beatPhase * 80);
            fillRect(pixels, phaseX - 3, y + 4, 7, 9, accent);
            text(pixels, "PHASE", x + 6, y + 6, 1, COLOR.primary, 5);
        }
    }

    function renderOverview(pixels, snapshot, accent) {
        var x = 36, y = 187, w = 436, h = 22;
        fillRect(pixels, 8, y, 24, h, accent);
        text(pixels, "ABCD".charAt(clamp(snapshot.deck - 1, 0, 3)), 17, y + 5, 2, COLOR.bg, 1);
        fillRect(pixels, x, y, w, h, COLOR.panel);
        var samples = snapshot.overview || [];
        for (var column = 0; column < w && samples.length; column += 1) {
            var sample = samples[Math.floor(column * samples.length / w)];
            var peak = Math.max(sampleValue(sample, "peak"), sampleValue(sample, "low"),
                sampleValue(sample, "mid"), sampleValue(sample, "high"));
            var peakHeight = Math.max(1, Math.round(peak * 10));
            fillRect(pixels, x + column, y + 12 - peakHeight, 1, peakHeight * 2 + 1,
                column / w < snapshot.position ? COLOR.muted : COLOR.orange);
        }
        if (snapshot.duration > 0) {
            for (var minute = 60; minute < snapshot.duration; minute += 60) {
                fillRect(pixels, x + Math.round(w * minute / snapshot.duration), y, 1, h, COLOR.primary);
            }
        }
        for (var index = 0; index < snapshot.hotcues.length; index += 1) {
            var cue = snapshot.hotcues[index];
            var cuePosition = snapshot.trackSamples > 0 ? Number(cue.position) / snapshot.trackSamples : -1;
            if (finite(cuePosition) && cuePosition >= 0 && cuePosition <= 1) {
                fillRect(pixels, x + Math.round(w * cuePosition), y, 2, h, COLOR.yellow);
            }
        }
        fillRect(pixels, x + Math.round(w * snapshot.position), y, 2, h, COLOR.primary);
        rect(pixels, x, y, w, h, COLOR.border);
    }

    function renderHotcues(pixels, snapshot, accent) {
        var bySlot = {};
        for (var index = 0; index < snapshot.hotcues.length; index += 1) {
            bySlot[Math.round(Number(snapshot.hotcues[index].slot))] = snapshot.hotcues[index];
        }
        for (var slot = 1; slot <= 8; slot += 1) {
            var cue = bySlot[slot];
            var x = 8 + (slot - 1) * 59;
            var packed = cue && /^#[0-9a-f]{6}$/i.test(String(cue.color)) ?
                parseInt(String(cue.color).slice(1), 16) : -1;
            var color = packed >= 0 ? rgb565((packed >> 16) & 255, (packed >> 8) & 255, packed & 255) : accent;
            fillRect(pixels, x, 166, 55, 18, cue ? COLOR.selection : COLOR.panel);
            rect(pixels, x, 166, 55, 18, cue ? color : COLOR.border);
            text(pixels, cue ? (String(slot) + " " + String(cue.label || "")) : String(slot),
                x + 3, 172, 1, cue ? color : COLOR.secondary, 7);
        }
    }

    function firstSetBit(mask, start, count) {
        for (var i = 0; i < count; i += 1) {
            if (mask & (1 << (start + i))) {
                return i + 1;
            }
        }
        return 0;
    }

    function touchLabel(snapshot) {
        var n = firstSetBit(snapshot.touchMask, 0, 4);
        if (n) { return "FX TOUCH " + n; }
        n = firstSetBit(snapshot.touchMask, 4, 4);
        if (n) { return "SCREEN KNOB " + n; }
        n = firstSetBit(snapshot.touchMask, 8, 4);
        if (n) { return "FADER TOUCH " + n; }
        if (snapshot.touchMask & (1 << 12)) { return "LOOP TOUCH"; }
        if (snapshot.touchMask & (1 << 13)) { return "TOUCHSTRIP"; }
        if (snapshot.touchMask & (1 << 14)) { return "SHIFT"; }
        return "";
    }

    function padModeLabel(mode) {
        return ["HOTCUE", "LOOP", "FREEZE", "SLICER", "REMIX"][mode] || "HOTCUE";
    }

    function renderDeckTop(pixels, snapshot, accent) {
        fillRect(pixels, 0, 0, WIDTH, 80, COLOR.bg);
        fillRect(pixels, 8, 7, 64, 64, COLOR.panel);
        var artwork = snapshot.artwork;
        if (artwork && artwork.available) {
            var artX = 8 + Math.floor((64 - artwork.width) / 2);
            var artY = 7 + Math.floor((64 - artwork.height) / 2);
            for (var row = 0; row < artwork.height; row += 1) {
                for (var col = 0; col < artwork.width; col += 1) {
                    pixels[(artY + row) * WIDTH + artX + col] = artwork.pixels[row * artwork.width + col];
                }
            }
        } else {
            drawCdPlaceholder(pixels, 8, 7, 64, false);
        }
        text(pixels, snapshot.loaded ? snapshot.title : "NO TRACK LOADED", 82, 7, 2,
            snapshot.loaded ? COLOR.cyan : COLOR.secondary, 25);
        text(pixels, snapshot.loaded ? snapshot.artist : "", 82, 29, 1, COLOR.cyan, 46);
        text(pixels, formatTime(snapshot.remaining), 410, 7, 2, COLOR.cyan, 5);
        text(pixels, formatNumber(snapshot.bpm, snapshot.bpmPrecision), 398, 30, 1, COLOR.cyan, 8);
        text(pixels, snapshot.keyText || "--", 360, 30, 1, COLOR.yellow, 5);
        var presetName = snapshot.effectState && snapshot.effectState.loadedChainPresetName ?
            String(snapshot.effectState.loadedChainPresetName) : "FX UNIT " + String(snapshot.fxUnit);
        text(pixels, presetName, 82, 57, 1,
            snapshot.fxEnabled ? COLOR.orange : COLOR.secondary, 16);
    }

    function renderDeckMotion(pixels, snapshot, accent) {
        // Waveform and overview are the only regions that normally change at
        // playback cadence. Clear their retained area before repainting so the
        // result remains pixel-identical to the full compositor.
        fillRect(pixels, 0, 80, WIDTH, 131, COLOR.bg);
        if (snapshot.padMode === 4) {
            for (var sampler = 0; sampler < snapshot.samplers.length; sampler += 1) {
                var cell = snapshot.samplers[sampler];
                var x = 8 + (sampler % 4) * 118;
                var y = 82 + Math.floor(sampler / 4) * 62;
                var color = !cell.available ? COLOR.muted : (cell.play ? COLOR.green : COLOR.cyan);
                fillRect(pixels, x, y, 112, 58, COLOR.panel);
                rect(pixels, x, y, 112, 58, color);
                text(pixels, String(sampler + 1) + " S" + cell.number, x + 4, y + 5, 1, color, 15);
                text(pixels, cell.loaded ? cell.title : (cell.available ? "EMPTY" : "UNAVAILABLE"),
                    x + 4, y + 21, 1, COLOR.primary, 16);
                text(pixels, cell.play ? "PLAY" : "STOP", x + 4, y + 35, 1, color, 10);
                fillRect(pixels, x + 4, y + 49, Math.round(104 * cell.position), 3, color);
            }
            return;
        }
        renderWaveform(pixels, snapshot, accent);
        renderHotcues(pixels, snapshot, accent);
        renderOverview(pixels, snapshot, accent);
    }

    function renderDeckFooter(pixels, snapshot, accent) {
        fillRect(pixels, 0, 211, WIDTH, 61, COLOR.panel);
        fillRect(pixels, 0, 211, WIDTH, 1, COLOR.border);
        text(pixels, snapshot.play ? "PLAY" : "PAUSE", 10, 219, 1,
            snapshot.play ? COLOR.green : COLOR.secondary, 7);
        text(pixels, "TIME " + formatTime(snapshot.elapsed), 10, 238, 1, COLOR.primary, 16);
        text(pixels, snapshot.master ? "MASTER" : (snapshot.sync ? "SYNC" : ""), 126, 219, 1,
            snapshot.master ? COLOR.yellow : COLOR.cyan, 6);
        var rateLabel = snapshot.ratePercent === null ? "RATE --" :
            "RATE " + (snapshot.ratePercent >= 0 ? "+" : "") + formatNumber(snapshot.ratePercent, 1) + "%";
        text(pixels, rateLabel,
            126, 238, 1, COLOR.primary, 15);
        text(pixels, "ZOOM " + String(snapshot.waveformZoom), 254, 219, 1, COLOR.cyan, 9);
        text(pixels, "PAD " + padModeLabel(snapshot.padMode), 254, 238, 1, COLOR.primary, 14);
        text(pixels, snapshot.quantize ? "QNT" : "---", 330, 219, 1,
            snapshot.quantize ? COLOR.green : COLOR.secondary, 3);
        text(pixels, snapshot.slip ? "FLUX" : "----", 330, 238, 1,
            snapshot.slip ? COLOR.yellow : COLOR.secondary, 4);
        fillRect(pixels, 374, 215, 98, 22, snapshot.fxEnabled ? COLOR.selection : COLOR.bg);
        rect(pixels, 374, 215, 98, 22, snapshot.fxEnabled ? accent : COLOR.border);
        text(pixels, "FX UNIT " + String(snapshot.fxUnit), 380, 222, 1,
            snapshot.fxEnabled ? accent : COLOR.secondary, 9);
        bar(pixels, 418, 221, 47, 8, snapshot.fxMix,
            snapshot.fxEnabled ? accent : COLOR.secondary);
        fillRect(pixels, 374, 240, 98, 24, snapshot.loop ? COLOR.loopShade : COLOR.bg);
        rect(pixels, 374, 240, 98, 24, snapshot.loop ? COLOR.green : COLOR.border);
        text(pixels, "LOOP " + formatLoopSize(snapshot.loopSize),
            382, 248, 1, snapshot.loop ? COLOR.green : COLOR.secondary, 12);
    }

    function renderDeck(pixels, snapshot, accent) {
        renderDeckTop(pixels, snapshot, accent);
        renderDeckMotion(pixels, snapshot, accent);
        renderDeckFooter(pixels, snapshot, accent);
    }

    function renderDeckSummaryCard(pixels, summary, precision, x, y, w, h, accent) {
        fillRect(pixels, x, y, w, h, COLOR.panel);
        rect(pixels, x, y, w, h, summary.play ? COLOR.green : COLOR.border);
        var thumbnailSize = clamp(Math.floor(Math.min(h - 38, w * 0.16)), 32, 64);
        var thumbnailX = x + 5;
        var thumbnailY = y + 5;
        var textX = thumbnailX + thumbnailSize + 7;
        if (summary.loaded && drawArtworkScaled(pixels, summary.artwork,
                thumbnailX, thumbnailY, thumbnailSize)) {
            rect(pixels, thumbnailX, thumbnailY, thumbnailSize, thumbnailSize, accent);
        } else {
            drawCdPlaceholder(pixels, thumbnailX, thumbnailY, thumbnailSize, summary.play);
        }
        fillRect(pixels, thumbnailX + 2, thumbnailY + 2, 18, 14, accent);
        text(pixels, String(summary.deck), thumbnailX + 8, thumbnailY + 5, 1, COLOR.bg, 1);
        if (!summary.loaded) {
            text(pixels, "NO TRACK", textX, y + 12, 1, COLOR.secondary,
                Math.max(8, Math.floor((x + w - textX - 6) / 6)));
            return;
        }
        text(pixels, summary.title, textX, y + 6, 1, COLOR.cyan,
            Math.max(8, Math.floor((x + w - textX - 6) / 6)));
        text(pixels, summary.artist, textX, y + 20, 1, COLOR.secondary,
            Math.max(8, Math.floor((x + w - textX - 6) / 6)));
        text(pixels, formatNumber(summary.bpm, precision) + " BPM", x + 8, y + 42, 1, COLOR.primary, 14);
        text(pixels, summary.keyText || "--", x + w - 39, y + 42, 1, COLOR.yellow, 5);
        fillRect(pixels, x + w - 87, y + 5, 81, 15,
            summary.loop ? COLOR.loopShade : COLOR.bg);
        rect(pixels, x + w - 87, y + 5, 81, 15,
            summary.loop ? COLOR.green : COLOR.border);
        text(pixels, summary.loop ? "LOOP " + formatLoopSize(summary.loopSize) : "LOOP OFF",
            x + w - 82, y + 9, 1, summary.loop ? COLOR.green : COLOR.secondary, 12);
        var overview = summary.overview || [];
        var waveHeight = Math.max(24, Math.floor(h * 0.5));
        var waveY = y + h - waveHeight - 12;
        fillRect(pixels, x + 7, waveY - 3, w - 14, waveHeight + 5, COLOR.bg);
        rect(pixels, x + 7, waveY - 3, w - 14, waveHeight + 5, COLOR.border);
        for (var column = 0; column < w - 16 && overview.length; column += 1) {
            var sample = overview[Math.floor(column * overview.length / (w - 16))];
            var peak = Math.round(Math.max(sampleValue(sample, "peak"), sampleValue(sample, "low"),
                sampleValue(sample, "mid"), sampleValue(sample, "high")) * (waveHeight / 2 - 5));
            if (peak > 0) {
                fillRect(pixels, x + 8 + column, waveY + Math.floor(waveHeight / 2) - peak, 1, peak * 2 + 1,
                    column / (w - 16) < summary.position ? COLOR.muted : accent);
            }
        }
        if (summary.loop) {
            var overviewLeft = x + 8;
            var overviewWidth = Math.max(1, w - 16);
            var loopStart = summary.loopStart >= 0 && summary.trackSamples > 0 ?
                summary.loopStart / summary.trackSamples : null;
            var loopEnd = summary.loopEnd > summary.loopStart && summary.trackSamples > 0 ?
                summary.loopEnd / summary.trackSamples : null;
            // Fallback is an estimate only when real loop bounds are unavailable.
            if (loopStart === null || loopEnd === null) {
                var loopFraction = summary.duration > 0 && summary.bpm > 0 ?
                    (summary.loopSize * 60 / summary.bpm) / summary.duration : 0;
                loopStart = clamp(summary.position - loopFraction / 2, 0, 1);
                loopEnd = clamp(summary.position + loopFraction / 2, 0, 1);
            }
            var loopLeft = overviewLeft + Math.round(overviewWidth * clamp(loopStart, 0, 1));
            var loopRight = overviewLeft + Math.round(overviewWidth * clamp(loopEnd, 0, 1));
            var loopWidth = Math.max(2, loopRight - loopLeft);
            fillTranslucentLoopShade(pixels, loopLeft, waveY + 1, loopWidth, waveHeight - 3);
            fillRect(pixels, loopLeft, waveY + 1, 2, waveHeight - 3, COLOR.green);
            fillRect(pixels, loopLeft + loopWidth - 2, waveY + 1, 2, waveHeight - 3, COLOR.green);
        }
        fillRect(pixels, x + 8 + Math.round((w - 16) * summary.position), waveY + 2, 1,
            waveHeight - 4, COLOR.primary);
        fillRect(pixels, x + 9, waveY + 2, 76, 11, COLOR.panel);
        text(pixels, summary.loop ? "LOOP " + formatLoopSize(summary.loopSize) : "NO LOOP",
            x + 11, waveY + 4, 1, summary.loop ? COLOR.green : COLOR.secondary, 12);
        text(pixels, summary.play ? "PLAY" : "PAUSE", x + 8, y + h - 9, 1,
            summary.play ? COLOR.green : COLOR.secondary, 6);
        text(pixels, summary.master ? "MASTER" : (summary.sync ? "SYNC" : ""),
            x + w - 48, y + h - 9, 1,
            summary.master ? COLOR.yellow : (summary.sync ? COLOR.cyan : COLOR.secondary), 6);
    }

    function renderMultiDeck(pixels, snapshot, accent) {
        var summaries = snapshot.deckSummaries || [];
        var viewMode = snapshot.productState.viewMode;
        if (viewMode === 1) {
            var wanted = snapshot.screen === 0 ? [1, 3] : [2, 4];
            wanted.forEach(function(deck, index) {
                renderDeckSummaryCard(pixels, summaries[deck - 1], snapshot.bpmPrecision,
                    5, 5 + index * 133, 470, 128, accent);
            });
            return;
        }
        summaries.forEach(function(summary, index) {
            renderDeckSummaryCard(pixels, summary, snapshot.bpmPrecision,
                4 + (index % 2) * 239,
                4 + Math.floor(index / 2) * 134, 234, 130,
                index % 2 === 0 ? COLOR.cyan : COLOR.magenta);
        });
    }

    function renderInformationOverlay(pixels, snapshot, accent) {
        var mode = snapshot.productState.informationOverlay;
        if (!mode) { return; }
        fillRect(pixels, 48, 54, 384, 154, COLOR.panel);
        rect(pixels, 48, 54, 384, 154, accent);
        if (mode === 1) {
            text(pixels, "BEATGRID", 146, 69, 3, accent, 12);
            text(pixels, "BPM " + formatNumber(snapshot.bpm, snapshot.bpmPrecision), 106, 116, 2, COLOR.primary, 18);
            text(pixels, "PHASE " + formatNumber(snapshot.beatPhase, 3), 106, 151, 2, COLOR.cyan, 18);
        } else if (mode === 2) {
            text(pixels, "PHRASING", 140, 72, 3, accent, 12);
            text(pixels, "DATA UNAVAILABLE", 118, 130, 2, COLOR.secondary, 20);
            text(pixels, "CORE PATCH REQUIRED", 126, 166, 1, COLOR.muted, 24);
        } else if (mode === 3) {
            text(pixels, "STEMS", 178, 72, 3, accent, 8);
            text(pixels, snapshot.productState.stemsPage === 0 ? "FILTER PAGE" : "FX PAGE",
                154, 116, 2, COLOR.primary, 14);
            text(pixels, "NO STEM DATA - DEFERRED", 104, 158, 1, COLOR.secondary, 32);
        } else {
            renderFxOverlay(pixels, snapshot, accent);
            text(pixels, snapshot.effectState && snapshot.effectState.loadedChainPresetName ?
                String(snapshot.effectState.loadedChainPresetName) : "NO CHAIN PRESET",
            120, 188, 1, COLOR.yellow, 34);
        }
    }

    function renderContextPanel(pixels, snapshot, accent) {
        var panel = snapshot.productState.activePanel;
        if (!panel) { return; }
        fillRect(pixels, 58, 58, 364, 144, COLOR.panel);
        rect(pixels, 58, 58, 364, 144, accent);
        if (panel === 1) {
            if (snapshot.productState.masterTempoPopup) {
                text(pixels, "MASTER TEMPO", 117, 73, 3, COLOR.yellow, 12);
                text(pixels, formatNumber(snapshot.productState.masterTempoBpm, snapshot.bpmPrecision),
                    143, 116, 4, COLOR.primary, 8);
                text(pixels, "GLOBAL SYNC SOURCE", 145, 169, 1, COLOR.cyan, 20);
            } else {
                text(pixels, "DECK BPM", 160, 73, 3, accent, 8);
                text(pixels, formatNumber(snapshot.bpm, snapshot.bpmPrecision), 143, 116, 4, COLOR.primary, 8);
                text(pixels, snapshot.ratePercent === null ? "RATE UNAVAILABLE" :
                    "RATE " + (snapshot.ratePercent >= 0 ? "+" : "") +
                    formatNumber(snapshot.ratePercent, 2) + "%", 153, 169, 1, COLOR.secondary, 20);
            }
        } else if (panel === 2) {
            text(pixels, "KEY", 195, 73, 3, accent, 4);
            text(pixels, snapshot.keyText || "--", 184, 119, 4, COLOR.yellow, 6);
            text(pixels, "PITCH " + (snapshot.pitch >= 0 ? "+" : "") +
                formatNumber(snapshot.pitch, 2), 135, 166, 1, COLOR.primary, 22);
            text(pixels, snapshot.keylock ? "KEY LOCK ON" : "KEY LOCK OFF",
                159, 184, 1, snapshot.keylock ? COLOR.green : COLOR.secondary, 16);
        } else {
            var settingsLabels = ["FX UNIT MODE", "MIXER FX BANK", "MIXER FX ORDER", "EQ TYPE",
                "QUICK EFFECT", "CROSSFADER", "PAD COLORS", "WAVEFORM", "DISPLAY HW",
                "BROWSER ROWS", "BPM DISPLAY", "PREVIEW SEEK"];
            var page = snapshot.productState.settingsPage;
            var settingValue = "";
            if (page === 0) {
                settingValue = "UNIT " + String(snapshot.fxUnit) + "  " + snapshot.fxMode;
            } else if (page === 1) {
                settingValue = snapshot.effectState && snapshot.effectState.loadedChainPresetName ?
                    String(snapshot.effectState.loadedChainPresetName) : "NO PRESET";
            } else if (page === 6) {
                settingValue = "PALETTE " + String(Math.round(safePreference("pad_palette", 0)) + 1);
            } else if (page === 7) {
                settingValue = ["EXPANDED", "SIMPLIFIED", "PHASE", "STACKED"]
                    [Math.round(safePreference("waveform_style", 0))];
            } else if (page === 9) {
                settingValue = String(snapshot.browserRows) + " TRACKS";
            } else if (page === 10) {
                settingValue = String(snapshot.bpmPrecision) + " DECIMALS";
            } else if (page === 11) {
                settingValue = String(Math.round(safePreference("preview_seek_seconds", 1))) + " SECONDS";
            } else {
                settingValue = "UNAVAILABLE IN CURRENT MIXXX API";
            }
            text(pixels, "DISPLAY SETTINGS", 91, 71, 3, accent, 18);
            text(pixels, "S" + (page + 1 < 10 ? "0" : "") + String(page + 1) + " " + settingsLabels[page],
                92, 121, 2, COLOR.primary, 30);
            text(pixels, settingValue, 92, 154, 1,
                settingValue.indexOf("UNAVAILABLE") === 0 ? COLOR.muted : COLOR.cyan, 45);
            text(pixels, "BROWSE NAV  PUSH APPLY  BACK EXIT", 92, 184, 1, COLOR.secondary, 42);
        }
    }

    /*
     * Android parity M10004/M10006: the arbitrated popup published by the
     * mapping. Only real values reach this function: the mapping publishes the
     * numeric payload of a ControlObject it actually read, and this renderer
     * limits itself to labelling it. Unavailable data stays explicit.
     */
    function popupTextCenter(value, scale, limit) {
        var length = Math.min(normalizedText(String(value || "")).length, limit);
        var width = length * 6 * scale;
        return 78 + Math.max(0, Math.round((324 - width) / 2));
    }

    function renderUnifiedPopup(pixels, snapshot, accent) {
        var product = snapshot.productState;
        if (!product || !product.popupKind) {
            return false;
        }
        // Do not retain a LOOP SIZE selection popup after the selected loop is
        // active; return to the live deck/browser frame instead.
        if (product.popupTitle === 3 && snapshot.loop) {
            return false;
        }
        fillRect(pixels, 78, 91, 324, 87, COLOR.panel);
        rect(pixels, 78, 91, 324, 87, accent);
        var title = "";
        var value = "";
        var footer = "";
        var valueColor = COLOR.primary;
        var valueScale = 2;
        if (product.popupTitle === 2) {
            title = "SORT BY";
            var criteria = snapshot.browser && snapshot.browser.sortCriteria ?
                snapshot.browser.sortCriteria : [];
            var pending = criteria[product.popupPendingIndex];
            value = pending && pending.label ? String(pending.label).toUpperCase() : "UNAVAILABLE";
            valueColor = pending && pending.label ? COLOR.primary : COLOR.muted;
            footer = (product.popupPendingDescending ? "DESCENDING" : "ASCENDING") +
                "  KNOB 1 SELECT  ON 1 DIRECTION";
        } else if (product.popupTitle === 3) {
            title = "LOOP SIZE";
            value = product.popupHasValue ? formatLoopSize(product.popupValue) : "--";
            valueScale = 4;
            footer = "";
        } else if (product.popupTitle === 1) {
            title = product.popupMaster ? "MASTER TEMPO" : "DECK BPM";
            value = product.popupHasValue ? formatNumber(product.popupValue, 2) :
                formatNumber(snapshot.bpm, 2);
            footer = product.popupMaster ? "GLOBAL SYNC SOURCE" : "DECK " + String(snapshot.deck);
        } else if (product.popupTitle === 4) {
            title = "DECK BLOQUEADO";
            value = "DECK " + String(product.popupDeck || snapshot.deck) + " PLAYING";
            footer = "LOAD NOT CONFIRMED";
            valueColor = COLOR.red;
        } else {
            title = "WAITING FOR MIXXX";
            value = "LOAD IN PROGRESS";
            footer = "NO OPTIMISTIC LOAD";
        }
        text(pixels, title, popupTextCenter(title, 2, 12), 103, 2, accent, 12);
        text(pixels, value, popupTextCenter(value, valueScale, 26),
            product.popupTitle === 3 ? 124 : 132, valueScale, valueColor, 26);
        text(pixels, footer, popupTextCenter(footer, 1, 52), 160, 1, COLOR.cyan, 52);
        return true;
    }

    function renderBrowserOverlay(pixels, snapshot, accent) {
        fill(pixels, COLOR.bg);
        var browser = snapshot.browser || {};
        fillRect(pixels, 0, 0, WIDTH, 30, COLOR.panel);
        text(pixels, browser.path || "BROWSER", 8, 9, 1, COLOR.cyan, 68);
        text(pixels, String(snapshot.deck), 464, 9, 1, accent, 1);
        var rows = browser.rows || [];
        if (!browser.available) {
            text(pixels, "MIXXX LIBRARY STATE UNAVAILABLE", 82, 112, 2, COLOR.secondary, 34);
            text(pixels, "NO ROWS FABRICATED", 170, 151, 1, COLOR.muted, 24);
            return;
        }
        if (!rows.length) {
            text(pixels, "NO TRACKS IN THIS VIEW", 117, 112, 2, COLOR.secondary, 26);
            text(pixels, "BACK TO CHOOSE ANOTHER SOURCE", 126, 151, 1, COLOR.muted, 32);
            return;
        }
        var visibleRows = Math.min(9, Math.max(4, rows.length));
        var rowHeight = Math.floor(217 / visibleRows);
        for (var rowIndex = 0; rowIndex < Math.min(visibleRows, rows.length); rowIndex += 1) {
            var row = rows[rowIndex];
            var y = 31 + rowIndex * rowHeight;
            var selected = rowIndex === Math.round(Number(browser.selectedIndex));
            fillRect(pixels, 4, y, 472, rowHeight - 1,
                selected ? COLOR.selection : (rowIndex % 2 ? COLOR.panel : COLOR.bg));
            if (selected) {
                rect(pixels, 4, y, 472, rowHeight - 1, COLOR.cyan);
            }
            if (row.type === "folder") {
                text(pixels, row.expandable ? ">" : "-", 12, y + 8, 1, COLOR.cyan, 1);
                text(pixels, row.title || "UNTITLED", 30, y + 8, 1,
                    selected ? COLOR.primary : COLOR.cyan, 68);
            } else {
                var thumbSize = Math.max(12, Math.min(32, rowHeight - 4));
                var thumbX = 8;
                var thumbY = y + Math.max(2, Math.floor((rowHeight - thumbSize) / 2));
                if (!drawArtworkScaled(pixels, row.artwork, thumbX, thumbY, thumbSize)) {
                    drawCdPlaceholder(pixels, thumbX, thumbY, thumbSize, selected);
                }
                var textX = thumbX + thumbSize + 6;
                text(pixels, row.title || "UNTITLED", textX, y + 4, 1,
                    selected ? COLOR.primary : COLOR.cyan, 30);
                text(pixels, row.artist || "", textX, y + 14, 1, COLOR.secondary, 29);
                text(pixels, row.bpm ? formatNumber(Number(row.bpm), 1) : "--", 337, y + 8, 1,
                    row.bpm ? COLOR.green : COLOR.secondary, 7);
                text(pixels, row.key || "--", 391, y + 8, 1, COLOR.magenta, 5);
                text(pixels, formatTime(Number(row.duration) || 0), 431, y + 8, 1, COLOR.secondary, 6);
            }
        }
        fillRect(pixels, 0, 248, WIDTH, 24, COLOR.panel);
        // Android parity: when the arbitrated popup already carries the warning,
        // the footer keeps the browser hints instead of repeating the message.
        if (snapshot.productState.loadStatus === 2 && !snapshot.productState.popupKind) {
            var rejectLabel = snapshot.productState.loadRejectReason === 1 ?
                "LOAD REJECTED - DECK PLAYING" :
                (snapshot.productState.loadRejectReason === 2 ?
                    "LOAD REJECTED - NO TRACK SELECTED" :
                    "LOAD REJECTED - MIXXX DID NOT CONFIRM");
            text(pixels, rejectLabel, 10, 257, 1, COLOR.red, 44);
        } else if (snapshot.productState.loadStatus === 1) {
            text(pixels, "LOADING - WAITING FOR MIXXX CONFIRMATION", 10, 257, 1, COLOR.yellow, 45);
        } else {
            text(pixels, browser.mode === "tree" ? "PUSH ENTER  BACK EXIT" :
                "KNOB1 SORT  ON1 DIR  ON4 PREVIEW", 10, 257, 1, COLOR.secondary, 36);
        }
        var previewLabel = browser.previewPlaying ?
            "PREVIEW " + String(Math.round((Number(browser.previewPosition) || 0) * 100)) + "%" :
            (browser.sortLabel ? String(browser.sortLabel).toUpperCase() +
                (browser.sortDescending ? " DOWN" : " UP") : "PREVIEW");
        text(pixels, previewLabel, 390, 257, 1,
            browser.previewPlaying ? COLOR.green : COLOR.cyan, 14);
        if (snapshot.productState.sortPopup) {
            fillRect(pixels, 78, 91, 324, 87, COLOR.panel);
            rect(pixels, 78, 91, 324, 87, COLOR.cyan);
            text(pixels, "SORT BY", 188, 103, 2, COLOR.cyan, 9);
            text(pixels, browser.sortLabel ? String(browser.sortLabel).toUpperCase() : "UNAVAILABLE",
                111, 132, 2, browser.sortLabel ? COLOR.primary : COLOR.muted, 24);
            text(pixels, browser.sortDescending ? "DESCENDING" : "ASCENDING",
                190, 158, 1, COLOR.secondary, 12);
        }
    }

    function renderFxOverlay(pixels, snapshot, accent) {
        fillRect(pixels, 52, 54, 376, 154, COLOR.panel);
        rect(pixels, 52, 54, 376, 154, accent);
        text(pixels, "FX UNIT " + String(snapshot.fxUnit) + " " + snapshot.fxMode,
            90, 68, 2, accent, 24);
        text(pixels, "SLOT " + String(snapshot.fxSlot), 184, 94, 2, COLOR.primary, 10);
        for (var i = 0; i < 3; i += 1) {
            var y = 126 + i * 24;
            text(pixels, snapshot.fx[i].name || ("EMPTY " + String(i + 1)), 72, y, 1,
                snapshot.fx[i].enabled ? accent : COLOR.secondary, 24);
            text(pixels, "S" + String(i + 1), 220, y, 1,
                snapshot.fx[i].enabled ? accent : COLOR.secondary, 4);
            bar(pixels, 248, y - 1, 116, 10, snapshot.fx[i].meta,
                snapshot.fx[i].enabled ? accent : COLOR.secondary);
            text(pixels, String(Math.round(snapshot.fx[i].meta * 100)) + "%", 374, y, 1, COLOR.primary, 5);
        }
    }

    function renderTouchOverlay(pixels, snapshot, accent) {
        var fxTouch = firstSetBit(snapshot.touchMask, 0, 4);
        if (fxTouch) {
            var fxName = "UNIT MIX";
            var fxValue = snapshot.fxMix;
            if (fxTouch > 1 && snapshot.fxMode === "GROUP") {
                var groupSlot = snapshot.fx[fxTouch - 2];
                fxName = groupSlot.name || ("SLOT " + String(fxTouch - 1));
                fxValue = groupSlot.meta;
            } else if (fxTouch > 1) {
                var singleSlot = snapshot.fx[clamp(snapshot.fxSlot - 1, 0, 2)];
                var parameter = singleSlot.parameters[fxTouch - 2];
                fxName = parameter && parameter.name ? String(parameter.name) :
                    ((singleSlot.name || "EFFECT") + " PARAM " + String(fxTouch - 1));
                fxValue = parameter && finite(Number(parameter.value)) ? Number(parameter.value) : 0;
            }
            fillRect(pixels, 76, 0, 328, 38, COLOR.panel);
            rect(pixels, 76, 0, 328, 38, accent);
            text(pixels, fxName, 88, 7, 1, accent, 38);
            bar(pixels, 88, 24, 250, 7, clamp(fxValue, 0, 1), accent);
            text(pixels, String(Math.round(clamp(fxValue, 0, 1) * 100)) + "%",
                348, 22, 1, COLOR.primary, 5);
            return;
        }
        var label = touchLabel(snapshot);
        if (!label) {
            return;
        }
        fillRect(pixels, 94, 246, 292, 22, COLOR.panel);
        rect(pixels, 94, 246, 292, 22, accent);
        text(pixels, label, 112, 253, 1, accent, 40);
    }

    function deckTopKey(snapshot) {
        return [snapshot.deck, snapshot.loaded ? 1 : 0,
            snapshot.artwork ? [snapshot.artwork.available ? 1 : 0, snapshot.artwork.revision].join(":") : "NO_ART",
            snapshot.productState.mixerFxProduct,
            normalizedText(snapshot.title).slice(0, 23),
            normalizedText(snapshot.artist).slice(0, 45),
            normalizedText(snapshot.keyText).slice(0, 5),
            snapshot.keylock ? 1 : 0, formatNumber(snapshot.pitch, 2),
            formatNumber(snapshot.bpm, snapshot.bpmPrecision), formatTime(snapshot.remaining),
            snapshot.hotcues.map(function(item) {
                return [item.slot, String(item.label || "")].join(":");
            }).join("/")].join("|");
    }

    function deckFooterKey(snapshot) {
        return [snapshot.play ? 1 : 0, formatTime(snapshot.elapsed),
            snapshot.master ? 1 : 0, snapshot.sync ? 1 : 0,
            snapshot.quantize ? 1 : 0, snapshot.slip ? 1 : 0,
            snapshot.ratePercent === null ? "NA" : formatNumber(snapshot.ratePercent, 1), snapshot.waveformZoom,
            snapshot.padMode, snapshot.fxEnabled ? 1 : 0,
            Math.round(snapshot.fxMix * 1000),
            snapshot.fx.map(function(item) {
                return (item.enabled ? 10000 : 0) + Math.round(item.meta * 1000);
            }).join("."), snapshot.loop ? 1 : 0,
            formatNumber(snapshot.loopSize, 1)].join("|");
    }

    function canComposeDeckIncrementally(snapshot) {
        return snapshot.context === 0 &&
            (!snapshot.productState || (snapshot.productState.viewMode === 0 &&
                snapshot.productState.informationOverlay === 0 &&
                snapshot.productState.activePanel === 0 &&
                // Android parity: an arbitrated popup is a modal overlay, so the
                // incremental deck path must never repaint over it.
                snapshot.productState.popupKind === 0)) &&
            !touchLabel(snapshot);
    }

    function render(screen, snapshot) {
        var pixels = frameBuffers[screen];
        var accent = screen === 0 ? COLOR.cyan : COLOR.magenta;
        if (Date.now() < splashUntil) {
            fill(pixels, COLOR.bg);
            if (screen === 0) {
                text(pixels, "KONTROL S8", 20, 20, 3, accent, 25);
                text(pixels, "FOR MIXXX", 20, 60, 2, COLOR.primary, 35);
                fillRect(pixels, 20, 88, 440, 3, accent);
                text(pixels, "kontrol-s8-mixxx-mappings", 20, 107, 2, COLOR.primary, 36);
                text(pixels, "by gusgustavofreitas", 20, 149, 2, accent, 36);
                text(pixels, "Windows v1.0", 20, 193, 2, COLOR.primary, 36);
                text(pixels, "Independent, unofficial mapping", 20, 235, 1, COLOR.yellow, 72);
                text(pixels, "Mixxx project: mixxx.org", 20, 251, 1, COLOR.secondary, 72);
            } else {
                text(pixels, "CREATOR", 20, 20, 3, accent, 25);
                text(pixels, "gusgustavofreitas", 20, 64, 2, COLOR.primary, 36);
                fillRect(pixels, 20, 95, 440, 3, accent);
                text(pixels, "github.com/gusgustavodj", 20, 112, 2, COLOR.primary, 36);
                text(pixels, "Follow me on Instagram: @gus_tavo_freitas", 20, 148, 1, accent, 72);
                text(pixels, "REPOSITORY", 20, 187, 2, COLOR.primary, 36);
                text(pixels, "kontrol-s8-mixxx-mappings", 20, 217, 2, accent, 36);
                text(pixels, "No Mixxx or Native Instruments Endorsement", 20, 251, 1, COLOR.secondary, 72);
            }
            return pixels;
        }
        var state = compositionState[screen];
        if (canComposeDeckIncrementally(snapshot)) {
            var topKey = deckTopKey(snapshot);
            var footerKey = deckFooterKey(snapshot);
            var composed = WIDTH * 131;
            if (state.mode !== "DECK_INCREMENTAL") {
                fill(pixels, COLOR.bg);
                renderDeck(pixels, snapshot, accent);
                composed = PIXEL_COUNT;
                performance.fullCompositions += 1;
            } else {
                renderDeckMotion(pixels, snapshot, accent);
                if (state.topKey !== topKey) {
                    renderDeckTop(pixels, snapshot, accent);
                    composed += WIDTH * 80;
                }
                if (state.footerKey !== footerKey) {
                    renderDeckFooter(pixels, snapshot, accent);
                    composed += WIDTH * 61;
                }
                performance.incrementalCompositions += 1;
            }
            state.mode = "DECK_INCREMENTAL";
            state.topKey = topKey;
            state.footerKey = footerKey;
            performance.compositionPixels += composed;
            performance.presentationPixels += PIXEL_COUNT;
            return pixels;
        }

        state.mode = "FULL";
        state.topKey = null;
        state.footerKey = null;
        if (snapshot.context === 1) {
            renderBrowserOverlay(pixels, snapshot, accent);
            renderUnifiedPopup(pixels, snapshot, accent);
        } else {
            fill(pixels, COLOR.bg);
            if (snapshot.productState && snapshot.productState.viewMode > 0) {
                renderMultiDeck(pixels, snapshot, accent);
            } else {
                renderDeck(pixels, snapshot, accent);
            }
            if (snapshot.context === 2) {
                renderFxOverlay(pixels, snapshot, accent);
            } else if (snapshot.productState) {
                renderInformationOverlay(pixels, snapshot, accent);
                renderContextPanel(pixels, snapshot, accent);
            }
            renderTouchOverlay(pixels, snapshot, accent);
            renderUnifiedPopup(pixels, snapshot, accent);
        }
        performance.fullCompositions += 1;
        performance.compositionPixels += PIXEL_COUNT;
        performance.presentationPixels += PIXEL_COUNT;
        return pixels;
    }

    function repeatedPairs(pixels, start) {
        var count = 1;
        var first = pixels[start * 2];
        var second = pixels[start * 2 + 1];
        while (start + count < PAIR_COUNT && count < 65535 &&
                pixels[(start + count) * 2] === first &&
                pixels[(start + count) * 2 + 1] === second) {
            count += 1;
        }
        return count;
    }

    function encode(screen, pixels) {
        if (screen !== 0 && screen !== 1) {
            throw new Error("INVALID_SCREEN");
        }
        if (!pixels || pixels.length !== PIXEL_COUNT) {
            throw new Error("INVALID_PIXEL_COUNT");
        }
        var out = encodedBuffers[screen];
        var header = [0x84, 0, screen, 0x60, 0, 0, 0, 0, 0, 0, 0, 0, 0x01, 0xE0, 0x01, 0x10];
        var offset = 0;
        for (var headerIndex = 0; headerIndex < header.length; headerIndex += 1) {
            out[offset] = header[headerIndex];
            offset += 1;
        }
        var pair = 0;
        while (pair < PAIR_COUNT) {
            var repeated = repeatedPairs(pixels, pair);
            if (repeated >= 2) {
                out[offset] = 0x01; out[offset + 1] = 0;
                out[offset + 2] = (repeated >> 8) & 0xFF; out[offset + 3] = repeated & 0xFF;
                out[offset + 4] = (pixels[pair * 2] >> 8) & 0xFF;
                out[offset + 5] = pixels[pair * 2] & 0xFF;
                out[offset + 6] = (pixels[pair * 2 + 1] >> 8) & 0xFF;
                out[offset + 7] = pixels[pair * 2 + 1] & 0xFF;
                offset += 8;
                pair += repeated;
            } else {
                var start = pair;
                pair += 1;
                while (pair < PAIR_COUNT && repeatedPairs(pixels, pair) < 2) {
                    pair += 1;
                }
                var literalPairs = pair - start;
                out[offset] = 0x00; out[offset + 1] = 0;
                out[offset + 2] = (literalPairs >> 8) & 0xFF;
                out[offset + 3] = literalPairs & 0xFF;
                offset += 4;
                for (var index = start * 2; index < pair * 2; index += 1) {
                    out[offset] = (pixels[index] >> 8) & 0xFF;
                    out[offset + 1] = pixels[index] & 0xFF;
                    offset += 2;
                }
            }
        }
        out[offset] = 0x03; out[offset + 1] = 0; out[offset + 2] = 0; out[offset + 3] = 0;
        out[offset + 4] = 0x40; out[offset + 5] = 0; out[offset + 6] = screen; out[offset + 7] = 0;
        offset += FOOTER_SIZE;
        out.length = offset;
        if (offset < HEADER_SIZE + FOOTER_SIZE || offset > MAX_FRAME_SIZE) {
            throw new Error("INVALID_ENCODED_FRAME_SIZE_" + String(offset));
        }
        if (encodedOnce[screen]) {
            performance.encodedBufferReuses += 1;
        }
        encodedOnce[screen] = true;
        return out;
    }

    function fingerprint(snapshot) {
        // Quantize playback in elapsed-time space at 30 Hz. The previous 0.5%
        // track quantization could freeze a six-minute deck for ~1.8 seconds.
        return [snapshot.deck, snapshot.context, snapshot.touchMask, snapshot.fxSlot, snapshot.padMode,
            (snapshot.samplers || []).map(function(cell) {
                return [cell.number, cell.available, cell.loaded, cell.title, cell.play,
                    Math.round(cell.position * 1000)].join(":");
            }).join("/"),
            snapshot.artwork ? [snapshot.artwork.available ? 1 : 0, snapshot.artwork.revision].join(":") : "NO_ART",
            snapshot.productState.sliceBeats, snapshot.productState.sliceMask,
            snapshot.productState.sliceBoundaries.join(","), snapshot.productState.samplerBank,
            snapshot.loaded ? 1 : 0, normalizedText(snapshot.title).slice(0, 34),
            normalizedText(snapshot.artist).slice(0, 58), normalizedText(snapshot.keyText).slice(0, 12),
            snapshot.keylock ? 1 : 0, Math.round(snapshot.pitch * 1000),
            Math.round(snapshot.bpm * 100), snapshot.bpmPrecision,
            snapshot.play ? 1 : 0, snapshot.cue ? 1 : 0,
            snapshot.sync ? 1 : 0, snapshot.master ? 1 : 0,
            snapshot.slip ? 1 : 0, snapshot.pfl ? 1 : 0,
            snapshot.quantize ? 1 : 0, snapshot.loop ? 1 : 0, Math.round(snapshot.loopSize * 1000),
            snapshot.ratePercent === null ? "NA" : Math.round(snapshot.ratePercent * 100), Math.round(snapshot.elapsed * 30),
            Math.round(snapshot.duration), snapshot.fxEnabled ? 1 : 0, Math.round(snapshot.fxMix * 100),
            snapshot.waveformZoom, Math.round(snapshot.loopStart), Math.round(snapshot.loopEnd),
            snapshot.trackSamples, snapshot.beatActive ? 1 : 0,
            Math.round(snapshot.beatPhase * 1000),
            snapshot.waveformComplete ? 1 : 0, waveformSignature(snapshot.waveform),
            waveformSignature(snapshot.overview),
            snapshot.hotcues.map(function(item) {
                return String(item.slot) + ":" + String(item.label || "") + ":" +
                    Math.round(Number(item.position) || 0);
            }).join("."),
            snapshot.productState ? [snapshot.productState.available ? 1 : 0,
                snapshot.productState.generation, snapshot.productState.revision,
                snapshot.productState.viewMode, snapshot.productState.waveformMode,
                snapshot.productState.informationOverlay, snapshot.productState.stemsPage,
                snapshot.productState.activePanel, snapshot.productState.settingsOpen ? 1 : 0,
                snapshot.productState.waveformZoom, snapshot.productState.mixerFxProduct,
                // Android parity: a popup is part of the presented state, so its
                // identity and pending value must reach the frame fingerprint.
                snapshot.productState.popupKind, snapshot.productState.popupPhase,
                snapshot.productState.popupTitle, snapshot.productState.popupDeck,
                snapshot.productState.popupMaster ? 1 : 0,
                Math.round(Number(snapshot.productState.popupValue) * 100),
                snapshot.productState.popupHasValue ? 1 : 0,
                snapshot.productState.popupPendingIndex,
                snapshot.productState.popupPendingDescending ? 1 : 0].join(":") : "NO_PRODUCT",
            (snapshot.deckSummaries || []).map(function(item) {
                return [item.deck, item.loaded ? 1 : 0, item.title, item.artist,
                    Math.round(item.bpm * 100), item.bpmPrecision, item.keyText, item.play ? 1 : 0,
                    Math.round(item.position * 10000), item.sync ? 1 : 0].join(":");
            }).join("/"),
            snapshot.fx.map(function(item) { return (item.enabled ? 10000 : 0) + Math.round(item.meta * 1000); }).join("."),
            snapshot.browser && snapshot.browser.available ?
                [snapshot.browser.mode, snapshot.browser.path, snapshot.browser.selectedIndex,
                    snapshot.browser.previewPlaying ? 1 : 0,
                    Math.round(Number(snapshot.browser.previewPosition) * 100) || 0,
                    (snapshot.browser.rows || []).map(function(row) {
                        return [row.type, row.title, row.artist, row.bpm, row.key, row.duration,
                            row.expandable ? 1 : 0].join(":");
                    }).join("/")].join(":") : "NO_BROWSER"
        ].join("|");
    }

    function recordPerformance(readMs, renderMs, encodeMs, submitMs) {
        performance.samples += 1;
        performance.readMs += readMs;
        performance.renderMs += renderMs;
        performance.encodeMs += encodeMs;
        performance.submitMs += submitMs;
        performance.maxReadMs = Math.max(performance.maxReadMs, readMs);
        performance.maxRenderMs = Math.max(performance.maxRenderMs, renderMs);
        performance.maxEncodeMs = Math.max(performance.maxEncodeMs, encodeMs);
        performance.maxSubmitMs = Math.max(performance.maxSubmitMs, submitMs);
        if (performance.samples % 300 === 0) {
            log("PIPELINE_TIMING", {
                samples: performance.samples,
                avgReadMs: performance.readMs / performance.samples,
                avgRenderMs: performance.renderMs / performance.samples,
                avgEncodeMs: performance.encodeMs / performance.samples,
                avgSubmitMs: performance.submitMs / performance.samples,
                maxReadMs: performance.maxReadMs,
                maxRenderMs: performance.maxRenderMs,
                maxEncodeMs: performance.maxEncodeMs,
                maxSubmitMs: performance.maxSubmitMs
            });
        }
    }

    function sendScreen(screen, force) {
        if (!active) {
            return false;
        }
        var startedAt = Date.now();
        var snapshot = readSnapshot(screen);
        var readAt = Date.now();
        var fp = fingerprint(snapshot) + "|splash:" + (Date.now() < splashUntil ? "1" : "0");
        if (!force && lastFingerprint[screen] === fp) {
            return false;
        }
        var pixels = render(screen, snapshot);
        var renderedAt = Date.now();
        var frame = encode(screen, pixels);
        var encodedAt = Date.now();
        try {
            controller.send(frame, frame.length);
            var submittedAt = Date.now();
            recordPerformance(readAt - startedAt, renderedAt - readAt,
                encodedAt - renderedAt, submittedAt - encodedAt);
            recordSuccess(frameSendFailureStreams[screen]);
            lastFingerprint[screen] = fp;
            sentFrames[screen] += 1;
            if (sentFrames[screen] === 1) {
                log("FRAME_PRIMED", {screen: screen, deck: snapshot.deck,
                    context: snapshot.context, bytes: frame.length});
            }
            return true;
        } catch (error) {
            sendFailures += 1;
            var failureStream = frameSendFailureStreams[screen];
            if (recordFailure(failureStream)) {
                log("FRAME_SEND_FAILED", {screen: screen, error: String(error), failures: sendFailures,
                    episode: failureStream.episode,
                    episodeFailures: failureStream.episodeFailures,
                    totalFailures: failureStream.totalFailures});
            }
            return false;
        }
    }

    function tick() {
        if (!active) {
            return;
        }
        var screen = nextScreen;
        nextScreen = nextScreen ? 0 : 1;
        sendScreen(screen, false);
    }

    function stopDisplayTimer() {
        if (!timerId) {
            return;
        }
        try {
            if (typeof engine.stopTimer === "function") {
                engine.stopTimer(timerId);
            }
        } catch (error) {
            log("TIMER_STOP_FAILED", {error: String(error)});
        }
        timerId = 0;
    }

    function init() {
        lifecycleGeneration += 1;
        stopDisplayTimer();
        active = true;
        splashUntil = Date.now() + SPLASH_DURATION_MS;
        nextScreen = 0;
        lastFingerprint = [null, null];
        sentFrames = [0, 0];
        sendFailures = 0;
        frameSendFailureStreams = createFailureStreams(2);
        trackMetadataFailureStreams = createFailureStreams(5);
        displayStateFailureStreams = createFailureStreams(5);
        browserStateFailureStream = createFailureStream();
        performance = createPerformanceState();
        compositionState = [createCompositionState(), createCompositionState()];
        encodedOnce = [false, false];
        log("S8_MAPPING_PROVENANCE", {
            bundleId: BUNDLE_ID,
            role: "DISPLAY_BULK",
            mappingXml: DISPLAY_XML,
            scripts: [DISPLAY_SCRIPT],
            requiredFrameworkScripts: ["common-controller-scripts.js"],
            device: {
                vendorId: "0x17CC",
                productId: "0x1370",
                interfaceNumber: 6,
                outEndpoint: "0x04"
            },
            pathProof: "MIXXX_ABSOLUTE_LOADER_LOG_PLUS_ADJACENT_SCRIPT_RESOLUTION"
        });
        // Prime both physical screens once. Subsequent updates are alternating and dirty-only.
        sendScreen(0, true);
        sendScreen(1, true);
        var generation = lifecycleGeneration;
        try {
            timerId = typeof engine.beginTimer === "function" ? engine.beginTimer(TICK_MS, function() {
                if (!active || lifecycleGeneration !== generation) {
                    return;
                }
                tick();
            }, false) : 0;
        } catch (error) {
            timerId = 0;
            log("TIMER_START_FAILED", {error: String(error)});
        }
        log("INIT", {transport: "BULK", interface: 6, endpoint: 4, width: WIDTH, height: HEIGHT,
            realMixxxState: true, fakeWaveform: false, nativeWaveformBridge: true,
            updatePolicy: "DIRTY_ALTERNATING_31FPS_PER_SCREEN", tickMs: TICK_MS});
        return true;
    }

    function shutdown() {
        artworkCache = Object.create(null);
        active = false;
        lifecycleGeneration += 1;
        stopDisplayTimer();
        log("SHUTDOWN", {leftFrames: sentFrames[0], rightFrames: sentFrames[1], failures: sendFailures});
        return true;
    }

    function getDiagnostics() {
        return {
            active: active,
            timerId: timerId,
            lifecycleGeneration: lifecycleGeneration,
            nextScreen: nextScreen,
            sentFrames: sentFrames.slice(),
            sendFailures: sendFailures,
            performance: performance,
            lastFingerprint: lastFingerprint.slice()
        };
    }

    return {
        init: init,
        shutdown: shutdown,
        tickForTest: tick,
        sendScreenForTest: sendScreen,
        readSnapshotForTest: readSnapshot,
        renderForTest: render,
        fingerprintForTest: fingerprint,
        encodeForTest: encode,
        getDiagnostics: getDiagnostics,
        formatBpmForTest: function(value, precision) { return formatNumber(value, precision); },
        formatLoopSizeForTest: formatLoopSize,
        ratePercentForTest: function(currentBpm, originalBpm) {
            return originalBpm > 0 && currentBpm > 0 ? 100 * (currentBpm / originalBpm - 1) : null;
        },
        constants: {
            width: WIDTH,
            height: HEIGHT,
            pixelCount: PIXEL_COUNT,
            headerSize: HEADER_SIZE,
            footerSize: FOOTER_SIZE,
            maxFrameSize: MAX_FRAME_SIZE,
            tickMs: TICK_MS
        }
    };
}());

if (typeof module !== "undefined" && module.exports) {
    module.exports = S8DisplayWindowsV1;
}
