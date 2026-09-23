/* Kontrol S8 for Mixxx Windows v1.0 — self-contained HID mapping. */
// AI-GENERATED: physical authority remains the preserved JSON 259.
// NON-NORMATIVE. DO NOT EDIT MANUALLY.
// Source SHA-256: 072136907bdcf41f8a441adc20e5bf158a4dd730129259e0888ddc755ff701ca
var S8Canonical259 = (function () {
    "use strict";
    var adapter = {
  "artifact_role": "NON_NORMATIVE_GENERATED_RUNTIME_ADAPTER",
  "baseline": {
    "authority_hierarchy": [
      "reproducible raw HID capture",
      "correct technical interpretation of raw",
      "evidence-backed correction/reconciliation",
      "historical canonical baseline",
      "consumer code",
      "names/comments/inference"
    ],
    "baseline_id": "S8_HID_CANONICAL_BASELINE_259",
    "carrier_compatibility": [
      {
        "canonical_length": 41,
        "canonical_prefix_range": "bytes 0..40 inclusive",
        "classification": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
        "physical_carrier_length": 109,
        "raw_preserved": true,
        "report_id": 1,
        "tail_classification": "PRESERVED_NOT_DECLARED_PADDING",
        "tail_range": "bytes 41..108 inclusive"
      }
    ],
    "controls": [
      {
        "active_value": 1,
        "assembly_id": "BtnBackButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnBackButtonLeft",
        "correction_history": [
          {
            "from": {
              "bit_mask": "0x02",
              "byte_offset": 10,
              "report_id": 1,
              "report_length": 41
            },
            "mission": "PRIVATE_SOURCE",
            "reason": "targeted physical recapture removed the contaminated collision with CapKnob1Left",
            "to": {
              "bit_mask": "0x80",
              "byte_offset": 6,
              "report_id": 1,
              "report_length": 41
            }
          }
        ],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "BACK_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2-8",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "26-36",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2-8",
            "mission": "PRIVATE_SOURCE",
            "role": "approved single-control correction",
            "sha256": "ced89aed714cc9be1fd3f126f196c4dda7e861fa54d2fbcaf813ff9e0f082f70"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CORRECTED_WITH_EVIDENCE",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": true,
          "254": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnBackButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnBackButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "BACK_RIGHT",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_BROWSEKNOBLEFT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "BtnBrowseKnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 4,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 3,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PRESS/RELEASE observado"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "BROWSE_LEFT_PUSH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "11-15",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "11-15",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": "BtnBrowseKnobLeft",
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapBrowseKnobLeft",
          "EncBrowseKnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "PUSH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapBrowseKnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_BROWSEKNOBRIGHT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "BtnBrowseKnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 12,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 11,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PRESS/RELEASE observado"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "BROWSE_RIGHT_PUSH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2780-2784",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2780-2784",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": "BtnBrowseKnobRight",
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapBrowseKnobRight",
          "EncBrowseKnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "PUSH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapBrowseKnobRight"
      },
      {
        "active_value": 1,
        "assembly_id": "BtnCaptureButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnCaptureButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "CAPTURE_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "36-38",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "36-38",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnCaptureButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnCaptureButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "CAPTURE_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "365-367",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "365-367",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnCueButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnCueButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DECK_LEFT_CUE",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnCueButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnCueButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DECK_RIGHT_CUE",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "325-331",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "325-331",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnEditButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnEditButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "EDIT_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "40-46",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "40-46",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnEditButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnEditButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "EDIT_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "361-365",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "361-365",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFluxButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFluxButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FLUX_LEFT",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFluxButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFluxButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FLUX_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "335-339",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "335-339",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx1ButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx1ButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 4,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 3,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_1_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "149-153",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "149-153",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx1ButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx1ButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 12,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 11,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_1_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "235-241",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "235-241",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx2ButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx2ButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_2_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "153-155",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "153-155",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx2ButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx2ButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_2_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "241-243",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "241-243",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx3ButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx3ButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_3_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "157-161",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "157-161",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx3ButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx3ButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_3_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "245-251",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "245-251",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx4ButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx4ButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_4_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "161-167",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "161-167",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFx4ButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFx4ButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FX_4_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "251-257",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "251-257",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassLAMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassLAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 22,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 21,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_LA",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "191-195",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "191-195",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "A",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassLBMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassLBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 25,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 24,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_LB",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "211-217",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "211-217",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "B",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassLCMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassLCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 22,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 21,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_LC",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "135-139",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "135-139",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "C",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassLDMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassLDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 25,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 24,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_LD",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "221-225",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "221-225",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "D",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassRAMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassRAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 22,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 21,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_RA",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "195-201",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "195-201",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "A",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassRBMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassRBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 25,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 24,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_RB",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "217-221",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "217-221",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "B",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassRCMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassRCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 22,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 21,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_RC",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "139-143",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "139-143",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "C",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnFxassRDMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnFxassRDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 25,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 24,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "FXASS_RD",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "225-231",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "225-231",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "D",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnHotcueButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnHotcueButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "HOTCUE_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "79-83",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "79-83",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnHotcueButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnHotcueButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "HOTCUE_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "353-355",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "353-355",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnLoopButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnLoopButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "LOOP_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "83-89",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "83-89",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnLoopButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnLoopButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "LOOP_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "347-353",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "347-353",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_LOOPKNOBLEFT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "BtnLoopKnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 7,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 6,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PRESS/RELEASE observado"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "LOOP_LEFT_PUSH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "89-93",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "89-93",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": "BtnLoopKnobLeft",
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapLoopKnobLeft",
          "EncLoopKnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "PUSH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapLoopKnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_LOOPKNOBRIGHT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "BtnLoopKnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 15,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 14,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PRESS/RELEASE observado"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "LOOP_RIGHT_PUSH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "97-101",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "97-101",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": "BtnLoopKnobRight",
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapLoopKnobRight",
          "EncLoopKnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "PUSH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapLoopKnobRight"
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton1Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton1Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_1_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "173-177",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "173-177",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton1Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton1Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_1_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "265-267",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "265-267",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton2Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton2Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_2_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "177-181",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "177-181",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton2Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton2Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_2_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "267-271",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "267-271",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton3Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton3Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_3_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "181-185",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "181-185",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton3Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton3Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_3_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "271-277",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "271-277",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton4Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton4Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_4_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "185-191",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "185-191",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnOnButton4Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnOnButton4Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "ON_4_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "277-281",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "277-281",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad1Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad1Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_1_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "101-107",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "101-107",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad1Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad1Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_1_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "281-285",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "281-285",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad2Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad2Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_2_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "107-109",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "107-109",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad2Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad2Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_2_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "285-291",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "285-291",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad3Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad3Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 7,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 6,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_3_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "109-113",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "109-113",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad3Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad3Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 15,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 14,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_3_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "291-295",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "291-295",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad4Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad4Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 7,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 6,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_4_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "115-117",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "115-117",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad4Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad4Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 15,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 14,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_4_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "295-301",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "295-301",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad5Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad5Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_5_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "117-121",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "117-121",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad5Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad5Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_5_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "301-303",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "301-303",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad6Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad6Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_6_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "121-123",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "121-123",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad6Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad6Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_6_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "305-311",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "305-311",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad7Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad7Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_7_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "123-127",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "123-127",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad7Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad7Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_7_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "311-317",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "311-317",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad8Left",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad8Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_8_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "127-129",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "127-129",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPad8Right",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPad8Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "PAD",
        "physical_label": "PAD_8_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "317-323",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "317-323",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "PADS",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_CHANNEL_A_PFL",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED_COM_CONVENCAO_DE_OFFSET",
        "control_id": "BtnPflAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 20,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 19,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "offset can\u00f4nico conta Report ID como byte 0; payload usa offset -1"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "CHANNEL_A_PFL",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "3-4",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "3-4",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "MIXER / CHANNEL A",
        "side_channel": "A",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_CHANNEL_B_PFL",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED_COM_CONVENCAO_DE_OFFSET",
        "control_id": "BtnPflBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 23,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 22,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "offset can\u00f4nico conta Report ID como byte 0; payload usa offset -1"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "CHANNEL_B_PFL",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "5-6",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "5-6",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "MIXER / CHANNEL B",
        "side_channel": "B",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_CHANNEL_C_PFL",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED_COM_CONVENCAO_DE_OFFSET",
        "control_id": "BtnPflCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 20,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 19,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "offset can\u00f4nico conta Report ID como byte 0; payload usa offset -1"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "CHANNEL_C_PFL",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-2",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-2",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "MIXER / CHANNEL C",
        "side_channel": "C",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_CHANNEL_D_PFL",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED_COM_CONVENCAO_DE_OFFSET",
        "control_id": "BtnPflDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 23,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 22,
          "shift": null
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "offset can\u00f4nico conta Report ID como byte 0; payload usa offset -1"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "CHANNEL_D_PFL",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "7-8",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "7-8",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "313239b41b8136fca5655af056890a84d8ad6b393b927d270a180ff256dc9458"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": null,
        "section": "MIXER / CHANNEL D",
        "side_channel": "D",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPlayButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPlayButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "PLAY_LEFT",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnPlayButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnPlayButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "PLAY_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "331-335",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "331-335",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnQuantizeMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnQuantizeMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 25,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 24,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "QUANTIZE",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "207-211",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "207-211",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "CENTER",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnRemixButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnRemixButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "REMIX_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "97-99",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "97-99",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnRemixButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnRemixButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "REMIX_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "339-345",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "339-345",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnSelectButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnSelectButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 4,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 3,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SELECT_LEFT",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnSelectButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnSelectButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 12,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 11,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SELECT_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "257-261",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "257-261",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnShiftButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnShiftButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SHIFT_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "129-131",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "129-131",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnShiftButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnShiftButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SHIFT_RIGHT",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnSliceButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnSliceButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SLICE_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "89-97",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "89-97",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnSliceButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnSliceButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SLICE_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "345-347",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "345-347",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnSnapMixer",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnSnapMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 22,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 21,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SNAP",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "201-203",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "201-203",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "CENTER",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnSyncButtonLeft",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnSyncButtonLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SYNC_LEFT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "131-135",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "131-135",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "BtnSyncButtonRight",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnSyncButtonRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "SYNC_RIGHT",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "323-325",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "323-325",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DECK",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_TEMPOMIXER",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "BtnTempoMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 23,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 22,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "TEMPO",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "231-235",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "231-235",
            "mission": "PRIVATE_SOURCE",
            "role": "physical map and raw campaign",
            "sha256": "b32fbf49dfef3525cc6275551c87ff7d72b06b14dcb4dec4f8ec6d34290a2fcd"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EncTempoMixer"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "MIXER",
        "side_channel": "CENTER",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_TOUCHSTRIPLEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "BtnTouchstripLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 29,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 28,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "TOUCHSTRIP LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "32-117",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "32-117",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "TstTouchstripLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "BtnTouchstripLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_TOUCHSTRIPRIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "BtnTouchstripRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 35,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 34,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "TOUCHSTRIP RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "117-135",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "117-135",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "TstTouchstripRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "BtnTouchstripRight"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_BROWSEKNOBLEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapBrowseKnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "BROWSE_LEFT_TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "10-12",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "10-12",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": "BtnBrowseKnobLeft",
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "BtnBrowseKnobLeft",
          "EncBrowseKnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapBrowseKnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_BROWSEKNOBRIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapBrowseKnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "BROWSE_RIGHT_TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "145-147",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "145-147",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": "BtnBrowseKnobRight",
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "BtnBrowseKnobRight",
          "EncBrowseKnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapBrowseKnobRight"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER1LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader1Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 11,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 10,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 1 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "22-24",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "22-24",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader1Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader1Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER1RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader1Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 19,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 18,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 1 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "135-137",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "135-137",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader1Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader1Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER2LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader2Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 11,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 10,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 2 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "24-26",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "24-26",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader2Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader2Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER2RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader2Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 19,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 18,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 2 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "137-139",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "137-139",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader2Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader2Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER3LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader3Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 11,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 10,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 3 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "26-28",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "26-28",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader3Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader3Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER3RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader3Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 19,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 18,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 3 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "139-141",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "139-141",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader3Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader3Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER4LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader4Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 11,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 10,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 4 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "30-32",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "30-32",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader4Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader4Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FADER4RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFader4Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 19,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 18,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FADER 4 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "141-143",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "141-143",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "FadFader4Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader4Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX1KNOBLEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx1KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 1 KNOB LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-4",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-4",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx1KnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx1KnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX1KNOBRIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx1KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 1 KNOB RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "155-157",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "155-157",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx1KnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx1KnobRight"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX2KNOBLEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx2KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 2 KNOB LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "4-6",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "4-6",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx2KnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx2KnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX2KNOBRIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx2KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 128,
          "bit_mask_hex": "0x80",
          "byte_masks": [
            "0x80"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 7
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 2 KNOB RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "157-159",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "157-159",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx2KnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx2KnobRight"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX3KNOBLEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx3KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 11,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 10,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 3 KNOB LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "6-8",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "6-8",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx3KnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx3KnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX3KNOBRIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx3KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 19,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 18,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 3 KNOB RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "159-161",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "159-161",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx3KnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx3KnobRight"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX4KNOBLEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx4KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 11,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 10,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 4 KNOB LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "8-10",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "8-10",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx4KnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx4KnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_FX4KNOBRIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapFx4KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 19,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 18,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "FX 4 KNOB RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "161-163",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "161-163",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "KnbFx4KnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "FX",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx4KnobRight"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB1LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob1Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 1 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "14-16",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "14-16",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob1Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": true,
          "254": false
        },
        "touch_control_id": "CapKnob1Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB1RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob1Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 2,
          "bit_mask_hex": "0x02",
          "byte_masks": [
            "0x02"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 1
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 1 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "147-149",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "147-149",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob1Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob1Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB2LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob2Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 2 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "16-18",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "16-18",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob2Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob2Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB2RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob2Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 2 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "149-151",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "149-151",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob2Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob2Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB3LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob3Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 3 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "18-20",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "18-20",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob3Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob3Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB3RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob3Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 3 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "151-153",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "151-153",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob3Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob3Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB4LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob4Left",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 4 LEFT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "20-22",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "20-22",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob4Left"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob4Left"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_KNOB4RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapKnob4Right",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "KNOB 4 RIGHT \u2014 TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "153-155",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "153-155",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "EndKnob4Right"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob4Right"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_LOOPKNOBLEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapLoopKnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 10,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 9,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "LOOP_LEFT_TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "12-14",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "12-14",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": "BtnLoopKnobLeft",
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "BtnLoopKnobLeft",
          "EncLoopKnobLeft"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapLoopKnobLeft"
      },
      {
        "active_value": 1,
        "assembly_id": "ASSEMBLY_LOOPKNOBRIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_AND_APPROVED_CANONICAL",
        "control_id": "CapLoopKnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 18,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 17,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "TOUCH presence is a separate canonical signal and may gate push, rotation, or absolute motion."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCH",
        "physical_label": "LOOP_RIGHT_TOUCH",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "143-145",
            "mission": "PRIVATE_SOURCE",
            "role": "approved touch canonical baseline",
            "sha256": "4911c51316789a9b094d672704ebf42a2d8fbfdfe1de33366067cebb43cbdbbd"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "143-145",
            "mission": "PRIVATE_SOURCE",
            "role": "physical touch map and raw campaign",
            "sha256": "394c83c250a10fa1b18966d3d1bc323f348e5e02d49eb6fd6d10b712674c1d9d"
          }
        ],
        "push_control_id": "BtnLoopKnobRight",
        "reconciliation_status": "CONFIRMED_MULTIPLE_SOURCES",
        "related_control_ids": [
          "BtnLoopKnobRight",
          "EncLoopKnobRight"
        ],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCH",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": true,
          "251": true,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapLoopKnobRight"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_BROWSEKNOBLEFT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": 1,
        "confidence": "CONFIRMED",
        "control_id": "EncBrowseKnobLeft",
        "correction_history": [],
        "cw_code": -1,
        "direction": "CW_DECREASES",
        "encoding": "MASKED_WRAP_COUNTER",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": 240,
          "bit_mask_hex": "0xF0",
          "byte_masks": [
            "0xF0"
          ],
          "byte_offset_with_report_id": 1,
          "field_width": 1,
          "modulus": 16,
          "payload_offset_without_report_id": 0,
          "shift": 4
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "campo f\u00edsico normalizado do binding operacional legado de byte inteiro para nibble alto (mask 0xF0, shift 4, modulus 16)",
          "Only the masked nibble is consumed; the complementary nibble is an independent encoder field."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "ENCODER",
        "physical_label": "BROWSE_LEFT_ROTARY",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2752-2780",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2752-2780",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "BtnBrowseKnobLeft",
          "CapBrowseKnobLeft"
        ],
        "release_edge": null,
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ENCODER_RELATIVE",
        "signedness": "UNSIGNED_COUNTER_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapBrowseKnobLeft"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_BROWSEKNOBRIGHT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": 1,
        "confidence": "CONFIRMED",
        "control_id": "EncBrowseKnobRight",
        "correction_history": [],
        "cw_code": -1,
        "direction": "CW_DECREASES",
        "encoding": "MASKED_WRAP_COUNTER",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": 240,
          "bit_mask_hex": "0xF0",
          "byte_masks": [
            "0xF0"
          ],
          "byte_offset_with_report_id": 2,
          "field_width": 1,
          "modulus": 16,
          "payload_offset_without_report_id": 1,
          "shift": 4
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "campo f\u00edsico normalizado do binding operacional legado de byte inteiro para nibble alto (mask 0xF0, shift 4, modulus 16)",
          "Only the masked nibble is consumed; the complementary nibble is an independent encoder field."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "ENCODER",
        "physical_label": "BROWSE_RIGHT_ROTARY",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2752-2767",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2752-2767",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "BtnBrowseKnobRight",
          "CapBrowseKnobRight"
        ],
        "release_edge": null,
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ENCODER_RELATIVE",
        "signedness": "TWOS_COMPLEMENT_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapBrowseKnobRight"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_LOOPKNOBLEFT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": -1,
        "confidence": "CONFIRMED",
        "control_id": "EncLoopKnobLeft",
        "correction_history": [],
        "cw_code": 1,
        "direction": "CW_INCREASES",
        "encoding": "MASKED_WRAP_COUNTER",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": 15,
          "bit_mask_hex": "0x0F",
          "byte_masks": [
            "0x0F"
          ],
          "byte_offset_with_report_id": 1,
          "field_width": 1,
          "modulus": 16,
          "payload_offset_without_report_id": 0,
          "shift": 0
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "contador circular mascarado com duas dire\u00e7\u00f5es",
          "Only the masked nibble is consumed; the complementary nibble is an independent encoder field."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "ENCODER",
        "physical_label": "LOOP_LEFT_ROTARY",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "24-35",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "5009dc9f9f4a3b16b8f16ae8f0740eecb0dc2b049a6309858d212bdb0dbf7689"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "24-35",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "5009dc9f9f4a3b16b8f16ae8f0740eecb0dc2b049a6309858d212bdb0dbf7689"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "BtnLoopKnobLeft",
          "CapLoopKnobLeft"
        ],
        "release_edge": null,
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ENCODER_RELATIVE",
        "signedness": "UNSIGNED_COUNTER_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapLoopKnobLeft"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_LOOPKNOBRIGHT",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": -1,
        "confidence": "CONFIRMED",
        "control_id": "EncLoopKnobRight",
        "correction_history": [],
        "cw_code": 1,
        "direction": "CW_INCREASES",
        "encoding": "MASKED_WRAP_COUNTER",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": 15,
          "bit_mask_hex": "0x0F",
          "byte_masks": [
            "0x0F"
          ],
          "byte_offset_with_report_id": 2,
          "field_width": 1,
          "modulus": 16,
          "payload_offset_without_report_id": 1,
          "shift": 0
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "contador circular mascarado com duas dire\u00e7\u00f5es",
          "Only the masked nibble is consumed; the complementary nibble is an independent encoder field."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "ENCODER",
        "physical_label": "LOOP_RIGHT_ROTARY",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "35-51",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "5009dc9f9f4a3b16b8f16ae8f0740eecb0dc2b049a6309858d212bdb0dbf7689"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "35-51",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "5009dc9f9f4a3b16b8f16ae8f0740eecb0dc2b049a6309858d212bdb0dbf7689"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "BtnLoopKnobRight",
          "CapLoopKnobRight"
        ],
        "release_edge": null,
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ENCODER_RELATIVE",
        "signedness": "UNSIGNED_COUNTER_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapLoopKnobRight"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_TEMPOMIXER",
        "canonical_view": {
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": 248,
        "confidence": "CONFIRMED",
        "control_id": "EncTempoMixer",
        "correction_history": [],
        "cw_code": 247,
        "direction": "GUIDED_CW_THEN_CCW",
        "encoding": "INCREMENT_DECREMENT_CODES",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF"
          ],
          "byte_offset_with_report_id": 3,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 2,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "ENCODER",
        "physical_label": "Enc Tempo Mixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "101-107",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "101-107",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "BtnTempoMixer"
        ],
        "release_edge": null,
        "report_id": 1,
        "report_length": 109,
        "resolution_observed": 0,
        "section": "MIXER / CENTER",
        "side_channel": "CENTER",
        "signal_type": "ENCODER_RELATIVE",
        "signedness": "RAW_CODES",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB1LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob1Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 1,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 0,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 855,
        "observed_min": 299,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 1 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2017-2088",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2017-2088",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob1Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob1Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB1RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob1Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 9,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 8,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 417,
        "observed_min": 168,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 1 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "80-112",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "d3996a473854ca813cbd46499e5ad2b7562c052969648d120a2aea6121814df3"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "80-112",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "d3996a473854ca813cbd46499e5ad2b7562c052969648d120a2aea6121814df3"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob1Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob1Right"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB2LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob2Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 3,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 2,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 955,
        "observed_min": 306,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 2 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2087-2157",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2087-2157",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob2Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob2Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB2RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob2Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 11,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 10,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 777,
        "observed_min": 399,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 2 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2332-2379",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2332-2379",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob2Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob2Right"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB3LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob3Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 475,
        "observed_min": 8,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 3 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2156-2214",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2156-2214",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob3Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob3Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB3RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob3Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 492,
        "observed_min": 45,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 3 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2425-2475",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2425-2475",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob3Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob3Right"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB4LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob4Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 7,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 6,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 520,
        "observed_min": 338,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 4 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2267-2302",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2267-2302",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob4Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob4Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_KNOB4RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "EndKnob4Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 15,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 14,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 698,
        "observed_min": 159,
        "physical_component_type": "KNOB",
        "physical_label": "End Knob 4 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2696-2753",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "2696-2753",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapKnob4Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapKnob4Right"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER1LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader1Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 17,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 16,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 17,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 1 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "628-669",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "628-669",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader1Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader1Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER1RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader1Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 25,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 24,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 18,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 1 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "854-893",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "854-893",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader1Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader1Right"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER2LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader2Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 19,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 18,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 16,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 2 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "668-726",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "668-726",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader2Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader2Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER2RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader2Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 27,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 26,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 15,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 2 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "892-942",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "892-942",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader2Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader2Right"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER3LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader3Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 21,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 20,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4083,
        "observed_min": 18,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 3 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "725-790",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "725-790",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader3Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader3Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER3RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader3Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 29,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 28,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 14,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 3 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "941-1007",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "941-1007",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader3Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader3Right"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER4LEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader4Left",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 23,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 22,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 18,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 4 Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "789-855",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "789-855",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader4Left"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader4Left"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FADER4RIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadFader4Right",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 31,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 30,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 14,
        "physical_component_type": "FADER",
        "physical_label": "Fad Fader 4 Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1071-1125",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1071-1125",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFader4Right"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "DECK / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFader4Right"
      },
      {
        "active_value": null,
        "assembly_id": "FadLinefaderAMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadLinefaderAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF"
          ],
          "byte_offset_with_report_id": 34,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 33,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 15,
        "observed_min": 0,
        "physical_component_type": "FADER",
        "physical_label": "Fad Linefader AMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "83-228",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "83-228",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / A",
        "side_channel": "A",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "FadLinefaderBMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadLinefaderBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF"
          ],
          "byte_offset_with_report_id": 36,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 35,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 15,
        "observed_min": 0,
        "physical_component_type": "FADER",
        "physical_label": "Fad Linefader BMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "297-384",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "297-384",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / B",
        "side_channel": "B",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "FadLinefaderCMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadLinefaderCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 37,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 36,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4089,
        "observed_min": 14,
        "physical_component_type": "FADER",
        "physical_label": "Fad Linefader CMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-55",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-55",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / C",
        "side_channel": "C",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "FadLinefaderDMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "FadLinefaderDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF"
          ],
          "byte_offset_with_report_id": 40,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 39,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 15,
        "observed_min": 0,
        "physical_component_type": "FADER",
        "physical_label": "Fad Linefader DMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "419-555",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "419-555",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / D",
        "side_channel": "D",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbFilterAMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFilterAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 77,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 76,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4079,
        "observed_min": 11,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Filter AMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "843-933",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "843-933",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / A",
        "side_channel": "A",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbFilterBMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFilterBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 87,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 86,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4083,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Filter BMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "735-806",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "735-806",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / B",
        "side_channel": "B",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbFilterCMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFilterCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 97,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 96,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4083,
        "observed_min": 11,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Filter CMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "979-1079",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "979-1079",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / C",
        "side_channel": "C",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbFilterDMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFilterDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 107,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 106,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4083,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Filter DMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "594-684",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "594-684",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / D",
        "side_channel": "D",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX1KNOBLEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx1KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 43,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 42,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 15,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 1 Knob Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1760-1809",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1760-1809",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx1KnobLeft"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx1KnobLeft"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX1KNOBRIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx1KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 51,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 50,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 15,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 1 Knob Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1265-1344",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1265-1344",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx1KnobRight"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx1KnobRight"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX2KNOBLEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx2KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 45,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 44,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 17,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 2 Knob Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1808-1863",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1808-1863",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx2KnobLeft"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx2KnobLeft"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX2KNOBRIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx2KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 53,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 52,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 15,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 2 Knob Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1450-1537",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1450-1537",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx2KnobRight"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx2KnobRight"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX3KNOBLEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx3KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 47,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 46,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 17,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 3 Knob Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1862-1901",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1862-1901",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx3KnobLeft"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx3KnobLeft"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX3KNOBRIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx3KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 55,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 54,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 3 Knob Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1536-1592",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1536-1592",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx3KnobRight"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx3KnobRight"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX4KNOBLEFT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx4KnobLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 49,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 48,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4078,
        "observed_min": 17,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 4 Knob Left",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1900-1955",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1900-1955",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx4KnobLeft"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / LEFT",
        "side_channel": "LEFT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx4KnobLeft"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_FX4KNOBRIGHT",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbFx4KnobRight",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 57,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 56,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Fx 4 Knob Right",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1591-1658",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1591-1658",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "a9a5eba7ef3f670a2f377802117f7eecb0dda77a3109b2a18ff180c7fa8e5998"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [
          "CapFx4KnobRight"
        ],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "FX / RIGHT",
        "side_channel": "RIGHT",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": "CapFx4KnobRight"
      },
      {
        "active_value": null,
        "assembly_id": "KnbGainAMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbGainAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 69,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 68,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4083,
        "observed_min": 11,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Gain AMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "745-804",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "745-804",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / A",
        "side_channel": "A",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbGainBMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbGainBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 79,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 78,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4081,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Gain BMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "837-872",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "837-872",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / B",
        "side_channel": "B",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbGainCMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbGainCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 89,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 88,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 9,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Gain CMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "661-712",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "661-712",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / C",
        "side_channel": "C",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbGainDMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbGainDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 99,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 98,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4082,
        "observed_min": 13,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Gain DMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "890-937",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "890-937",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / D",
        "side_channel": "D",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbHiAMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbHiAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 71,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 70,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4082,
        "observed_min": 11,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Hi AMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "242-317",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "242-317",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / A",
        "side_channel": "A",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbHiBMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbHiBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 81,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 80,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4082,
        "observed_min": 13,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Hi BMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1742-1788",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1742-1788",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / B",
        "side_channel": "B",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbHiCMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbHiCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 91,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 90,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4079,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Hi CMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "352-418",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "352-418",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / C",
        "side_channel": "C",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbHiDMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbHiDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 101,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 100,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4081,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Hi DMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1308-1353",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1308-1353",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / D",
        "side_channel": "D",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbLowAMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbLowAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 75,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 74,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 13,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Low AMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-84",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-84",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / A",
        "side_channel": "A",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbLowBMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbLowBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 85,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 84,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4078,
        "observed_min": 13,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Low BMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1488-1536",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1488-1536",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / B",
        "side_channel": "B",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbLowCMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbLowCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF"
          ],
          "byte_offset_with_report_id": 96,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 95,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 15,
        "observed_min": 0,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Low CMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "536-627",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "536-627",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / C",
        "side_channel": "C",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbLowDMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbLowDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "DECREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "NOT_APPLICABLE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF"
          ],
          "byte_offset_with_report_id": 106,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 105,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 15,
        "observed_min": 0,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Low DMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1383-1462",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1383-1462",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / D",
        "side_channel": "D",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbMidAMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbMidAMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 73,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 72,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4084,
        "observed_min": 10,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Mid AMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "129-200",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "129-200",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / A",
        "side_channel": "A",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbMidBMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbMidBMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 83,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 82,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4077,
        "observed_min": 14,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Mid BMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1568-1627",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1568-1627",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / B",
        "side_channel": "B",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbMidCMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbMidCMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 93,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 92,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4082,
        "observed_min": 9,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Mid CMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "449-505",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "449-505",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "536f061e2317f5065648ff09ff17b9b33ac1c54544374e43325436292ee68f61"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / C",
        "side_channel": "C",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "KnbMidDMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "KnbMidDMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 103,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 102,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4081,
        "observed_min": 20,
        "physical_component_type": "KNOB",
        "physical_label": "Knb Mid DMixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1221-1272",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1221-1272",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "9e30daadbe0959f9018188b4f79f03cb891e1e562dd8bdf390c56e5995ac00dc"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / D",
        "side_channel": "D",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "PHYSICAL_DECK_BUTTON_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "PHYSICAL_DECK_BUTTON_LEFT",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 8,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 7,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DECK_LEFT",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TRANSPORT",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "PHYSICAL_DECK_BUTTON_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "EXACT_CANONICAL_FAMILY",
          "length": 41
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_OR_APPROVED_CANONICAL",
        "control_id": "PHYSICAL_DECK_BUTTON_RIGHT",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 4,
          "bit_mask_hex": "0x04",
          "byte_masks": [
            "0x04"
          ],
          "byte_offset_with_report_id": 16,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 15,
          "shift": 2
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "PAD is retained in physical_component_type when applicable; electrical signal remains binary BUTTON."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DECK_RIGHT",
        "press_edge": "PRESS_AND_RELEASE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "historical canonical baseline",
            "sha256": "3fdc6b84977eea53e62922367c42b1375504cbf7505a244fa1a50509e88b698f"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "TRANSPORT",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": true,
          "049": true,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_TOUCHSTRIPLEFT",
        "canonical_view": null,
        "ccw_code": null,
        "confidence": "IDENTITY_ONLY_NO_IF5_BINDING",
        "control_id": "TstTouchstripLeft",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": null,
        "endianness": null,
        "field": null,
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity is known, but no reproducible IF5 position field exists in the eight audited missions. No value was inferred."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCHSTRIP",
        "physical_label": "TOUCHSTRIP_LEFT_POSITION",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "physical inventory identity only",
            "sha256": "4490177b18077803914954148619448510615a33008aaa39f67dd6061801c51c"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "GAP",
        "related_control_ids": [
          "BtnTouchstripLeft"
        ],
        "release_edge": null,
        "report_id": null,
        "report_length": null,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "LEFT",
        "signal_type": "TOUCHSTRIP_POSITION",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "BtnTouchstripLeft"
      },
      {
        "active_value": null,
        "assembly_id": "ASSEMBLY_TOUCHSTRIPRIGHT",
        "canonical_view": null,
        "ccw_code": null,
        "confidence": "IDENTITY_ONLY_NO_IF5_BINDING",
        "control_id": "TstTouchstripRight",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": null,
        "endianness": null,
        "field": null,
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity is known, but no reproducible IF5 position field exists in the eight audited missions. No value was inferred."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "TOUCHSTRIP",
        "physical_label": "TOUCHSTRIP_RIGHT_POSITION",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "physical inventory identity only",
            "sha256": "4490177b18077803914954148619448510615a33008aaa39f67dd6061801c51c"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "GAP",
        "related_control_ids": [
          "BtnTouchstripRight"
        ],
        "release_edge": null,
        "report_id": null,
        "report_length": null,
        "resolution_observed": null,
        "section": "TOUCH",
        "side_channel": "RIGHT",
        "signal_type": "TOUCHSTRIP_POSITION",
        "signedness": null,
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false
        },
        "touch_control_id": "BtnTouchstripRight"
      },
      {
        "active_value": null,
        "assembly_id": "XfdCrossfaderMixer",
        "canonical_view": {
          "kind": "PHYSICAL_RAW_FAMILY",
          "length": 109,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "CONFIRMED",
        "control_id": "XfdCrossfaderMixer",
        "correction_history": [],
        "cw_code": null,
        "direction": "INCREASING",
        "encoding": "ABSOLUTE_POSITION",
        "endianness": "LE",
        "field": {
          "bit_mask": null,
          "bit_mask_hex": null,
          "byte_masks": [
            "0xFF",
            "0xFF"
          ],
          "byte_offset_with_report_id": 41,
          "field_width": 2,
          "modulus": null,
          "payload_offset_without_report_id": 40,
          "shift": null
        },
        "idle_value": null,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "varia\u00e7\u00e3o num\u00e9rica coincide com o binding persistido"
        ],
        "observed_max": 4085,
        "observed_min": 43,
        "physical_component_type": "FADER",
        "physical_label": "Xfd Crossfader Mixer",
        "press_edge": null,
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-58",
            "mission": "PRIVATE_SOURCE",
            "role": "final physical consolidation",
            "sha256": "b2e6072f2befd4e137f15598a0850b890fe731ce4abe404ddabcefaefd926347"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "evidence_sequence": "1-58",
            "mission": "PRIVATE_SOURCE",
            "role": "raw physical capture",
            "sha256": "b2e6072f2befd4e137f15598a0850b890fe731ce4abe404ddabcefaefd926347"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "ADDED_BY_LATER_CAPTURE",
        "related_control_ids": [],
        "release_edge": null,
        "report_id": 2,
        "report_length": 109,
        "resolution_observed": 1,
        "section": "MIXER / CENTER",
        "side_channel": "CENTER",
        "signal_type": "ANALOG",
        "signedness": "UNSIGNED_OBSERVED",
        "source_occurrence": {
          "047": true,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": true,
          "253": false,
          "254": false
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_01",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 4,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 3,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 1",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 6,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_02",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 4,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 3,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 2",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_03",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 4,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 3,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 3",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_04",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 6,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 5,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 4",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_05",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 5",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_06",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 6",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_07",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 7",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_LEFT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_LEFT_BTN_08",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 5,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 4,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY LEFT BUTTON 8",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "LEFT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_01",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 12,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 11,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 1",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 4,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_02",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 12,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 11,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 2",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_03",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 1,
          "bit_mask_hex": "0x01",
          "byte_masks": [
            "0x01"
          ],
          "byte_offset_with_report_id": 12,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 11,
          "shift": 0
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 3",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_04",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 14,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 13,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 4",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_05",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 8,
          "bit_mask_hex": "0x08",
          "byte_masks": [
            "0x08"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": 3
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 5",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_06",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 16,
          "bit_mask_hex": "0x10",
          "byte_masks": [
            "0x10"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": 4
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 6",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_07",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 32,
          "bit_mask_hex": "0x20",
          "byte_masks": [
            "0x20"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": 5
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 7",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      },
      {
        "active_value": 1,
        "assembly_id": "DISPLAY_RIGHT",
        "canonical_view": {
          "compatible_carrier_lengths": [
            109
          ],
          "kind": "CANONICAL_PREFIX_COMPATIBLE_CARRIER",
          "length": 41,
          "raw_length_preserved": 109
        },
        "ccw_code": null,
        "confidence": "PHYSICAL_DIRECT_REPEATED",
        "control_id": "DISPLAY_RIGHT_BTN_08",
        "correction_history": [],
        "cw_code": null,
        "direction": null,
        "encoding": "BITFIELD",
        "endianness": null,
        "field": {
          "bit_mask": 64,
          "bit_mask_hex": "0x40",
          "byte_masks": [
            "0x40"
          ],
          "byte_offset_with_report_id": 13,
          "field_width": 1,
          "modulus": null,
          "payload_offset_without_report_id": 12,
          "shift": 6
        },
        "idle_value": 0,
        "interface": "USB_HID_NATIVE_IF5_READ_ONLY",
        "notes": [
          "Physical identity only; UI action is defined by a separately documented functional contract.",
          "Offset includes Report ID at byte 0; captured carrier length 109 is preserved as compatible raw evidence."
        ],
        "observed_max": null,
        "observed_min": null,
        "physical_component_type": "BUTTON",
        "physical_label": "DISPLAY RIGHT BUTTON 8",
        "press_edge": "INACTIVE_TO_ACTIVE",
        "provenance": [
          {
            "artifact": "PRIVATE_SOURCE",
            "capture_session": "PRIVATE_SOURCE",
            "clean_cycles": 3,
            "mission": "PRIVATE_SOURCE",
            "raw_report_length": 109,
            "role": "final clean repeated physical capture",
            "sha256": "246537eaa6d9b2fad349f79bf13e67e87cb7375ede2746eade6d50932f122baf"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "closed physical matrix",
            "sha256": "f83637c9bca96ece9d2005313d107130804ab5cccaab2c395dd9982d61abb6ca"
          },
          {
            "artifact": "PRIVATE_SOURCE",
            "mission": "PRIVATE_SOURCE",
            "role": "logical crosswalk",
            "sha256": "f64c34d432e9371cb436fcf547db13b963242182b0fa4006e0fb0c004c2dd175"
          }
        ],
        "push_control_id": null,
        "reconciliation_status": "CONFIRMED_DISPLAY_BUTTONS",
        "related_control_ids": [],
        "release_edge": "ACTIVE_TO_INACTIVE",
        "report_id": 1,
        "report_length": 41,
        "resolution_observed": null,
        "section": "DISPLAY",
        "side_channel": "RIGHT",
        "signal_type": "BUTTON",
        "signedness": null,
        "source_occurrence": {
          "047": false,
          "048": false,
          "049": false,
          "050": false,
          "251": false,
          "252": false,
          "253": false,
          "254": false,
          "257": true,
          "258": true
        },
        "touch_control_id": null
      }
    ],
    "device": {
      "interface": "MI_05 / IF5",
      "manufacturer": "Native Instruments",
      "model": "Traktor Kontrol S8",
      "pid": "0x1370",
      "transport": "USB HID input only",
      "vid": "0x17CC"
    },
    "gaps": [
      {
        "control_id": "TstTouchstripLeft",
        "reason": "Physical identity is known, but no reproducible IF5 position field exists in the eight audited missions. No value was inferred."
      },
      {
        "control_id": "TstTouchstripRight",
        "reason": "Physical identity is known, but no reproducible IF5 position field exists in the eight audited missions. No value was inferred."
      }
    ],
    "generated_at": "2026-09-16T00:45:41-03:00",
    "logical_contract_ref": "PRIVATE_SOURCE",
    "mission": "PRIVATE_SOURCE",
    "offset_convention": "zero-based; report ID is byte 0; payload offset equals byte offset minus one",
    "schema_version": "259.1.0",
    "source_missions": [
      "047",
      "048",
      "049",
      "050",
      "251",
      "252",
      "253",
      "254",
      {
        "mission": "PRIVATE_SOURCE",
        "role": "physical authority for 16 display buttons"
      },
      {
        "mission": "PRIVATE_SOURCE",
        "role": "logical D2/S8 crosswalk"
      },
      {
        "mission": "PRIVATE_SOURCE",
        "role": "successor promotion and functional separation"
      }
    ],
    "status": "CANONICAL_BASELINE_READY_FOR_IMPLEMENTATION",
    "summary": {
      "controls_added_by_mission_259": 16,
      "controls_inventoried": 181,
      "gaps": 2,
      "resolved_controls": 179,
      "signal_type_counts": {
        "ANALOG": 49,
        "BUTTON": 91,
        "ENCODER_RELATIVE": 5,
        "PUSH": 4,
        "TOUCH": 30,
        "TOUCHSTRIP_POSITION": 2
      },
      "status_counts": {
        "ADDED_BY_LATER_CAPTURE": 62,
        "CONFIRMED": 8,
        "CONFIRMED_DISPLAY_BUTTONS": 16,
        "CONFIRMED_MULTIPLE_SOURCES": 92,
        "CORRECTED_WITH_EVIDENCE": 1,
        "GAP": 2
      },
      "unresolved_conflicts": 0,
      "usb_output": 0
    },
    "supersedes": "S8_HID_CANONICAL_BASELINE_255",
    "supersession": {
      "added_controls": 16,
      "rule": "Historical control objects are deep-equal; only root succession metadata and appended controls changed.",
      "source_artifact": "PRIVATE_SOURCE",
      "source_controls": 165,
      "source_sha256": "26d4cf381b0f749f47f583402a1b7def3b58286c64f1ff2da067a1b9789d85f1",
      "unchanged_historical_controls": 165
    },
    "targeted_reconciliation": {
      "back_left": {
        "bit_mask": 128,
        "bit_mask_hex": "0x80",
        "byte_masks": [
          "0x80"
        ],
        "byte_offset_with_report_id": 6,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 5,
        "shift": 7
      },
      "browse_left_push": {
        "bit_mask": 8,
        "bit_mask_hex": "0x08",
        "byte_masks": [
          "0x08"
        ],
        "byte_offset_with_report_id": 4,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 3,
        "shift": null
      },
      "browse_left_rotary": {
        "bit_mask": 240,
        "bit_mask_hex": "0xF0",
        "byte_masks": [
          "0xF0"
        ],
        "byte_offset_with_report_id": 1,
        "field_width": 1,
        "modulus": 16,
        "payload_offset_without_report_id": 0,
        "shift": 4
      },
      "browse_left_touch": {
        "bit_mask": 32,
        "bit_mask_hex": "0x20",
        "byte_masks": [
          "0x20"
        ],
        "byte_offset_with_report_id": 10,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 9,
        "shift": 5
      },
      "browse_right_push": {
        "bit_mask": 8,
        "bit_mask_hex": "0x08",
        "byte_masks": [
          "0x08"
        ],
        "byte_offset_with_report_id": 12,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 11,
        "shift": null
      },
      "browse_right_rotary": {
        "bit_mask": 240,
        "bit_mask_hex": "0xF0",
        "byte_masks": [
          "0xF0"
        ],
        "byte_offset_with_report_id": 2,
        "field_width": 1,
        "modulus": 16,
        "payload_offset_without_report_id": 1,
        "shift": 4
      },
      "browse_right_touch": {
        "bit_mask": 32,
        "bit_mask_hex": "0x20",
        "byte_masks": [
          "0x20"
        ],
        "byte_offset_with_report_id": 18,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 17,
        "shift": 5
      },
      "cap_knob_1_left": {
        "bit_mask": 2,
        "bit_mask_hex": "0x02",
        "byte_masks": [
          "0x02"
        ],
        "byte_offset_with_report_id": 10,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 9,
        "shift": 1
      },
      "channel_a_pfl": {
        "bit_mask": 8,
        "bit_mask_hex": "0x08",
        "byte_masks": [
          "0x08"
        ],
        "byte_offset_with_report_id": 20,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 19,
        "shift": null
      },
      "channel_b_pfl": {
        "bit_mask": 32,
        "bit_mask_hex": "0x20",
        "byte_masks": [
          "0x20"
        ],
        "byte_offset_with_report_id": 23,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 22,
        "shift": null
      },
      "channel_c_pfl": {
        "bit_mask": 4,
        "bit_mask_hex": "0x04",
        "byte_masks": [
          "0x04"
        ],
        "byte_offset_with_report_id": 20,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 19,
        "shift": null
      },
      "channel_d_pfl": {
        "bit_mask": 64,
        "bit_mask_hex": "0x40",
        "byte_masks": [
          "0x40"
        ],
        "byte_offset_with_report_id": 23,
        "field_width": 1,
        "modulus": null,
        "payload_offset_without_report_id": 22,
        "shift": null
      }
    },
    "unresolved_conflicts": [],
    "validation": {
      "broken_operational_references": 0,
      "canonical_bit_collisions": [],
      "duplicate_control_ids": [],
      "errors": [],
      "historical_controls_deep_equal": true,
      "source_coverage": {
        "047_inventory_considered": 161,
        "047_inventory_total": 161,
        "048_records_considered": 75,
        "048_records_total": 75,
        "049_pending_considered": 4,
        "049_pending_total": 4,
        "049_resolved_considered": 71,
        "049_resolved_total": 71,
        "050_controls_considered": 30,
        "050_controls_total": 30,
        "251_controls_considered": 30,
        "251_controls_total": 30,
        "252_controls_considered": 62,
        "252_controls_total": 62,
        "254_corrections_applied": 1,
        "257_display_controls_considered": 16,
        "258_logical_crosswalk_rows_considered": 16
      }
    }
  },
  "generated_at": "2026-09-16T00:45:41-03:00",
  "generated_at_policy": "SOURCE_GENERATED_AT_FOR_REPRODUCIBLE_GENERATION",
  "source_path": "PRIVATE_SOURCE",
  "source_sha256": "072136907bdcf41f8a441adc20e5bf158a4dd730129259e0888ddc755ff701ca"
};
    function freeze(value) {
        if (value && typeof value === 'object') {
            Object.keys(value).forEach(function (key) { freeze(value[key]); });
            Object.freeze(value);
        }
        return value;
    }
    return freeze(adapter);
}());
if (typeof module !== 'undefined' && module.exports) { module.exports = S8Canonical259; }
// END AI-GENERATED: generated runtime data, not an independent canonical baseline.

// AI-GENERATED: review required. JSON 255 is the sole physical authority.
// Input decoder only. This module never accesses engine, controller or hardware.
var S8HidDecoder = (function () {
    "use strict";

    function integer(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }

    function copy(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function fail(reason) {
        return {reason: reason};
    }

    function compile(control, baseline) {
        var field = control.field;
        if (!field || !integer(control.report_id) || control.report_id < 0 ||
                control.report_id > 255 || !integer(control.report_length) ||
                !integer(field.byte_offset_with_report_id) || field.byte_offset_with_report_id < 1 ||
                !integer(field.field_width) || field.field_width < 1 || field.field_width > 4 ||
                field.byte_offset_with_report_id + field.field_width > control.report_length) {
            return fail("INVALID_OR_MISSING_FIELD_GEOMETRY");
        }
        var masks = field.byte_masks;
        if (!Array.isArray(masks) || masks.length !== field.field_width || masks.some(function (mask) {
            return typeof mask !== "string" || !/^0x[0-9a-f]{2}$/i.test(mask);
        })) {
            return fail("INVALID_OR_MISSING_BYTE_MASKS");
        }
        masks = masks.map(function (mask) { return parseInt(mask, 16); });
        var definition = {control: control, masks: masks, lengths: [control.report_length]};
        var view = control.canonical_view;
        // Only an explicit per-control list plus the matching baseline carrier declaration
        // authorizes a longer frame. A prefix annotation on a 109-byte binding does not
        // silently create a 41-byte binding or share state with another control.
        if (view && Array.isArray(view.compatible_carrier_lengths)) {
            view.compatible_carrier_lengths.forEach(function (length) {
                var authorized = (baseline.carrier_compatibility || []).some(function (carrier) {
                    return carrier.report_id === control.report_id &&
                        carrier.canonical_length === control.report_length &&
                        carrier.physical_carrier_length === length &&
                        carrier.classification === "CANONICAL_PREFIX_COMPATIBLE_CARRIER";
                });
                if (authorized && definition.lengths.indexOf(length) < 0) {
                    definition.lengths.push(length);
                }
            });
        }
        definition.domain = "R" + control.report_id + "/" + control.report_length;
        if (control.encoding === "BITFIELD" &&
                ["BUTTON", "PUSH", "TOUCH"].indexOf(control.signal_type) >= 0) {
            if (field.field_width !== 1 || !integer(field.bit_mask) || field.bit_mask < 1 ||
                    field.bit_mask > 255 || masks[0] !== field.bit_mask) {
                return fail("UNSUPPORTED_DIGITAL_MASK");
            }
            var shift = field.shift;
            if (shift === null && (field.bit_mask & (field.bit_mask - 1)) === 0) {
                // JSON 255 declares normalized inactive/active values even where shift is null.
                // For a single-bit field its position follows mechanically from the mask.
                shift = 0;
                while ((field.bit_mask >>> shift) !== 1) { shift += 1; }
            }
            if (!integer(shift) || shift < 0 || shift > 7 ||
                    !integer(control.idle_value) || !integer(control.active_value) ||
                    control.idle_value === control.active_value ||
                    (control.idle_value << shift & field.bit_mask) >>> shift !== control.idle_value ||
                    (control.active_value << shift & field.bit_mask) >>> shift !== control.active_value) {
                return fail("UNSUPPORTED_DIGITAL_VALUE_CONVENTION");
            }
            definition.kind = "DIGITAL";
            definition.shift = shift;
        } else if (control.encoding === "MASKED_WRAP_COUNTER" && control.signal_type === "ENCODER_RELATIVE") {
            if (field.field_width !== 1 || !integer(field.bit_mask) || masks[0] !== field.bit_mask ||
                    !integer(field.shift) || field.shift < 0 || field.shift > 7 ||
                    !integer(field.modulus) || field.modulus < 3 ||
                    (field.bit_mask >>> field.shift) !== field.modulus - 1 ||
                    Math.abs(control.cw_code) !== 1 || control.ccw_code !== -control.cw_code) {
                return fail("UNSUPPORTED_WRAP_COUNTER_RULE");
            }
            // Encoding defines an unsigned modular field; signedness_observed metadata does
            // not turn the nibble into a two's-complement delta or a whole-byte counter.
            definition.kind = "WRAP";
            definition.shift = field.shift;
        } else if (control.encoding === "INCREMENT_DECREMENT_CODES" && control.signal_type === "ENCODER_RELATIVE") {
            if (field.field_width !== 1 || masks[0] !== 255 ||
                    !integer(control.cw_code) || !integer(control.ccw_code) ||
                    control.cw_code < 0 || control.cw_code > 255 ||
                    control.ccw_code < 0 || control.ccw_code > 255 || control.cw_code === control.ccw_code) {
                return fail("UNSUPPORTED_DIRECTION_CODES");
            }
            definition.kind = "CODES";
            definition.temporalPolicyGap = "GAP_IMPLEMENTACAO_TEMPORAL";
        } else if (control.encoding === "ABSOLUTE_POSITION" && control.signal_type === "ANALOG") {
            if (control.signedness !== "UNSIGNED_OBSERVED" ||
                    (field.field_width > 1 && ["LE", "BE"].indexOf(control.endianness) < 0) ||
                    (field.field_width === 1 && ["LE", "BE", "NOT_APPLICABLE"].indexOf(control.endianness) < 0) ||
                    field.bit_mask !== null || field.shift !== null) {
                return fail("UNSUPPORTED_ABSOLUTE_ENCODING");
            }
            definition.kind = "ABSOLUTE";
        } else {
            return fail("UNSUPPORTED_SIGNAL_ENCODING");
        }
        return definition;
    }

    function create(adapter) {
        if (!adapter || !adapter.baseline || !Array.isArray(adapter.baseline.controls) ||
                adapter.baseline.controls.length === 0) {
            throw new Error("S8 decoder requires the generated JSON 255 adapter");
        }
        // Snapshot the data so a caller cannot change physical rules halfway through a report.
        var baseline = copy(adapter.baseline);
        var definitions = [];
        var statuses = [];
        var families = {};
        var state = {};
        var seen = Object.create(null);
        baseline.controls.forEach(function (control) {
            if (!control || typeof control.control_id !== "string" || seen[control.control_id]) {
                throw new Error("Invalid or duplicate canonical control ID");
            }
            seen[control.control_id] = true;
            var status = {controlId: control.control_id, signalType: control.signal_type};
            if (control.reconciliation_status === "GAP") {
                status.status = "GAP_CANONICAL";
                status.reason = "NO_CANONICAL_FIELD";
            } else {
                var definition = compile(control, baseline);
                if (definition.reason) {
                    status.status = "UNSUPPORTED_BY_IMPLEMENTATION";
                    status.reason = definition.reason;
                } else {
                    status.status = "SUPPORTED";
                    status.reason = "CANONICAL_FIELD_DECODABLE";
                    status.domain = definition.domain;
                    status.acceptedLengths = definition.lengths.slice();
                    if (definition.temporalPolicyGap) {
                        status.temporalPolicyGap = definition.temporalPolicyGap;
                        status.reason = "CODES_DECODED_NO_IDLE_REPETITION_OR_STEP_POLICY";
                    }
                    if (definition.kind === "ABSOLUTE") {
                        status.normalization = "RAW_IDENTITY_NO_CALIBRATED_RANGE";
                    }
                    definitions.push(definition);
                    definition.lengths.forEach(function (length) {
                        families[control.report_id + "/" + length] = true;
                    });
                }
            }
            statuses.push(status);
        });

        function reset() {
            state = {};
        }

        function reject(reason) {
            // One invalid byte anywhere invalidates the entire report before extraction.
            // The policy layer receives accepted:false and must release momentary owners.
            reset();
            return {accepted: false, reason: reason, events: [], snapshots: [], diagnostics: []};
        }

        function extract(definition, data) {
            var control = definition.control;
            var field = control.field;
            var raw = 0;
            var byteIndex;
            if (definition.kind !== "ABSOLUTE") {
                raw = data[field.byte_offset_with_report_id] & definition.masks[0];
                return definition.shift === undefined ? raw : raw >>> definition.shift;
            }
            for (byteIndex = 0; byteIndex < field.field_width; byteIndex += 1) {
                var significance = control.endianness === "BE" ? field.field_width - 1 - byteIndex : byteIndex;
                raw += (data[field.byte_offset_with_report_id + byteIndex] & definition.masks[byteIndex]) *
                    Math.pow(256, significance);
            }
            // observed_min/observed_max are capture extrema, never calibration endpoints.
            // Physical sweep direction is retained as metadata and does not invert raw input.
            return raw;
        }

        function decode(data, length) {
            if (!data || !integer(data.length) || !integer(length) || length !== data.length || length < 1) {
                return reject("INVALID_LENGTH");
            }
            var index;
            for (index = 0; index < length; index += 1) {
                if (!integer(data[index]) || data[index] < 0 || data[index] > 255) {
                    return reject("INVALID_BYTE_AT_" + index);
                }
            }
            if (!families[data[0] + "/" + length]) {
                return reject("UNSUPPORTED_REPORT_FAMILY");
            }
            var result = {accepted: true, reason: "OK", events: [], snapshots: [], diagnostics: []};
            var pending = [];
            definitions.forEach(function (definition) {
                var control = definition.control;
                if (control.report_id !== data[0] || definition.lengths.indexOf(length) < 0) { return; }
                var raw = extract(definition, data);
                var sample = {
                    controlId: control.control_id,
                    signalType: control.signal_type,
                    reportId: data[0],
                    reportLength: length,
                    domain: definition.domain,
                    rawValue: raw,
                    canonicalValue: definition.kind === "DIGITAL" ? raw === control.active_value : raw
                };
                if (definition.kind === "DIGITAL" && raw !== control.active_value && raw !== control.idle_value) {
                    result.reason = "UNDECLARED_DIGITAL_VALUE:" + control.control_id;
                }
                if (definition.kind === "CODES") {
                    sample.direction = raw === control.cw_code ? "CW" : raw === control.ccw_code ? "CCW" : null;
                    sample.delta = null;
                    sample.temporalPolicyGap = definition.temporalPolicyGap;
                }
                if (definition.kind === "ABSOLUTE") {
                    sample.normalization = "RAW_IDENTITY_NO_CALIBRATED_RANGE";
                    sample.normalizedValue = null;
                    sample.observedDirection = control.direction;
                }
                pending.push({definition: definition, sample: sample});
            });
            if (result.reason !== "OK") { return reject(result.reason); }
            // Commit only after complete validation; controls in other domains remain intact.
            pending.forEach(function (item) {
                var definition = item.definition;
                var control = definition.control;
                var sample = item.sample;
                var key = control.control_id + "@" + definition.domain;
                var previous = state[key];
                state[key] = sample;
                if (!previous) {
                    result.snapshots.push(copy(sample));
                    return;
                }
                if (previous.rawValue === sample.rawValue) { return; }
                var event = copy(sample);
                if (definition.kind === "DIGITAL") {
                    event.eventType = sample.canonicalValue ? "PRESS" : "RELEASE";
                } else if (definition.kind === "ABSOLUTE") {
                    event.eventType = "ABSOLUTE";
                } else if (definition.kind === "WRAP") {
                    var modulus = control.field.modulus;
                    var delta = (sample.rawValue - previous.rawValue + modulus) % modulus;
                    if (delta * 2 === modulus) {
                        // Exact half-turn has two equally short paths. Keep the new baseline
                        // and record ambiguity, without emitting a fabricated turn.
                        result.diagnostics.push({controlId: control.control_id, reason: "AMBIGUOUS_HALF_MODULUS", rawValue: sample.rawValue});
                        return;
                    }
                    if (delta > modulus / 2) { delta -= modulus; }
                    event.eventType = "RELATIVE";
                    event.delta = delta;
                    event.direction = (delta > 0 ? 1 : -1) === control.cw_code ? "CW" : "CCW";
                } else {
                    // Code observation is deliberately not a relative turn. JSON 255 gives
                    // direction codes but no idle/repetition semantics or number of steps.
                    event.eventType = "CODE_OBSERVED";
                    event.reason = event.direction ? "DIRECTION_CODE_CHANGED" : "UNDECLARED_CODE_OBSERVED";
                }
                result.events.push(event);
            });
            return result;
        }

        return {
            decode: decode,
            reset: reset,
            getState: function () { return copy(state); },
            support: function () { return copy(statuses); }
        };
    }

    return {create: create};
}());
if (typeof module !== "undefined" && module.exports) { module.exports = S8HidDecoder; }
// END AI-GENERATED: physical decoding only; temporal/calibration gaps remain explicit.

/*
 * Mission 291 integrated functional mapping derived from the byte-preserved 289
 * mapping and the canonical Mission 259 display-button contract.
 *
 * Physical HID authority is BASELINE_CANONICA_S8_HID_259.json plus the
 * traceable Mission 274 Touch Strip position contract. Mission 275 consumes
 * report 1/41 b28 LEFT and b34 RIGHT only while the canonical touch gates at
 * b29.0/b35.0 are active; baseline 255 itself remains unchanged.
 * S8Canonical259 is a generated non-normative runtime adapter. S8HidDecoder
 * decodes only the approved physical fields. This file adds Windows/Mixxx
 * behavior and MUST NOT be read as a modification of baseline 255.
 *
 * Mission 285 adds only a bounded HID LED-output probe over IF5. Display USB,
 * audio routing, firmware, driver installation and the Native Instruments
 * startup sequence remain outside this mapping.
 */
/* global S8Canonical259, S8HidDecoder, engine, controller */
/* exported S8WindowsV1 */
var S8WindowsV1 = (function() {
    "use strict";

    var ENDKNOB_MODULUS = 1000;
    var BROWSE_HOLD_MS = 1500;
    var BUNDLE_ID = "S8_MAPPING_BUNDLE_WINDOWS_V1_0_20260921";
    var FUNCTIONAL_XML = "Kontrol-S8-Mixxx-Windows-v1.0.hid.xml";
    var FUNCTIONAL_SCRIPTS = Object.freeze(["Kontrol-S8-Mixxx-Windows-v1.0.js"]);
    var ANALOG_MAX_12BIT = 4095;
    var ANALOG_MAX_NIBBLE = 15;
    var TOUCHSTRIP_MAX = 255;
    var TOUCHSTRIP_BEND_SENSITIVITY = 0.10;
    var TOUCHSTRIP_BEND_LIMIT = 4;
    var TOUCHSTRIP_SCRATCH_TICK_LIMIT = 32;
    var TOUCHSTRIP_POSITION_OFFSET = Object.freeze({LEFT: 28, RIGHT: 34});
    var TOUCHSTRIP_GATE_OFFSET = Object.freeze({LEFT: 29, RIGHT: 35});
    // Mission 259 operational corrections from the user's physical Windows test.
    // Baseline 255 remains unchanged. Each listed control flips only the runtime
    // direction interpretation relative to the canonical field direction.
    var ANALOG_DIRECTION_FLIP_269 = Object.freeze({
        FadLinefaderCMixer: true,
        KnbLowCMixer: true,
        FadLinefaderAMixer: true,
        KnbLowAMixer: true,
        FadLinefaderBMixer: true,
        KnbFilterBMixer: true,
        KnbGainBMixer: true,
        KnbLowDMixer: true
    });

    var DISPLAY_CONTEXT = Object.freeze({DECK: 0, BROWSER: 1, FX_SELECT: 2});
    var DISPLAY_PAD_MODE = Object.freeze({HOTCUE: 0, LOOP: 1, FREEZE: 2, SLICER: 3, REMIX: 4});
    var DISPLAY_VIEW = Object.freeze({SINGLE: 0, TWO: 1, FOUR: 2});
    var WAVEFORM_MODE = Object.freeze({EXPANDED: 0, SIMPLIFIED: 1, PHASE: 2, STACKED: 3});
    var INFORMATION_OVERLAY = Object.freeze({NONE: 0, BEATGRID: 1, PHRASING: 2, STEMS: 3, FX: 4});
    var STEMS_PAGE = Object.freeze({FILTER: 0, FX: 1});
    var ACTIVE_PANEL = Object.freeze({NONE: 0, BPM: 1, KEY: 2, SETTINGS: 3});
    var LOOP_PAD_SIZES = [0.125, 0.25, 0.5, 1];
    var SLICE_SIZES = [0.25, 0.5, 1, 2, 4];
    // Inherited pad BGR layout: M285 later checkpoint records
    // HOTCUE_NATIVE_HID_PHYSICAL_PASS. No new offsets are introduced in 289.
    var HOTCUE_EMPTY_RGB_285 = 0x080808;
    var HOTCUE_FALLBACK_RGB_285 = Object.freeze([
        0x00A8FF, 0xFF7A00, 0x00D47B, 0xD060FF,
        0xFF4050, 0xFFD000, 0x40D8FF, 0x70FF40
    ]);
    // ---------------------------------------------------------------------
    // Android parity 059J -> Windows 291 (authorized by the 2026-09-18 mission)
    //
    // The generated bundle 259/287 still describes EncTempoMixer as absolute
    // direction codes 247/248 over the whole byte. The Windows physical profile
    // of mission 295 shows what that produces in practice: every real turn is
    // reported as TEMPO_CODE_IGNORED, because the device sends a masked nibble.
    // Missions M10003/M10004 reconciled the same control from the raw captures:
    // MASKED_WRAP_COUNTER, mask 0x0F, modulus 16, unit steps, CW_INCREASES.
    // The generated bundle is never rewritten; a bounded runtime overlay
    // applies the reconciled description to the in-memory baseline, exactly as
    // the Android 059J canonical module does at load time.
    // ---------------------------------------------------------------------
    var TEMPO_OVERLAY_10004 = Object.freeze({
        controlId: "EncTempoMixer",
        reportId: 1,
        reportLength: 109,
        byteOffsetWithReportId: 3,
        encoding: "MASKED_WRAP_COUNTER",
        bitMask: 0x0F,
        bitMaskHex: "0x0F",
        shift: 0,
        modulus: 16,
        cwCode: 1,
        ccwCode: -1,
        direction: "CW_INCREASES",
        signedness: "UNSIGNED_OBSERVED",
        resolutionObserved: 1,
        movementPolicy: "UNIT_STEPS_RESYNC_ON_JUMP",
        reconciliationStatus: "M10004_DERIVED_FROM_M10003_RAW"
    });
    // Historical values of the superseded description, kept for traceability
    // only. They are never compared against a physical report again.
    var TEMPO_LEGACY_CODES_259_287 = Object.freeze([247, 248]);
    // The reconciled rotary keeps the mission 293 preference: with the default
    // two decimals one detent equals the Android-authorized 0.01 BPM.
    var MASTER_TEMPO_STEP_DEFAULT = 0.01;
    var MASTER_TEMPO_MIN = 1;
    var MASTER_TEMPO_MAX = 999;
    // Temporary popup arbitration inherited from the Android 059J interaction
    // adapter: SELECTION outranks WARNING, which outranks INFORMATION.
    var POPUP_KIND = Object.freeze({NONE: 0, INFORMATION: 1, WARNING: 2, SELECTION: 3});
    var POPUP_PHASE = Object.freeze({
        CLOSED: 0, OPEN: 1, SELECTING: 2, CONFIRM: 3, CLOSE: 4, RESTORE_FOCUS: 5
    });
    var POPUP_TITLE = Object.freeze({
        NONE: 0, BPM: 1, SORT_BY: 2, LOOP_SIZE: 3, DECK_LOCKED: 4, LOADING: 5
    });
    var POPUP_PRIORITY = Object.freeze({INFORMATION: 1, WARNING: 2, SELECTION: 3});
    var TEMPORARY_POPUP_MS = 1200;
    // LOOP ENCODER capture: each animation step is an explicit 0x81 report,
    // spaced about 0.19-0.23 s apart. The firmware does not animate by itself.
    var LOOP_RING_ANIMATION_MS = 200;
    // Mission M10003/M10004 physical discovery, inherited from the Android work:
    // the four CUE/PFL LEDs travel in virtual feature report 0xF4 with payload
    // byte 0 = 0x26 and channel masks A=1/B=2/C=4/D=8. The write path is the
    // same already-proven 0xF4 feature transport used by the M285 Mixer Filter
    // feedback. Physical activation stays gated off until an operator enables
    // it explicitly, exactly like the Android feedback module.
    var PFL_LED_PAYLOAD_ID = 0x26;
    var PFL_LED_MASKS = Object.freeze({A: 0x01, B: 0x02, C: 0x04, D: 0x08});
    var LOG_PREFIX = "[S8_WINDOWS_V1_0] ";

    // Captured physical S8 IF5 frames. Each payload excludes its HID report ID.
    // They seed the live per-report buffers below; they are never reconstructed
    // by a state callback, because that could erase a previously updated LED.
    var LED_BASE_REPORTS_285 = Object.freeze([
        Object.freeze({
            id: 0x80,
            hex: "1b1f0b00000000000000000000000000000000000000000014141414140014147f7f7f7f7f00001400000000007f00140014000014007f141400147f000000007f7f7f7f000000000000000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000"
        }),
        Object.freeze({
            id: 0x81,
            hex: "10040010040010040010040010040010040010040010040014141414147f00007f0000007f14141414141414001400140014001414007f140014141400000000141414140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        }),
        Object.freeze({
            id: 0x82,
            hex: "00000000000000000000007f7f000000000000000000000000000000000000000000000000000000000000007f1414147f7f1414147f0000000000000000000000000000000000007f"
        })
    ]);

    // HID OUT fields physically isolated by the M285 directed V4 sweep. Physical
    // indexes include the report ID, so payloadIndex is always rawIndex - 1.
    // Existing approved PLAY/CUE/FLUX fields retain their historical 0x7F/0x00
    // convention. Every new field uses only the observed 0x7F active and 0x14
    // inactive/dim values; 0x00 is intentionally not generalized to them.
    function ledField285(reportId, payloadIndexes, on, off, bindingStatus) {
        return Object.freeze({
            reportId: reportId,
            payloadIndexes: Object.freeze(payloadIndexes),
            on: on,
            off: off,
            bindingStatus: bindingStatus
        });
    }

    var LED_FIELDS_285 = Object.freeze({
        FLUX_LEFT: ledField285(0x80, [52], 0x7F, 0x00, "MIXXX_BOUND"),
        CUE_LEFT: ledField285(0x80, [58], 0x7F, 0x00, "MIXXX_BOUND"),
        PLAY_LEFT: ledField285(0x80, [59], 0x7F, 0x00, "MIXXX_BOUND_PLAY_INDICATOR"),
        FLUX_RIGHT: ledField285(0x81, [52], 0x7F, 0x00, "MIXXX_BOUND"),
        CUE_RIGHT: ledField285(0x81, [58], 0x7F, 0x00, "MIXXX_BOUND"),
        PLAY_RIGHT: ledField285(0x81, [59], 0x7F, 0x00, "MIXXX_BOUND_PLAY_INDICATOR"),
        SYNC_LEFT: ledField285(0x80, [57], 0x7F, 0x14, "MIXXX_BOUND_SYNC_ENABLED"),
        SYNC_RIGHT: ledField285(0x81, [57], 0x7F, 0x14, "MIXXX_BOUND_SYNC_ENABLED"),
        LOOP_RING_LEFT: ledField285(0x80, [64, 65, 66, 67], 0x7F, 0x14, "MIXXX_BOUND_LOOP_ENABLED_ATOMIC"),
        LOOP_RING_RIGHT: ledField285(0x81, [64, 65, 66, 67], 0x7F, 0x14, "MIXXX_BOUND_LOOP_ENABLED_ATOMIC"),
        LOOP_RING_WHITE_LEFT: ledField285(0x80, [60, 61, 62, 63], 0x7F, 0x00, "CAPTURE_CONFIRMED_DECK_C_WHITE_RING"),
        LOOP_RING_WHITE_RIGHT: ledField285(0x81, [60, 61, 62, 63], 0x7F, 0x00, "CAPTURE_CONFIRMED_DECK_D_WHITE_RING"),
        LOOP_BUTTON_LEFT: ledField285(0x80, [47], 0x7F, 0x14, "MIXXX_BOUND_LOOP_ENABLED"),
        LOOP_BUTTON_RIGHT: ledField285(0x81, [47], 0x7F, 0x14, "MIXXX_BOUND_LOOP_ENABLED"),
        FREEZE_LEFT: ledField285(0x80, [49], 0x7F, 0x14, "HID_FIELD_IMPLEMENTED_LOGICAL_BINDING_PENDING"),
        FREEZE_RIGHT: ledField285(0x81, [49], 0x7F, 0x14, "HID_FIELD_IMPLEMENTED_LOGICAL_BINDING_PENDING"),
        REMIX_LEFT: ledField285(0x80, [51], 0x7F, 0x14, "HID_FIELD_IMPLEMENTED_LOGICAL_BINDING_PENDING"),
        REMIX_RIGHT: ledField285(0x81, [51], 0x7F, 0x14, "HID_FIELD_IMPLEMENTED_LOGICAL_BINDING_PENDING"),
        FX_SELECT_LEFT: ledField285(0x80, [24], 0x7F, 0x14, "MIXXX_BOUND_INTERNAL_FX_SELECT_VISIBLE"),
        FX_SELECT_RIGHT: ledField285(0x81, [24], 0x7F, 0x14, "MIXXX_BOUND_INTERNAL_FX_SELECT_VISIBLE"),
        BACK_LEFT: ledField285(0x80, [37], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        CAPTURE_LEFT: ledField285(0x80, [38], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        EDIT_LEFT: ledField285(0x80, [39], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        BACK_RIGHT: ledField285(0x81, [37], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        CAPTURE_RIGHT: ledField285(0x81, [38], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        EDIT_RIGHT: ledField285(0x81, [39], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        SLOT_FILTER1_LEFT: ledField285(0x80, [40], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        SLOT_FILTER2_LEFT: ledField285(0x80, [41], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        SLOT_FILTER3_LEFT: ledField285(0x80, [42], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        SLOT_FILTER4_LEFT: ledField285(0x80, [43], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        HOTCUE_BUTTON_LEFT: ledField285(0x80, [45], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        SHIFT_LEFT: ledField285(0x80, [55], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        SLOT_FILTER1_RIGHT: ledField285(0x81, [40], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        SLOT_FILTER2_RIGHT: ledField285(0x81, [41], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        SLOT_FILTER3_RIGHT: ledField285(0x81, [42], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        SLOT_FILTER4_RIGHT: ledField285(0x81, [43], 0x7F, 0x14, "MIXXX_BOUND_CURRENT_STRIP_SAMPLER_MUTE"),
        HOTCUE_BUTTON_RIGHT: ledField285(0x81, [45], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        HOTCUE_WHITE_LEFT: ledField285(0x80, [44], 0x7F, 0x14, "CAPTURE_CONFIRMED_DECK_C_WHITE"),
        LOOP_BUTTON_WHITE_LEFT: ledField285(0x80, [46], 0x7F, 0x14, "CAPTURE_CONFIRMED_DECK_C_WHITE"),
        FREEZE_WHITE_LEFT: ledField285(0x80, [48], 0x7F, 0x14, "CAPTURE_CONFIRMED_DECK_C_WHITE"),
        DECK_WHITE_LEFT: ledField285(0x80, [53], 0x7F, 0x00, "CAPTURE_CONFIRMED_DECK_C_WHITE"),
        DECK_BLUE_LEFT: ledField285(0x80, [54], 0x7F, 0x00, "CAPTURE_CONFIRMED_DECK_A_BLUE"),
        HOTCUE_WHITE_RIGHT: ledField285(0x81, [44], 0x7F, 0x14, "CAPTURE_CONFIRMED_DECK_D_WHITE"),
        LOOP_BUTTON_WHITE_RIGHT: ledField285(0x81, [46], 0x7F, 0x14, "CAPTURE_CONFIRMED_DECK_D_WHITE"),
        FREEZE_WHITE_RIGHT: ledField285(0x81, [48], 0x7F, 0x14, "CAPTURE_CONFIRMED_DECK_D_WHITE"),
        DECK_WHITE_RIGHT: ledField285(0x81, [53], 0x7F, 0x00, "CAPTURE_CONFIRMED_DECK_D_WHITE"),
        DECK_BLUE_RIGHT: ledField285(0x81, [54], 0x7F, 0x00, "CAPTURE_CONFIRMED_DECK_B_BLUE"),
        SHIFT_RIGHT: ledField285(0x81, [55], 0x7F, 0x14, "INPUT_PRESS_RELEASE_MOMENTARY"),
        FX_ASSIGN1_C: ledField285(0x82, [44], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_ASSIGN2_C: ledField285(0x82, [45], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_ASSIGN1_A: ledField285(0x82, [46], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_ASSIGN2_A: ledField285(0x82, [47], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_ASSIGN1_B: ledField285(0x82, [50], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_ASSIGN2_B: ledField285(0x82, [51], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_ASSIGN1_D: ledField285(0x82, [52], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_ASSIGN2_D: ledField285(0x82, [53], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ASSIGNMENT"),
        FX_UNIT1_ON: ledField285(0x80, [25], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        FX_UNIT1_BTN1: ledField285(0x80, [26], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        FX_UNIT1_BTN2: ledField285(0x80, [27], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        FX_UNIT1_BTN3: ledField285(0x80, [28], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        FX_UNIT2_ON: ledField285(0x81, [25], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        FX_UNIT2_BTN1: ledField285(0x81, [26], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        FX_UNIT2_BTN2: ledField285(0x81, [27], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        FX_UNIT2_BTN3: ledField285(0x81, [28], 0x7F, 0x14, "MIXXX_BOUND_EFFECT_ENABLED"),
        SNAP: ledField285(0x82, [48], 0x7F, 0x14, "HID_FIELD_IMPLEMENTED_LOGICAL_BINDING_PENDING"),
        QUANTIZE: ledField285(0x82, [49], 0x7F, 0x14, "HID_FIELD_IMPLEMENTED_LOGICAL_BINDING_PENDING")
    });

    var active = false;
    var decoder = null;
    var controls = Object.create(null);
    var state = null;
    var held = Object.create(null);
    var softTakeoverTargets = Object.create(null);
    var browserStateConnection = null;
    var ledStateConnections285 = [];
    var ledLiveReports285 = Object.create(null);
    var pflLedConnections10004 = [];
    var bridgeGeneration = 0;

    function closedPopupState() {
        return {
            kind: POPUP_KIND.NONE,
            phase: POPUP_PHASE.CLOSED,
            title: POPUP_TITLE.NONE,
            value: 0,
            hasValue: false,
            priority: 0,
            deck: 0,
            master: false,
            timerId: 0,
            previousFocus: null,
            pendingIndex: 0,
            pendingDescending: false,
            pendingCriteria: 0
        };
    }

    function freshState() {
        return {
            reports: 0,
            acceptedReports: 0,
            events: 0,
            leftDeck: 1,
            rightDeck: 2,
            focusRevision: {LEFT: 0, RIGHT: 0},
            lastSide: "LEFT",
            shifted: {LEFT: false, RIGHT: false},
            padMode: {LEFT: "HOTCUE", RIGHT: "HOTCUE"},
            padPalette: 0,
            // Program Browser is one global Mixxx state. browserVisible remains
            // per surface because only the side that opened it renders BROWSER.
            programBrowserExpanded: false,
            browserVisible: {LEFT: false, RIGHT: false},
            desktopLibrary: {
                owned: false,
                previousMaximized: 0,
                previousFocusedWidget: 0
            },
            browseDown: {LEFT: null, RIGHT: null},
            backDown: {LEFT: null, RIGHT: null},
            browsePrewarm: {LEFT: null, RIGHT: null},
            preview: {active: false, side: null},
            browserSortIndex: {LEFT: 0, RIGHT: 0},
            browserSortDescending: {LEFT: false, RIGHT: false},
            browserSortPopupTimer: {LEFT: 0, RIGHT: 0},
            browserSortPopupVisible: {LEFT: false, RIGHT: false},
            // Android parity: one arbitrated popup per physical side.
            popup: {LEFT: closedPopupState(), RIGHT: closedPopupState()},
            pflLed: {
                // Gate closed by default, exactly like S8PresetMapDecoder.setPflFeedbackEnabled.
                enabled: false,
                lastMask: null,
                error: null
            },
            loadStatus: {LEFT: 0, RIGHT: 0},
            loadRejectReason: {LEFT: 0, RIGHT: 0},
            loadVerification: {LEFT: null, RIGHT: null},
            loadRejectTimer: {LEFT: 0, RIGHT: 0},
            fxSelectVisible: {LEFT: false, RIGHT: false},
            fxSelectSlot: {LEFT: 1, RIGHT: 1},
            beatgridEdit: {LEFT: false, RIGHT: false},
            sliceSizeIndex: {LEFT: 2, RIGHT: 2},
            slices: {LEFT: null, RIGHT: null},
            samplerBank: {LEFT: 0, RIGHT: 0},
            samplerColumns: {LEFT: [1, 2, 3, 4], RIGHT: [1, 2, 3, 4]},
            display: {
                LEFT: {viewMode: DISPLAY_VIEW.SINGLE, waveformMode: WAVEFORM_MODE.EXPANDED,
                    informationOverlay: INFORMATION_OVERLAY.NONE, stemsPage: STEMS_PAGE.FILTER,
                    activePanel: ACTIVE_PANEL.NONE, settingsOpen: false, settingsPage: 0, waveformZoom: 7,
                    mixerFxProduct: 0, revision: 0},
                RIGHT: {viewMode: DISPLAY_VIEW.SINGLE, waveformMode: WAVEFORM_MODE.EXPANDED,
                    informationOverlay: INFORMATION_OVERLAY.NONE, stemsPage: STEMS_PAGE.FILTER,
                    activePanel: ACTIVE_PANEL.NONE, settingsOpen: false, settingsPage: 0, waveformZoom: 7,
                    mixerFxProduct: 0, revision: 0}
            },
            lastLogicalDisplayEvent: null,
            touch: Object.create(null),
            fxTouchMask: {LEFT: 0, RIGHT: 0},
            screenTouchMask: {LEFT: 0, RIGHT: 0},
            faderTouchMask: {LEFT: 0, RIGHT: 0},
            loopTouched: {LEFT: false, RIGHT: false},
            loopRingTimer: {LEFT: 0, RIGHT: 0},
            loopRingSegment: {LEFT: 0, RIGHT: 0},
            endKnobRaw: Object.create(null),
            endKnobDelta: Object.create(null),
            touchstripGesture: {LEFT: null, RIGHT: null},
            phaseSegment: {LEFT: null, RIGHT: null},
            touchstripRawTrace: {
                activeSide: null,
                remaining: 0,
                previousByFamily: Object.create(null),
                lastDelta: null,
                deltaCount: 0
            },
            mixerFilterF4: {
                A: false,
                B: false,
                C: false,
                D: false,
                lastMask: null
            },
            // M285 operational input addendum. These physically resolved bits
            // are intentionally not a baseline-255 amendment and must never
            // share F4's logical-feedback state or its deduplication memory.
            mixerFilterPhysicalInput285: {
                initialized: false,
                A: false,
                B: false,
                C: false,
                D: false
            },
            tempoObserved: null,
            masterTempoPopup: false,
            masterTempoDraft: null,
            lastAction: null
        };
    }

    function log(event, payload) {
        var body = payload || {};
        body.event = event;
        try {
            console.info(LOG_PREFIX + JSON.stringify(body));
        } catch (error) {
            console.info(LOG_PREFIX + event);
        }
        if (state) {
            state.lastAction = body;
        }
    }

    function finite(value) {
        return typeof value === "number" && isFinite(value);
    }

    function clamp(value, low, high) {
        return Math.max(low, Math.min(high, value));
    }

    function sideOf(controlId) {
        var displayMatch = /^DISPLAY_(LEFT|RIGHT)_BTN_[0-9]{2}$/.exec(controlId);
        if (displayMatch) {
            return displayMatch[1];
        }
        if (/Left$/.test(controlId) || /_LEFT$/.test(controlId)) {
            return "LEFT";
        }
        if (/Right$/.test(controlId) || /_RIGHT$/.test(controlId)) {
            return "RIGHT";
        }
        return null;
    }

    function deckForSide(side) {
        return side === "LEFT" ? state.leftDeck : state.rightDeck;
    }

    function groupForSide(side) {
        return "[Channel" + deckForSide(side) + "]";
    }

    function hexToByteArray(hex) {
        var bytes = [];
        for (var index = 0; index < hex.length; index += 2) {
            bytes.push(parseInt(hex.slice(index, index + 2), 16));
        }
        return bytes;
    }

    function initializeLedLiveReports285() {
        ledLiveReports285 = Object.create(null);
        LED_BASE_REPORTS_285.forEach(function(report) {
            ledLiveReports285[report.id] = hexToByteArray(report.hex);
        });
        Object.keys(LED_FIELDS_285).forEach(function(name) {
            setLedField285(name, false);
        });
    }

    function sendLedReport285(reportId, payload, reason) {
        try {
            controller.send(payload, payload.length, reportId);
            log("LED_OUTPUT_SENT", {
                reportId: "0x" + reportId.toString(16).toUpperCase(),
                payloadLength: payload.length,
                endpoint: "IF5/0x03",
                reason: reason
            });
        } catch (error) {
            log("LED_OUTPUT_FAILED", {
                reportId: "0x" + reportId.toString(16).toUpperCase(),
                payloadLength: payload.length,
                reason: reason,
                error: String(error)
            });
        }
    }

    function setLedField285(name, enabled) {
        var field = LED_FIELDS_285[name];
        var payload = field && ledLiveReports285[field.reportId];
        if (!payload) {
            return false;
        }
        // LOOP_RING_* carries four captured bytes as one field. This loop updates
        // all four before its caller may send the report.
        field.payloadIndexes.forEach(function(payloadIndex) {
            payload[payloadIndex] = enabled ? field.on : field.off;
        });
        return true;
    }

    function sendLiveLedReport285(reportId, reason) {
        var payload = ledLiveReports285[reportId];
        if (payload) {
            sendLedReport285(reportId, payload, reason);
        }
    }

    function updateLedField285(name, enabled, reason) {
        var field = LED_FIELDS_285[name];
        if (field && setLedField285(name, enabled)) {
            sendLiveLedReport285(field.reportId, reason);
        }
    }

    function momentaryLedField285(controlId, side) {
        var suffix = side === "LEFT" ? "_LEFT" : "_RIGHT";
        if (/^BtnBackButton/.test(controlId)) {
            return "BACK" + suffix;
        }
        if (/^BtnCaptureButton/.test(controlId)) {
            return "CAPTURE" + suffix;
        }
        if (/^BtnEditButton/.test(controlId)) {
            return "EDIT" + suffix;
        }
        if (/^BtnShiftButton/.test(controlId)) {
            return "SHIFT" + suffix;
        }
        return null;
    }

    function updateMomentaryLed285(controlId, side, pressed) {
        var field = side && momentaryLedField285(controlId, side);
        if (field === "BACK_LEFT" || field === "BACK_RIGHT") {
            return;
        }
        if (field) {
            updateLedField285(field, pressed, "INPUT_" + controlId.toUpperCase() +
                (pressed ? "_PRESS" : "_RELEASE"));
        }
    }

    function updateFxSelectLed285(side, reason) {
        if (active && state) {
            updateLedField285("FX_SELECT_" + side, !!state.fxSelectVisible[side], reason);
        }
    }

    function hotcueRawBase285(pad) {
        if (!finite(pad) || Math.floor(pad) !== pad || pad < 1 || pad > 8) {
            return null;
        }
        return 1 + ((pad - 1) * 3);
    }

    function rgbToBgr285(rgb) {
        var normalized = Math.floor(rgb) & 0xFFFFFF;
        return [normalized & 0xFF, (normalized >> 8) & 0xFF, (normalized >> 16) & 0xFF];
    }

    function hotcueRgb285(group, pad) {
        if (safeGet(group, "hotcue_" + pad + "_status", 0) <= 0) {
            return HOTCUE_EMPTY_RGB_285;
        }
        var color = safeGet(group, "hotcue_" + pad + "_color", 0);
        if (finite(color) && color > 0 && color <= 0xFFFFFF) {
            return Math.floor(color);
        }
        return safeGet(group, "hotcue_" + pad + "_type") === 4 ? 0x00D47B : 0x00A8FF;
    }

    function performancePadRgb(side, pad) {
        var mode = state.padMode[side];
        if (mode === "HOTCUE") {
            // Track-assigned hotcue colors remain authoritative in every palette.
            return hotcueRgb285(groupForSide(side), pad);
        }
        var palette = state.padPalette;
        var primary = [0x00D47B, 0xFF7A00, 0x00A8FF, 0xFFD000][palette];
        var secondary = [0xFF7A00, 0xFF4050, 0x40D8FF, 0xD060FF][palette];
        var idle = [0x002B40, 0x402010, 0x002B40, 0x202020][palette];
        if (mode === "LOOP") {
            return pad <= 4 ? primary : secondary;
        }
        if (mode === "FREEZE" || mode === "SLICER") {
            return state.slices[side] ? (mode === "SLICER" ? primary : secondary) : 0;
        }
        var sampler = samplerForPad(side, pad);
        var group = "[Sampler" + sampler + "]";
        if (sampler > safeGet("[App]", "num_samplers") || safeGet(group, "track_loaded") <= 0) {
            return 0;
        }
        return safeGet(group, "play") > 0 ? primary : idle;
    }

    function setHotcuePad285(side, pad) {
        var rawBase = hotcueRawBase285(pad);
        var reportId = side === "LEFT" ? 0x80 : 0x81;
        var payload = ledLiveReports285[reportId];
        if (rawBase === null || !payload) {
            return false;
        }
        // raw[0] is the report ID. A candidate pad occupies raw B,G,R and
        // therefore payload indexes raw-1. Never reconstruct this shared frame.
        var bgr = rgbToBgr285(performancePadRgb(side, pad));
        var payloadBase = rawBase - 1;
        payload[payloadBase] = bgr[0];
        payload[payloadBase + 1] = bgr[1];
        payload[payloadBase + 2] = bgr[2];
        return true;
    }

    function refreshAllHotcuePads285(side) {
        for (var pad = 1; pad <= 8; pad += 1) {
            setHotcuePad285(side, pad);
        }
    }

    function refreshHotcuePad285(side, pad, reason) {
        if (setHotcuePad285(side, pad)) {
            sendLiveLedReport285(side === "LEFT" ? 0x80 : 0x81,
                reason || "HOTCUE_PAD_" + pad);
        }
    }

    function mixerFilterMask285() {
        var filterState = state && state.mixerFilterF4;
        if (!filterState) {
            return 0;
        }
        // MULTI_CHANNEL_BITWISE_COMPOSITION_IMPLEMENTED_AS_CANDIDATE:
        // only the individual A/B/C/D bits 01/02/04/08 are physically proven.
        return (filterState.A ? 0x01 : 0x00) |
            (filterState.B ? 0x02 : 0x00) |
            (filterState.C ? 0x04 : 0x00) |
            (filterState.D ? 0x08 : 0x00);
    }

    function buildMixerFilterFeaturePayload285(mask) {
        var payload = new Uint8Array(32);
        payload[0] = 0x25;
        payload[1] = finite(mask) ? (Math.floor(mask) & 0x0F) : mixerFilterMask285();
        return payload;
    }

    function sendMixerFilterFeature285(reason) {
        if (!active || !state || !state.mixerFilterF4) {
            return false;
        }
        var mask = mixerFilterMask285();
        if (state.mixerFilterF4.lastMask === mask) {
            return false;
        }
        var payload = buildMixerFilterFeaturePayload285(mask);
        try {
            controller.sendFeatureReport(0xF4, payload.buffer);
            state.mixerFilterF4.lastMask = mask;
            log("MIXER_FILTER_F4_SENT", {
                reportId: "0xF4",
                payloadLength: payload.length,
                stateMask: mask,
                mode: "FILTER_ONLY",
                composition: "MULTI_CHANNEL_BITWISE_COMPOSITION_IMPLEMENTED_AS_CANDIDATE",
                reason: reason
            });
            return true;
        } catch (error) {
            log("MIXER_FILTER_F4_FAILED", {
                reportId: "0xF4",
                payloadLength: payload.length,
                stateMask: mask,
                reason: reason,
                error: String(error)
            });
            return false;
        }
    }

    function connectMixerFilterFeature285(letter) {
        var channel = channelFromLetter(letter);
        var group = "[QuickEffectRack1_[Channel" + channel + "]]";
        try {
            ledStateConnections285.push(engine.makeConnection(group, "enabled", function(value) {
                if (!active || !state || !state.mixerFilterF4) {
                    return;
                }
                state.mixerFilterF4[letter] = finite(value) ? value > 0 :
                    safeGet(group, "enabled", 0) > 0;
                sendMixerFilterFeature285("CONTROL_" + letter + "_ENABLED");
            }));
        } catch (error) {
            log("MIXER_FILTER_F4_CONNECTION_FAILED", {
                channel: letter,
                group: group,
                error: String(error)
            });
        }
    }

    function initializeMixerFilterFeature285() {
        ["A", "B", "C", "D"].forEach(function(letter) {
            var channel = channelFromLetter(letter);
            var group = "[QuickEffectRack1_[Channel" + channel + "]]";
            state.mixerFilterF4[letter] = safeGet(group, "enabled", 0) > 0;
            connectMixerFilterFeature285(letter);
        });
        sendMixerFilterFeature285("INIT_SNAPSHOT_ABCD");
    }

    function disconnectLedState285() {
        ledStateConnections285.forEach(function(connection) {
            try {
                connection.disconnect();
            } catch (error) {
                log("LED_CONNECTION_DISCONNECT_FAILED", {error: String(error)});
            }
        });
        ledStateConnections285 = [];
        disconnectPflLed10004("LED_STATE_DISCONNECT");
    }

    /*
     * Android parity, inherited from M10003/M10004: the four CUE/PFL LEDs are
     * driven by virtual feature report 0xF4 with payload byte 0 = 0x26 and the
     * channel mask A=1 / B=2 / C=4 / D=8. The transport is the same 0xF4 feature
     * path that mission 285 already proved on Windows for the Mixer Filter.
     * The gate starts closed and every reconnection revokes it, so no write can
     * happen on hardware without an explicit operator call.
     */
    function disconnectPflLed10004(reason) {
        pflLedConnections10004.forEach(function(connection) {
            try {
                connection.disconnect();
            } catch (error) {
                log("PFL_LED_DISCONNECT_FAILED", {error: String(error)});
            }
        });
        pflLedConnections10004 = [];
        if (state && state.pflLed) {
            state.pflLed.enabled = false;
            state.pflLed.lastMask = null;
            state.pflLed.error = null;
        }
        log("PFL_LED_GATE_CLOSED", {reason: reason});
    }

    function pflLedMask10004() {
        var mask = 0;
        var unavailable = false;
        ["A", "B", "C", "D"].forEach(function(letter) {
            var deck = channelFromLetter(letter);
            if (deck > availableDeckCount()) {
                return;
            }
            var value = safeGet("[Channel" + deck + "]", "pfl", null);
            if (!finite(value)) {
                unavailable = true;
                return;
            }
            if (value > 0) {
                mask |= PFL_LED_MASKS[letter];
            }
        });
        return unavailable ? null : mask;
    }

    function buildPflLedPayload10004(mask) {
        if (!finite(mask) || Math.floor(mask) !== mask || mask < 0 || mask > 0x0F) {
            throw new Error("Invalid PFL mask");
        }
        var payload = new Uint8Array(32);
        payload[0] = PFL_LED_PAYLOAD_ID;
        payload[1] = mask & 0x0F;
        return payload;
    }

    function refreshPflLed10004(force) {
        if (!active || !state || !state.pflLed || !state.pflLed.enabled) {
            return false;
        }
        var mask = pflLedMask10004();
        if (mask === null) {
            state.pflLed.error = "PFL_STATE_UNAVAILABLE";
            return false;
        }
        if (!force && state.pflLed.lastMask === mask) {
            return false;
        }
        var confirmed = false;
        try {
            confirmed = typeof controller.sendFeatureReport === "function" &&
                controller.sendFeatureReport(0xF4, buildPflLedPayload10004(mask).buffer);
        } catch (error) {
            state.pflLed.error = String(error);
            log("PFL_LED_WRITE_FAILED", {mask: mask, error: String(error)});
            return false;
        }
        if (!confirmed) {
            state.pflLed.error = "FEATURE_WRITE_NOT_CONFIRMED";
            log("PFL_LED_WRITE_UNCONFIRMED", {mask: mask});
            return false;
        }
        state.pflLed.lastMask = mask;
        state.pflLed.error = null;
        log("PFL_LED_SENT", {reportId: "0xF4", payloadId: "0x26", mask: mask,
            composition: "CHANNEL_BITS_A1_B2_C4_D8"});
        return true;
    }

    function setPflLedFeedbackEnabled(enabled) {
        if (!state || !state.pflLed) {
            return false;
        }
        state.pflLed.enabled = enabled === true;
        state.pflLed.lastMask = null;
        state.pflLed.error = null;
        log("PFL_LED_GATE", {enabled: state.pflLed.enabled});
        return state.pflLed.enabled ? refreshPflLed10004(true) : false;
    }

    function connectPflLed10004() {
        disconnectPflLed10004("RECONNECT");
        ["A", "B", "C", "D"].forEach(function(letter) {
            var deck = channelFromLetter(letter);
            if (deck > availableDeckCount()) {
                return;
            }
            var group = "[Channel" + deck + "]";
            try {
                pflLedConnections10004.push(engine.makeConnection(group, "pfl", function() {
                    if (active) {
                        refreshPflLed10004(false);
                    }
                }));
            } catch (error) {
                log("PFL_LED_CONNECTION_FAILED", {group: group, error: String(error)});
            }
        });
    }

    function sideLedField285(side, control) {
        var prefix = side === "LEFT" ? "_LEFT" : "_RIGHT";
        if (control === "play_indicator") {
            return "PLAY" + prefix;
        }
        if (control === "cue_default") {
            return "CUE" + prefix;
        }
        if (control === "slip_enabled") {
            return "FLUX" + prefix;
        }
        return "SYNC" + prefix;
    }

    function setPayloadIndexes285(reportId, indexes, value) {
        var payload = ledLiveReports285[reportId];
        if (!payload) { return false; }
        indexes.forEach(function(index) { payload[index] = value; });
        return true;
    }

    function refreshModeIdentity285(side) {
        var mode = state.padMode[side];
        var hotcue = mode === "HOTCUE";
        var loop = mode === "LOOP";
        var freeze = mode === "FREEZE" || mode === "SLICER";
        var remix = mode === "REMIX";
        var reportId = side === "LEFT" ? 0x80 : 0x81;
        var secondary = side === "LEFT" ? deckForSide(side) === 3 : deckForSide(side) === 4;
        if (!secondary) {
            setLedField285("HOTCUE_BUTTON_" + side, hotcue);
            setLedField285("LOOP_BUTTON_" + side, loop);
            setLedField285("FREEZE_" + side, freeze);
            setLedField285("REMIX_" + side, remix);
            setPayloadIndexes285(reportId, [44, 46, 48, 53, 60, 61, 62, 63], 0x00);
            setLedField285("DECK_BLUE_" + side, true);
            return;
        }

        // The directed LEFT and RIGHT captures individually prove the white
        // companions for HOTCUE, LOOP and FREEZE, plus each DECK pair. Offset
        // 50 (REMIX white) never changed on either side and remains untouched.
        setPayloadIndexes285(reportId, [45, 47, 49, 51, 54, 64, 65, 66, 67], 0x00);
        setLedField285("HOTCUE_WHITE_" + side, hotcue);
        setLedField285("LOOP_BUTTON_WHITE_" + side, loop);
        setLedField285("FREEZE_WHITE_" + side, freeze);
        setLedField285("DECK_WHITE_" + side, true);
    }

    function stopLoopRingAnimation285(side) {
        if (state.loopRingTimer[side]) {
            stopTimer(state.loopRingTimer[side]);
            state.loopRingTimer[side] = 0;
        }
    }

    function applyLoopRingFrame285(side, segment) {
        var reportId = side === "LEFT" ? 0x80 : 0x81;
        var white = side === "LEFT" ? deckForSide(side) === 3 : deckForSide(side) === 4;
        var active = safeGet(groupForSide(side), "loop_enabled", 0) > 0;
        var selected = white ? [60, 61, 62, 63] : [64, 65, 66, 67];
        setPayloadIndexes285(reportId, [60, 61, 62, 63, 64, 65, 66, 67], 0x00);
        if (active) {
            setPayloadIndexes285(reportId, [selected[segment % selected.length]], 0x7F);
        } else {
            setPayloadIndexes285(reportId, selected, 0x7F);
        }
    }

    function startLoopRingAnimation285(side) {
        var reportId = side === "LEFT" ? 0x80 : 0x81;
        stopLoopRingAnimation285(side);
        state.loopRingSegment[side] = 0;
        applyLoopRingFrame285(side, 0);
        state.loopRingTimer[side] = beginRepeating(LOOP_RING_ANIMATION_MS, function() {
            if (!active || !state || safeGet(groupForSide(side), "loop_enabled", 0) <= 0) {
                stopLoopRingAnimation285(side);
                if (active && state) {
                    applyLoopRingFrame285(side, 0);
                    sendLiveLedReport285(reportId, "LOOP_RING_STATIC_" + side);
                }
                return;
            }
            state.loopRingSegment[side] = (state.loopRingSegment[side] + 1) % 4;
            applyLoopRingFrame285(side, state.loopRingSegment[side]);
            sendLiveLedReport285(reportId, "LOOP_RING_ANIMATION_" + side);
        });
    }

    function refreshLoopRing285(side, reason) {
        var reportId = side === "LEFT" ? 0x80 : 0x81;
        var enabled = safeGet(groupForSide(side), "loop_enabled", 0) > 0;
        if (enabled) {
            if (!state.loopRingTimer[side]) {
                startLoopRingAnimation285(side);
            } else {
                applyLoopRingFrame285(side, state.loopRingSegment[side]);
            }
        } else {
            stopLoopRingAnimation285(side);
            applyLoopRingFrame285(side, 0);
        }
        sendLiveLedReport285(reportId, reason || "LOOP_RING_REFRESH_" + side);
    }

    function refreshSideLedFields285(side) {
        var group = groupForSide(side);
        ["play_indicator", "cue_default", "slip_enabled"].forEach(function(control) {
            setLedField285(sideLedField285(side, control), safeGet(group, control, 0) > 0);
        });
        setLedField285(sideLedField285(side, "sync_enabled"), syncIndicatorForSide(side));
        refreshModeIdentity285(side);
        applyLoopRingFrame285(side, state.loopRingSegment[side]);
        setLedField285("FX_SELECT_" + side, !!state.fxSelectVisible[side]);
        setLedField285("BACK_" + side, !!state.browserVisible[side]);
    }

    function refreshSlotFilterLedFields285(side) {
        for (var strip = 1; strip <= 4; strip += 1) {
            setLedField285("SLOT_FILTER" + strip + "_" + side,
                safeGet("[Sampler" + samplerForStrip(side, strip) + "]", "mute", 0) > 0);
        }
    }

    function syncIndicatorForSide(side) {
        var deck = deckForSide(side);
        var group = "[Channel" + deck + "]";
        if (safeGet(group, "sync_leader", 0) <= 0) {
            return safeGet(group, "sync_enabled", 0) > 0;
        }
        for (var follower = 1; follower <= availableDeckCount(); follower += 1) {
            if (follower !== deck && safeGet("[Channel" + follower + "]", "sync_enabled", 0) > 0) {
                return true;
            }
        }
        return false;
    }

    function refreshSyncIndicators285(reason) {
        ["LEFT", "RIGHT"].forEach(function(side) {
            updateLedField285(sideLedField285(side, "sync_enabled"),
                syncIndicatorForSide(side), reason);
        });
    }

    function refreshFxUnitLedFields285(side) {
        var unit = effectUnitGroup(side);
        var prefix = side === "LEFT" ? "FX_UNIT1_" : "FX_UNIT2_";
        setLedField285(prefix + "ON", safeGet(unit, "enabled", 0) > 0);
        [1, 2, 3].forEach(function(slot) {
            setLedField285(prefix + "BTN" + slot, safeGet(effectSlotGroup(side, slot), "enabled", 0) > 0);
        });
    }

    function refreshFxAssignLedFields285() {
        [["FX_ASSIGN1_C", 1, 3], ["FX_ASSIGN2_C", 2, 3],
            ["FX_ASSIGN1_A", 1, 1], ["FX_ASSIGN2_A", 2, 1],
            ["FX_ASSIGN1_B", 1, 2], ["FX_ASSIGN2_B", 2, 2],
            ["FX_ASSIGN1_D", 1, 4], ["FX_ASSIGN2_D", 2, 4]].forEach(function(item) {
            setLedField285(item[0], safeGet("[EffectRack1_EffectUnit" + item[1] + "]",
                "group_[Channel" + item[2] + "]_enable", 0) > 0);
        });
    }

    // Offsets 68..92 are physical left-to-right blue positions on both strips.
    // WINDOWS 3 follows the Android phase contract: phase drift is rendered
    // as a continuous bar from the center (80) to the measured segment.
    function phaseReferenceGroup285(deck) {
        // Phase drift is musical timing, not merely a Sync-mode indicator.
        // InternalClock is a valid master reference even with Sync disabled.
        if (finite(safeGet("[InternalClock]", "beat_distance", NaN))) {
            return "[InternalClock]";
        }
        for (var candidate = 1; candidate <= availableDeckCount(); candidate += 1) {
            if (candidate !== deck && safeGet("[Channel" + candidate + "]", "sync_leader", 0) > 0) {
                return "[Channel" + candidate + "]";
            }
        }
        return null;
    }

    function phaseSegmentForSide285(side) {
        var deck = deckForSide(side);
        var group = "[Channel" + deck + "]";
        var reference = phaseReferenceGroup285(deck);
        if (!reference || safeGet(group, "track_loaded", 0) <= 0) {
            return null;
        }
        var current = safeGet(group, "beat_distance", NaN);
        var target = safeGet(reference, "beat_distance", NaN);
        if (!finite(current) || !finite(target)) {
            return null;
        }
        var delta = current - target;
        while (delta > 0.5) { delta -= 1; }
        while (delta < -0.5) { delta += 1; }
        if (Math.abs(delta) <= 0.025) {
            return -1;
        }
        var distance = clamp(Math.ceil(Math.abs(delta) * 24), 1, 12);
        return 80 + (delta > 0 ? distance : -distance);
    }

    function refreshPhaseMeter285(side, reason, force) {
        var reportId = side === "LEFT" ? 0x80 : 0x81;
        var payload = ledLiveReports285[reportId];
        if (!payload) { return false; }
        var segment = phaseSegmentForSide285(side);
        if (!force && state.phaseSegment[side] === segment) { return false; }
        for (var offset = 68; offset <= 92; offset += 1) {
            payload[offset] = 0x00;
        }
        // The Android BAR has no orange center fallback: synced/center and
        // unavailable states clear the whole phase region deterministically.
        payload[93] = 0x00;
        if (segment >= 68 && segment <= 92 && segment !== 80) {
            var first = Math.min(80, segment);
            var last = Math.max(80, segment);
            for (var barOffset = first; barOffset <= last; barOffset += 1) {
                payload[barOffset] = 0x7F;
            }
        }
        state.phaseSegment[side] = segment;
        sendLiveLedReport285(reportId, reason || "PHASE_METER_BLUE_BAR");
        return true;
    }

    function renderLedState285(reason) {
        if (!active || !state) {
            return;
        }
        refreshSideLedFields285("LEFT");
        refreshSideLedFields285("RIGHT");
        refreshSlotFilterLedFields285("LEFT");
        refreshSlotFilterLedFields285("RIGHT");
        refreshAllHotcuePads285("LEFT");
        refreshAllHotcuePads285("RIGHT");
        refreshFxUnitLedFields285("LEFT");
        refreshFxUnitLedFields285("RIGHT");
        refreshFxAssignLedFields285();
        refreshPhaseMeter285("LEFT", reason, true);
        refreshPhaseMeter285("RIGHT", reason, true);
        setLedField285("QUANTIZE", safeGet(groupForSide(state.lastSide), "quantize", 0) > 0);
        [0x80, 0x81, 0x82].forEach(function(reportId) {
            sendLiveLedReport285(reportId, reason);
        });
        ["LEFT", "RIGHT"].forEach(function(side) {
            if (safeGet(groupForSide(side), "loop_enabled", 0) > 0) {
                if (!state.loopRingTimer[side]) { startLoopRingAnimation285(side); }
            } else {
                stopLoopRingAnimation285(side);
            }
        });
        log("LED_STATE_RENDERED", {
            leftDeck: state.leftDeck,
            rightDeck: state.rightDeck,
            scope: "M285_STATEFUL_HID_LED_OUTPUT",
            reason: reason
        });
    }

    function connectLedField285(group, control, field, deck, side) {
        try {
            ledStateConnections285.push(engine.makeConnection(group, control, function() {
                if (!active || !state || (deck && deckForSide(side) !== deck)) {
                    return;
                }
                updateLedField285(field, safeGet(group, control, 0) > 0,
                    "CONTROL_" + control.toUpperCase());
            }));
        } catch (error) {
            log("LED_CONNECTION_FAILED", {group: group, control: control, error: String(error)});
        }
    }

    function connectLoopLedFields285(group, deck, side) {
        try {
            ledStateConnections285.push(engine.makeConnection(group, "loop_enabled", function() {
                if (!active || !state || deckForSide(side) !== deck) {
                    return;
                }
                var enabled = safeGet(group, "loop_enabled", 0) > 0;
                refreshLoopRing285(side, "CONTROL_LOOP_ENABLED_" + side);
            }));
        } catch (error) {
            log("LED_CONNECTION_FAILED", {group: group, control: "loop_enabled", error: String(error)});
        }
        try {
            ledStateConnections285.push(engine.makeConnection(group, "beatloop_size", function(value) {
                if (!active || !state || deckForSide(side) !== deck || state.shifted[side]) {
                    return;
                }
                if (state.loopTouched[side] || state.popup[side].title === POPUP_TITLE.LOOP_SIZE) {
                    var actual = finite(value) ? value : safeGet(group, "beatloop_size", 0);
                    showTemporaryPopup(side, POPUP_KIND.INFORMATION, POPUP_TITLE.LOOP_SIZE,
                        actual, POPUP_PRIORITY.INFORMATION);
                    log("LOOP_POPUP_CONTROL_UPDATE", {side: side, deck: deck, value: actual});
                }
            }));
        } catch (error2) {
            log("LOOP_POPUP_CONNECTION_FAILED", {group: group, error: String(error2)});
        }
    }

    function connectOneHotcueLedField285(group, deck, side, pad, part) {
        var control = "hotcue_" + pad + "_" + part;
        try {
            ledStateConnections285.push(engine.makeConnection(group, control, function() {
                if (!active || !state || deckForSide(side) !== deck) {
                    return;
                }
                // Rebuild the contiguous 24-byte candidate block first,
                // then send one live report without changing any other LED.
                refreshAllHotcuePads285(side);
                sendLiveLedReport285(side === "LEFT" ? 0x80 : 0x81,
                    "CONTROL_HOTCUE_" + pad + "_" + part.toUpperCase());
            }));
        } catch (error) {
            log("LED_CONNECTION_FAILED", {group: group, control: control, error: String(error)});
        }
    }

    function connectHotcueLedFields285(group, deck, side) {
        for (var pad = 1; pad <= 8; pad += 1) {
            ["status", "color"].forEach(function(part) {
                connectOneHotcueLedField285(group, deck, side, pad, part);
            });
        }
    }

    function connectSlotFilterLedField285(sampler) {
        var group = "[Sampler" + sampler + "]";
        try {
            ledStateConnections285.push(engine.makeConnection(group, "mute", function(value) {
                if (!active || !state) {
                    return;
                }
                ["LEFT", "RIGHT"].forEach(function(side) {
                    var reportChanged = false;
                    for (var strip = 1; strip <= 4; strip += 1) {
                        if (samplerForStrip(side, strip) === sampler) {
                            setLedField285("SLOT_FILTER" + strip + "_" + side,
                                finite(value) ? value > 0 : safeGet(group, "mute", 0) > 0);
                            reportChanged = true;
                        }
                    }
                    if (reportChanged) {
                        sendLiveLedReport285(side === "LEFT" ? 0x80 : 0x81,
                            "CONTROL_SAMPLER_MUTE_SLOT_FILTER");
                    }
                });
            }));
        } catch (error) {
            log("SLOT_FILTER_LED_CONNECTION_FAILED", {sampler: sampler, error: String(error)});
        }
    }

    function initializeLedFeedback285() {
        disconnectLedState285();
        initializeLedLiveReports285();
        for (var sampler = 1; sampler <= Math.min(64, safeGet("[App]", "num_samplers")); sampler += 1) {
            ["track_loaded", "play"].forEach(function(control) {
                try {
                    ledStateConnections285.push(engine.makeConnection("[Sampler" + sampler + "]", control, function() {
                        if (active) {
                            ["LEFT", "RIGHT"].forEach(function(side) {
                                if (state.padMode[side] === "REMIX") {
                                    refreshAllHotcuePads285(side);
                                    sendLiveLedReport285(side === "LEFT" ? 0x80 : 0x81, "SAMPLER_STATE");
                                }
                            });
                        }
                    }));
                } catch (error) {
                    log("SAMPLER_LED_CONNECTION_FAILED", {sampler: sampler, error: String(error)});
                }
            });
            connectSlotFilterLedField285(sampler);
        }
        [1, 2, 3, 4].forEach(function(deck) {
            var group = "[Channel" + deck + "]";
            try {
                ledStateConnections285.push(engine.makeConnection(group, "quantize", function() {
                    if (active && state && deckForSide(state.lastSide) === deck) {
                        updateLedField285("QUANTIZE", safeGet(group, "quantize") > 0, "CONTROL_QUANTIZE");
                    }
                }));
            } catch (error) {
                log("QUANTIZE_LED_CONNECTION_FAILED", {group: group, error: String(error)});
            }
            ["LEFT", "RIGHT"].forEach(function(side) {
                ["play_indicator", "cue_default", "slip_enabled"].forEach(function(control) {
                    connectLedField285(group, control, sideLedField285(side, control), deck, side);
                });
                connectLoopLedFields285(group, deck, side);
                connectHotcueLedFields285(group, deck, side);
            });
            ["sync_enabled", "sync_leader"].forEach(function(control) {
                try {
                    ledStateConnections285.push(engine.makeConnection(group, control, function() {
                        if (active && state) {
                            refreshSyncIndicators285("CONTROL_" + control.toUpperCase());
                            refreshPhaseMeter285("LEFT", "PHASE_REFERENCE_CHANGE", false);
                            refreshPhaseMeter285("RIGHT", "PHASE_REFERENCE_CHANGE", false);
                        }
                    }));
                } catch (error) {
                    log("SYNC_LED_CONNECTION_FAILED", {group: group, control: control, error: String(error)});
                }
            });
            ["beat_distance", "track_loaded"].forEach(function(control) {
                try {
                    ledStateConnections285.push(engine.makeConnection(group, control, function() {
                        if (active && state) {
                            refreshPhaseMeter285("LEFT", "CONTROL_" + control.toUpperCase(), false);
                            refreshPhaseMeter285("RIGHT", "CONTROL_" + control.toUpperCase(), false);
                        }
                    }));
                } catch (error) {
                    log("PHASE_LED_CONNECTION_FAILED", {group: group, control: control, error: String(error)});
                }
            });
        });
        ["beat_distance", "sync_leader"].forEach(function(control) {
            try {
                ledStateConnections285.push(engine.makeConnection("[InternalClock]", control, function() {
                    if (active && state) {
                        refreshPhaseMeter285("LEFT", "INTERNAL_CLOCK_" + control.toUpperCase(), false);
                        refreshPhaseMeter285("RIGHT", "INTERNAL_CLOCK_" + control.toUpperCase(), false);
                    }
                }));
            } catch (error) {
                log("PHASE_CLOCK_CONNECTION_FAILED", {control: control, error: String(error)});
            }
        });
        ["LEFT", "RIGHT"].forEach(function(side) {
            var prefix = side === "LEFT" ? "FX_UNIT1_" : "FX_UNIT2_";
            connectLedField285(effectUnitGroup(side), "enabled", prefix + "ON");
            [1, 2, 3].forEach(function(slot) {
                connectLedField285(effectSlotGroup(side, slot), "enabled", prefix + "BTN" + slot);
            });
        });
        [["FX_ASSIGN1_C", 1, 3], ["FX_ASSIGN2_C", 2, 3],
            ["FX_ASSIGN1_A", 1, 1], ["FX_ASSIGN2_A", 2, 1],
            ["FX_ASSIGN1_B", 1, 2], ["FX_ASSIGN2_B", 2, 2],
            ["FX_ASSIGN1_D", 1, 4], ["FX_ASSIGN2_D", 2, 4]].forEach(function(item) {
            connectLedField285("[EffectRack1_EffectUnit" + item[1] + "]",
                "group_[Channel" + item[2] + "]_enable", item[0]);
        });
        initializeMixerFilterFeature285();
        connectPflLed10004();
        renderLedState285("INIT");
    }

    function availableDeckCount() {
        return Math.max(0, Math.floor(safeGet("[App]", "num_decks")));
    }

    function deckIsAvailable(deck) {
        return deck >= 1 && deck <= availableDeckCount();
    }

    function channelFromLetter(letter) {
        return "ABCD".indexOf(letter) + 1;
    }

    function groupForChannelLetter(letter) {
        return "[Channel" + channelFromLetter(letter) + "]";
    }

    function effectUnitForSide(side) {
        // A/C and B/D focus selects FX Units 1/3 and 2/4 respectively.
        return deckForSide(side);
    }

    function effectUnitGroup(side) {
        return "[EffectRack1_EffectUnit" + effectUnitForSide(side) + "]";
    }

    function effectSlotGroup(side, slot) {
        return "[EffectRack1_EffectUnit" + effectUnitForSide(side) + "_Effect" + slot + "]";
    }

    function effectMode(side) {
        var unit = effectUnitForSide(side);
        try {
            if (typeof engine.getS8Preference === "function") {
                return Math.round(engine.getS8Preference("fx_unit_" + unit + "_mode", 0)) ? "SINGLE" : "GROUP";
            }
        } catch (error) {
            log("FX_MODE_READ_FAILED", {side: side, unit: unit, error: String(error)});
        }
        return "GROUP";
    }

    function nativeEffectState(side) {
        try {
            if (typeof engine.getS8EffectState === "function") {
                return engine.getS8EffectState(effectUnitForSide(side)) || null;
            }
        } catch (error) {
            log("FX_STATE_READ_FAILED", {side: side, error: String(error)});
        }
        return null;
    }

    function safeGet(group, key) {
        try {
            var value = engine.getValue(group, key);
            return finite(value) ? value : 0;
        } catch (error) {
            log("ENGINE_GET_FAILED", {group: group, key: key, error: String(error)});
            return 0;
        }
    }

    function bpmPrecision() {
        var value = Math.round(persistedPreference("bpm_precision", 2));
        return value === 1 ? 1 : 2;
    }

    function bpmStep(shifted) {
        return shifted ? 1 : 1 / Math.pow(10, bpmPrecision());
    }

    function quantizeBpm(value) {
        return Number(value.toFixed(bpmPrecision()));
    }

    function safeSet(group, key, value) {
        try {
            engine.setValue(group, key, value);
            return true;
        } catch (error) {
            log("ENGINE_SET_FAILED", {group: group, key: key, value: value, error: String(error)});
            return false;
        }
    }

    function displayBridgeKey(side, suffix) {
        return (side === "LEFT" ? "left_" : "right_") + suffix;
    }

    function surfaceTouchMask(side) {
        var mask = 0;
        mask |= (state.fxTouchMask[side] & 0x0F);
        mask |= (state.screenTouchMask[side] & 0x0F) << 4;
        mask |= (state.faderTouchMask[side] & 0x0F) << 8;
        if (state.loopTouched[side]) {
            mask |= 1 << 12;
        }
        if (state.touchstripGesture[side]) {
            mask |= 1 << 13;
        }
        if (state.shifted[side]) {
            mask |= 1 << 14;
        }
        return mask;
    }

    function surfaceContext(side) {
        if (state.fxSelectVisible[side]) {
            return DISPLAY_CONTEXT.FX_SELECT;
        }
        if (state.browserVisible[side]) {
            return DISPLAY_CONTEXT.BROWSER;
        }
        return DISPLAY_CONTEXT.DECK;
    }

    function publishSurfaceState(side) {
        if (!state) {
            return;
        }
        safeSet("[S8Display]", displayBridgeKey(side, "deck"), deckForSide(side));
        safeSet("[S8Display]", displayBridgeKey(side, "context"), surfaceContext(side));
        safeSet("[S8Display]", displayBridgeKey(side, "touch_mask"), surfaceTouchMask(side));
        safeSet("[S8Display]", displayBridgeKey(side, "fx_slot"), state.fxSelectSlot[side] || 1);
        safeSet("[S8Display]", displayBridgeKey(side, "pad_mode"),
            DISPLAY_PAD_MODE[state.padMode[side]] === undefined ? 0 : DISPLAY_PAD_MODE[state.padMode[side]]);
        var display = state.display[side];
        safeSet("[S8Display]", displayBridgeKey(side, "generation"), bridgeGeneration);
        safeSet("[S8Display]", displayBridgeKey(side, "state_revision"), display.revision);
        safeSet("[S8Display]", displayBridgeKey(side, "view_mode"), display.viewMode);
        safeSet("[S8Display]", displayBridgeKey(side, "waveform_mode"), display.waveformMode);
        safeSet("[S8Display]", displayBridgeKey(side, "information_overlay"), display.informationOverlay);
        safeSet("[S8Display]", displayBridgeKey(side, "stems_page"), display.stemsPage);
        safeSet("[S8Display]", displayBridgeKey(side, "active_panel"), display.activePanel);
        safeSet("[S8Display]", displayBridgeKey(side, "settings_open"), display.settingsOpen ? 1 : 0);
        safeSet("[S8Display]", displayBridgeKey(side, "settings_page"), display.settingsPage);
        safeSet("[S8Display]", displayBridgeKey(side, "waveform_zoom"), display.waveformZoom);
        safeSet("[S8Display]", displayBridgeKey(side, "mixer_fx_product"), display.mixerFxProduct);
        safeSet("[S8Display]", displayBridgeKey(side, "master_tempo_popup"), state.masterTempoPopup ? 1 : 0);
        safeSet("[S8Display]", displayBridgeKey(side, "master_tempo_bpm"), masterTempoBpm());
        safeSet("[S8Display]", displayBridgeKey(side, "load_status"), state.loadStatus[side]);
        safeSet("[S8Display]", displayBridgeKey(side, "load_reject_reason"),
            state.loadRejectReason[side]);
        // Unified arbitrated popup (Android parity). Numeric only: the bridge
        // carries ControlObject values, so the renderer maps the title code to
        // its own text.
        var popup = state.popup[side] || closedPopupState();
        safeSet("[S8Display]", displayBridgeKey(side, "popup_kind"), popup.kind);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_phase"), popup.phase);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_title"), popup.title);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_value"), popup.value);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_has_value"), popup.hasValue ? 1 : 0);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_deck"), popup.deck);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_master"), popup.master ? 1 : 0);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_pending_index"), popup.pendingIndex);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_pending_descending"),
            popup.pendingDescending ? 1 : 0);
        safeSet("[S8Display]", displayBridgeKey(side, "popup_pending_criteria"), popup.pendingCriteria);
        safeSet("[S8Display]", displayBridgeKey(side, "sort_popup"),
            popup.kind === POPUP_KIND.SELECTION ? 1 : 0);
        var slice = state.slices[side];
        for (var boundary = 0; boundary < 9; boundary += 1) {
            safeSet("[S8Display]", displayBridgeKey(side, boundary < 8 ? "slice_" + (boundary + 1) : "slice_end"),
                slice ? slice.boundaries[boundary] / slice.samples : -1);
        }
        safeSet("[S8Display]", displayBridgeKey(side, "slice_beats"), slice ? slice.beats : 0);
        safeSet("[S8Display]", displayBridgeKey(side, "slice_token"), slice ? slice.token : 0);
        var sliceMask = 0;
        if (slice) {
            slice.pads.forEach(function(pad) { sliceMask |= 1 << (pad - 1); });
        }
        safeSet("[S8Display]", displayBridgeKey(side, "slice_mask"), sliceMask);
        safeSet("[S8Display]", displayBridgeKey(side, "sampler_bank"), state.samplerBank[side]);
        // Publish connected last. IF6 validates generation on both sides of its
        // read and rejects interrupted or stale snapshots.
        safeSet("[S8Display]", displayBridgeKey(side, "connected"), 1);
    }

    function publishAllSurfaceState() {
        publishSurfaceState("LEFT");
        publishSurfaceState("RIGHT");
    }

    function safeSetParameter(group, key, value) {
        try {
            engine.setParameter(group, key, clamp(value, 0, 1));
            return true;
        } catch (error) {
            log("ENGINE_PARAMETER_FAILED", {group: group, key: key, value: value, error: String(error)});
            return false;
        }
    }

    function pulseWithOutcome(group, key, value) {
        var onValue = value === undefined ? 1 : value;
        var onOk = safeSet(group, key, onValue);
        var offOk = safeSet(group, key, 0);
        return {onAccepted: onOk, offAccepted: offOk};
    }

    function pulse(group, key, value) {
        var outcome = pulseWithOutcome(group, key, value);
        return outcome.onAccepted && outcome.offAccepted;
    }

    function toggle(group, key) {
        safeSet(group, key, safeGet(group, key) ? 0 : 1);
    }

    function enableSoftTakeover(group, key) {
        var id = group + "|" + key;
        if (softTakeoverTargets[id]) {
            return;
        }
        softTakeoverTargets[id] = true;
        try {
            if (typeof engine.softTakeover === "function") {
                engine.softTakeover(group, key, true);
            }
        } catch (error) {
            log("SOFT_TAKEOVER_UNAVAILABLE", {group: group, key: key, error: String(error)});
        }
    }

    function hold(controlId, group, key) {
        releaseHeld(controlId);
        if (safeSet(group, key, 1)) {
            held[controlId] = {group: group, key: key};
        }
    }

    function releaseHeld(controlId) {
        var target = held[controlId];
        if (!target) {
            return;
        }
        safeSet(target.group, target.key, 0);
        delete held[controlId];
    }

    function releaseAll(side) {
        if (state) {
            ["LEFT", "RIGHT"].forEach(function(surface) {
                if (!side || surface === side) {
                    releaseSlice(surface, 0);
                }
            });
        }
        Object.keys(held).forEach(function(controlId) {
            if (!side || sideOf(controlId) === side) {
                releaseHeld(controlId);
            }
        });
    }

    function stopTimer(timerId) {
        if (!timerId) {
            return;
        }
        try {
            if (typeof engine.stopTimer === "function") {
                engine.stopTimer(timerId);
            }
        } catch (error) {
            log("TIMER_STOP_FAILED", {timerId: timerId, error: String(error)});
        }
    }

    function beginOneShot(milliseconds, callback) {
        try {
            if (typeof engine.beginTimer === "function") {
                return engine.beginTimer(milliseconds, callback, true);
            }
        } catch (error) {
            log("TIMER_START_FAILED", {milliseconds: milliseconds, error: String(error)});
        }
        return 0;
    }

    function beginRepeating(milliseconds, callback) {
        try {
            if (typeof engine.beginTimer === "function") {
                return engine.beginTimer(milliseconds, callback, false);
            }
        } catch (error) {
            log("TIMER_START_FAILED", {milliseconds: milliseconds, repeating: true,
                error: String(error)});
        }
        return 0;
    }

    function buildControlIndex() {
        controls = Object.create(null);
        S8Canonical259.baseline.controls.forEach(function(control) {
            controls[control.control_id] = control;
        });
    }

    /*
     * Android parity overlay (M10003 raw capture -> M10004 reconciliation).
     *
     * The generated bundle keeps its historical bytes. This function only
     * replaces the in-memory description of EncTempoMixer with the encoding the
     * physical hardware actually emits, after re-checking the geometry that the
     * reconciliation was derived from. If the geometry is not the expected one,
     * the overlay refuses to act and the historical description stays in force;
     * nothing is inferred silently.
     */
    function applyTempoReconciliationOverlay(baseline) {
        var specification = TEMPO_OVERLAY_10004;
        // The decoder receives the whole canonical adapter (S8Canonical259); the
        // control list lives one level down, in baseline.baseline.controls.
        if (!baseline || !baseline.baseline || !Array.isArray(baseline.baseline.controls)) {
            log("TEMPO_OVERLAY_REFUSED", {reason: "NO_BASELINE_CONTROLS"});
            return null;
        }
        // The generated bundle freezes its records, so the reconciled description
        // is produced as an independent copy that only the decoder consumes. The
        // frozen generated bundle itself is never modified.
        var reconciled = JSON.parse(JSON.stringify(baseline));
        var control = null;
        reconciled.baseline.controls.forEach(function(candidate) {
            if (candidate && candidate.control_id === specification.controlId) {
                control = candidate;
            }
        });
        if (!control) {
            log("TEMPO_OVERLAY_REFUSED", {reason: "CONTROL_NOT_FOUND", controlId: specification.controlId});
            return null;
        }
        var field = control.field || {};
        if (control.report_id !== specification.reportId ||
                control.report_length !== specification.reportLength ||
                field.byte_offset_with_report_id !== specification.byteOffsetWithReportId ||
                field.field_width !== 1) {
            log("TEMPO_OVERLAY_REFUSED", {
                reason: "UNEXPECTED_GEOMETRY",
                controlId: specification.controlId,
                reportId: control.report_id,
                reportLength: control.report_length,
                byteOffset: field.byte_offset_with_report_id,
                fieldWidth: field.field_width
            });
            return null;
        }
        control.previous_encoding_259_287 = control.encoding;
        control.previous_cw_code_259_287 = control.cw_code;
        control.previous_ccw_code_259_287 = control.ccw_code;
        control.encoding = specification.encoding;
        field.bit_mask = specification.bitMask;
        field.bit_mask_hex = specification.bitMaskHex;
        field.byte_masks = [specification.bitMaskHex];
        field.shift = specification.shift;
        field.modulus = specification.modulus;
        control.cw_code = specification.cwCode;
        control.ccw_code = specification.ccwCode;
        control.direction = specification.direction;
        control.signedness = specification.signedness;
        control.resolution_observed = specification.resolutionObserved;
        control.movement_policy = specification.movementPolicy;
        control.reconciliation_status = specification.reconciliationStatus;
        control.notes = (control.notes || []).concat([
            "Windows parity 2026-09-18: runtime overlay only; the generated bundle and historical mission 255/259/287 records remain unchanged.",
            "Reconciled from the Android 059J M10003 raw captures by M10004; supersedes absolute direction codes 247/248."
        ]);
        control.provenance = (control.provenance || []).concat([{
            artifact: "Desenvolvimento/worktrees/ANDROID_059J_S8_WINDOWS_KNOWN_PARITY/res/controllers/Native-Instruments-Kontrol-S8-Canonical-059J.js",
            mission: "PRIVATE_SOURCE",
            role: "Android physical reconciliation inherited by the Windows runtime",
            sha256: "PRIVATE_SOURCE"
        }]);
        log("TEMPO_OVERLAY_APPLIED", {
            controlId: specification.controlId,
            encoding: specification.encoding,
            bitMask: specification.bitMaskHex,
            modulus: specification.modulus,
            cwCode: specification.cwCode,
            ccwCode: specification.ccwCode,
            direction: specification.direction,
            previousEncoding: control.previous_encoding_259_287,
            previousCodes: [control.previous_cw_code_259_287, control.previous_ccw_code_259_287]
        });
        return reconciled;
    }

    function resetOperationalState() {
        releaseAll();
        if (state) {
            ["LEFT", "RIGHT"].forEach(function(side) {
                var down = state.browseDown[side];
                if (down && down.timerId) {
                    stopTimer(down.timerId);
                }
                var back = state.backDown[side];
                if (back && back.timerId) {
                    stopTimer(back.timerId);
                }
                var verification = state.loadVerification[side];
                if (verification && verification.timerId) {
                    stopTimer(verification.timerId);
                }
                stopTimer(state.loadRejectTimer[side]);
                stopTimer(state.browserSortPopupTimer[side]);
                stopTimer(state.popup[side].timerId);
                state.popup[side] = closedPopupState();
                cleanupTouchstrip(side, false);
            });
        }
        state = freshState();
    }

    function setupSoftTakeover() {
        ["A", "B", "C", "D"].forEach(function(letter) {
            var channel = channelFromLetter(letter);
            var channelGroup = "[Channel" + channel + "]";
            enableSoftTakeover(channelGroup, "pregain");
            enableSoftTakeover(channelGroup, "volume");
            enableSoftTakeover("[EqualizerRack1_[Channel" + channel + "]_Effect1]", "parameter1");
            enableSoftTakeover("[EqualizerRack1_[Channel" + channel + "]_Effect1]", "parameter2");
            enableSoftTakeover("[EqualizerRack1_[Channel" + channel + "]_Effect1]", "parameter3");
            enableSoftTakeover("[QuickEffectRack1_[Channel" + channel + "]]", "super1");
        });
        enableSoftTakeover("[Master]", "crossfader");
        [1, 2, 3, 4].forEach(function(unitNumber) {
            var unit = "[EffectRack1_EffectUnit" + unitNumber + "]";
            enableSoftTakeover(unit, "mix");
            [1, 2, 3].forEach(function(slot) {
                var slotGroup = "[EffectRack1_EffectUnit" + unitNumber + "_Effect" + slot + "]";
                enableSoftTakeover(slotGroup, "meta");
                [1, 2, 3].forEach(function(parameter) {
                    enableSoftTakeover(slotGroup, "parameter" + parameter);
                });
            });
        });
        ["LEFT", "RIGHT"].forEach(function(side) {
            var baseSampler = side === "LEFT" ? 1 : 5;
            [0, 1, 2, 3].forEach(function(index) {
                enableSoftTakeover("[Sampler" + (baseSampler + index) + "]", "volume");
            });
        });
    }

    function init() {
        disconnectProgramBrowserState();
        buildControlIndex();
        var reconciledAdapter = installTempoReconciliation();
        decoder = S8HidDecoder.create(reconciledAdapter || S8Canonical259);
        bridgeGeneration += 1;
        resetOperationalState();
        state.padPalette = clamp(Math.round(persistedPreference("pad_palette", 0)), 0, 3);
        ["LEFT", "RIGHT"].forEach(function(side) {
            state.display[side].waveformMode = clamp(
                Math.round(persistedPreference("waveform_style", WAVEFORM_MODE.EXPANDED)), 0, 3);
        });
        softTakeoverTargets = Object.create(null);
        setupSoftTakeover();
        active = true;
        connectProgramBrowserState();
        syncProgramBrowserState("INIT_SNAPSHOT", true);
        setBrowserSurfaceModes(null, "INIT_SNAPSHOT");
        log("S8_MAPPING_PROVENANCE", {
            bundleId: BUNDLE_ID,
            role: "FUNCTIONAL_HID",
            mappingXml: FUNCTIONAL_XML,
            scripts: FUNCTIONAL_SCRIPTS.slice(),
            requiredFrameworkScripts: ["common-controller-scripts.js"],
            device: {vendorId: "0x17CC", productId: "0x1370", interfaceNumber: 5},
            pathProof: "MIXXX_ABSOLUTE_LOADER_LOG_PLUS_ADJACENT_SCRIPT_RESOLUTION"
        });
        log("INIT", {
            baseline: S8Canonical259.baseline.baseline_id,
            controls: S8Canonical259.baseline.controls.length,
            endKnobOperationalModulus: ENDKNOB_MODULUS,
            outputReports: true,
            outputScope: "MISSION_285_STATEFUL_HID_LED_OUTPUT_PLUS_HOTCUE_BGR_AND_FILTER_F4_CANDIDATES",
            displayStateBridge: "[S8Display]",
            inheritedAxisCorrections259: Object.keys(ANALOG_DIRECTION_FLIP_269).length,
            platformTarget: "WINDOWS",
            availableDecks: availableDeckCount(),
            fourDeckContractSatisfied: availableDeckCount() >= 4
        });
        initializeLedFeedback285();
        // Explicit operator authorization from M10004: the operational mapping
        // opens the PFL feedback gate after connections are rebuilt, causing an
        // immediate snapshot and keeping GUI and hardware changes synchronized.
        setPflLedFeedbackEnabled(true);
        return true;
    }

    function shutdown() {
        disconnectProgramBrowserState();
        disconnectLedState285();
        active = false;
        releaseAll();
        cancelBrowseGestures("SHUTDOWN");
        ["LEFT", "RIGHT"].forEach(function(side) {
            stopPreview(side, "SHUTDOWN");
            cleanupTouchstrip(side, false);
            if (state) {
                var verification = state.loadVerification[side];
                if (verification && verification.timerId) {
                    stopTimer(verification.timerId);
                    state.loadVerification[side] = null;
                }
                stopTimer(state.loadRejectTimer[side]);
                state.loadRejectTimer[side] = 0;
                stopTimer(state.browserSortPopupTimer[side]);
                state.browserSortPopupTimer[side] = 0;
                // Android parity: no arbitrated popup may survive shutdown.
                stopTimer(state.popup[side].timerId);
                state.popup[side] = closedPopupState();
                state.browserSortPopupVisible[side] = false;
                var back = state.backDown[side];
                if (back) {
                    stopTimer(back.timerId);
                    state.backDown[side] = null;
                }
                state.browserVisible[side] = false;
            }
        });
        if (state) {
            if (state.desktopLibrary.owned) {
                safeSet("[Skin]", "show_maximized_library",
                    state.desktopLibrary.previousMaximized ? 1 : 0);
                restoreDesktopFocusIfOwned();
            }
            state.browserVisible.LEFT = false;
            state.browserVisible.RIGHT = false;
            state.programBrowserExpanded = false;
            state.fxSelectVisible.LEFT = false;
            state.fxSelectVisible.RIGHT = false;
            state.fxTouchMask.LEFT = state.fxTouchMask.RIGHT = 0;
            state.screenTouchMask.LEFT = state.screenTouchMask.RIGHT = 0;
            state.faderTouchMask.LEFT = state.faderTouchMask.RIGHT = 0;
            state.loopTouched.LEFT = state.loopTouched.RIGHT = false;
            stopLoopRingAnimation285("LEFT");
            stopLoopRingAnimation285("RIGHT");
            publishAllSurfaceState();
        }
        bridgeGeneration += 1;
        ["LEFT", "RIGHT"].forEach(function(side) {
            safeSet("[S8Display]", displayBridgeKey(side, "connected"), 0);
            safeSet("[S8Display]", displayBridgeKey(side, "generation"), bridgeGeneration);
        });
        if (decoder) {
            decoder.reset();
        }
        log("SHUTDOWN", {reports: state ? state.reports : 0, accepted: state ? state.acceptedReports : 0});
        return true;
    }

    function switchDeck(side) {
        releaseAll(side);
        state.slices[side] = null;
        if (state.padMode[side] === "FREEZE" || state.padMode[side] === "SLICER") {
            state.padMode[side] = "HOTCUE";
        }
        // A Touch Strip interaction owns the deck captured at touch-down until
        // its physical release. Switching focus affects only the next gesture.
        var candidateDeck;
        if (side === "LEFT") {
            candidateDeck = state.leftDeck === 1 ? 3 : 1;
        } else {
            candidateDeck = state.rightDeck === 2 ? 4 : 2;
        }
        if (!deckIsAvailable(candidateDeck)) {
            log("DECK_FOCUS_BLOCKED_DECK_UNAVAILABLE", {
                side: side,
                requestedDeck: candidateDeck,
                availableDecks: availableDeckCount()
            });
            return;
        }
        if (side === "LEFT") {
            state.leftDeck = candidateDeck;
        } else {
            state.rightDeck = candidateDeck;
        }
        state.focusRevision[side] += 1;
        state.fxSelectVisible[side] = false;
        state.lastSide = side;
        publishSurfaceState(side);
        renderLedState285("DECK_FOCUS_" + side);
        log("DECK_FOCUS_" + side, {side: side, deck: deckForSide(side)});
        log("DECK_SELECTED", {side: side, deck: deckForSide(side)});
    }

    function setPadMode(side, mode) {
        releaseAll(side);
        if (mode !== "FREEZE" && mode !== "SLICER") {
            state.slices[side] = null;
        }
        state.padMode[side] = mode;
        state.lastSide = side;
        publishSurfaceState(side);
        refreshModeIdentity285(side);
        refreshSlotFilterLedFields285(side);
        refreshAllHotcuePads285(side);
        sendLiveLedReport285(side === "LEFT" ? 0x80 : 0x81, "PAD_MODE_" + mode);
        log("PAD_MODE", {side: side, mode: mode});
    }

    function padNumber(controlId) {
        var match = /^BtnPad([1-8])(Left|Right)$/.exec(controlId);
        return match ? Number(match[1]) : 0;
    }

    function samplerForPad(side, pad) {
        var first = side === "LEFT" ? 1 : 9;
        return first + state.samplerBank[side] * 16 + pad - 1;
    }

    function samplerForStrip(side, strip) {
        if (state.padMode[side] === "REMIX") {
            return samplerForPad(side, state.samplerColumns[side][strip - 1]);
        }
        return (side === "LEFT" ? 0 : 4) + strip;
    }

    function captureSlices(side) {
        releaseSlice(side, 0);
        var plan = null;
        try {
            if (typeof engine.getS8SliceWindow === "function") {
                plan = engine.getS8SliceWindow(groupForSide(side), SLICE_SIZES[state.sliceSizeIndex[side]]);
            }
        } catch (error) {
            log("SLICE_CAPTURE_FAILED", {side: side, error: String(error)});
        }
        if (!plan || !plan.available || !plan.identity || !plan.token || !plan.boundaries || plan.boundaries.length !== 9 ||
                !finite(plan.samples) || plan.samples <= 0) {
            state.slices[side] = null;
            log("SLICE_UNAVAILABLE", {side: side, reason: "NATIVE_BEATGRID_WINDOW_REQUIRED"});
            return false;
        }
        for (var i = 0; i < 9; i += 1) {
            if (!finite(plan.boundaries[i]) || plan.boundaries[i] < 0 ||
                    plan.boundaries[i] > plan.samples || (i && plan.boundaries[i] <= plan.boundaries[i - 1])) {
                state.slices[side] = null;
                return false;
            }
        }
        state.slices[side] = {group: groupForSide(side), identity: plan.identity,
            token: plan.token,
            samples: plan.samples, boundaries: plan.boundaries.slice(), beats: plan.sliceBeats,
            pads: [], saved: null};
        return true;
    }

    function sliceTrackMatches(slice) {
        try {
            return typeof engine.getTrackMetadata === "function" &&
                engine.getTrackMetadata(slice.group).identity === slice.identity &&
                typeof engine.isS8SliceWindowCurrent === "function" &&
                engine.isS8SliceWindowCurrent(slice.group, slice.token);
        } catch (error) {
            return false;
        }
    }

    function writeSliceLoop(slice, start, end, enabled) {
        safeSet(slice.group, "loop_enabled", 0);
        // Clear old end first: native setters reject end <= start.
        safeSet(slice.group, "loop_end_position", -1);
        safeSet(slice.group, "loop_start_position", start);
        safeSet(slice.group, "loop_end_position", end);
        safeSet(slice.group, "loop_enabled", enabled ? 1 : 0);
    }

    function releaseSlice(side, pad) {
        var slice = state && state.slices[side];
        if (!slice) {
            return;
        }
        slice.pads = pad ? slice.pads.filter(function(item) { return item !== pad; }) : [];
        if (slice.pads.length && slice.saved && sliceTrackMatches(slice)) {
            writeSliceLoop(slice, slice.boundaries[Math.min.apply(Math, slice.pads) - 1],
                slice.boundaries[Math.max.apply(Math, slice.pads)], true);
        } else if (slice.saved) {
            var saved = slice.saved;
            slice.saved = null;
            // Never restore old loop points into a replacement track.
            if (sliceTrackMatches(slice)) {
                writeSliceLoop(slice, saved.start, saved.end, saved.loop);
                if (!saved.play) {
                    safeSet(slice.group, "play", 0);
                }
            }
            safeSet(slice.group, "slip_enabled", saved.slip ? 1 : 0);
        }
        publishSurfaceState(side);
    }

    function triggerSlice(side, pad) {
        var slice = state.slices[side];
        if (!slice || !sliceTrackMatches(slice)) {
            releaseSlice(side, 0);
            state.slices[side] = null;
            publishSurfaceState(side);
            log("SLICE_PAD_BLOCKED", {side: side, pad: pad, reason: "CAPTURE_INVALID_OR_TRACK_CHANGED"});
            return;
        }
        if (state.padMode[side] === "FREEZE") {
            safeSet(slice.group, "playposition", slice.boundaries[pad - 1] / slice.samples);
            safeSet(slice.group, "play", 1);
            return;
        }
        if (!slice.saved) {
            slice.saved = {start: safeGet(slice.group, "loop_start_position", -1),
                end: safeGet(slice.group, "loop_end_position", -1),
                loop: safeGet(slice.group, "loop_enabled") > 0,
                play: safeGet(slice.group, "play") > 0,
                slip: safeGet(slice.group, "slip_enabled") > 0};
            safeSet(slice.group, "slip_enabled", 1);
        }
        if (slice.pads.indexOf(pad) < 0) {
            slice.pads.push(pad);
        }
        var first = Math.min.apply(Math, slice.pads) - 1;
        writeSliceLoop(slice, slice.boundaries[first], slice.boundaries[Math.max.apply(Math, slice.pads)], true);
        safeSet(slice.group, "playposition", slice.boundaries[first] / slice.samples);
        safeSet(slice.group, "play", 1);
        publishSurfaceState(side);
    }

    function handlePadPress(controlId, side) {
        var pad = padNumber(controlId);
        var group = groupForSide(side);
        var mode = state.padMode[side];
        if (!pad) {
            return;
        }
        if (mode === "HOTCUE") {
            if (state.shifted[side]) {
                pulse(group, "hotcue_" + pad + "_clear");
            } else {
                hold(controlId, group, "hotcue_" + pad + "_activate");
            }
        } else if (mode === "LOOP") {
            if (pad <= 4) {
                if (safeGet(group, "slip_enabled") > 0) {
                    hold(controlId, group, "beatlooproll_" + LOOP_PAD_SIZES[pad - 1] + "_activate");
                } else {
                    pulse(group, "beatloop_" + LOOP_PAD_SIZES[pad - 1] + "_toggle");
                }
            } else {
                var jumpSize = pad === 5 || pad === 8 ? safeGet(group, "beatloop_size", 1) : 1;
                safeSet(group, "beatjump_size", jumpSize > 0 ? jumpSize : 1);
                pulse(group, pad <= 6 ? "beatjump_backward" : "beatjump_forward");
            }
        } else if (mode === "FREEZE" || mode === "SLICER") {
            triggerSlice(side, pad);
        } else if (mode === "REMIX") {
            state.samplerColumns[side][(pad - 1) % 4] = pad;
            refreshSlotFilterLedFields285(side);
            sendLiveLedReport285(side === "LEFT" ? 0x80 : 0x81, "REMIX_STRIP_TARGET_CHANGED");
            var samplerGroup = "[Sampler" + samplerForPad(side, pad) + "]";
            enableSoftTakeover(samplerGroup, "volume");
            if (state.touch["BtnRemixButton" + (side === "LEFT" ? "Left" : "Right")] &&
                    (!state.programBrowserExpanded || state.browserVisible[side]) &&
                    samplerForPad(side, pad) <= safeGet("[App]", "num_samplers") &&
                    safeGet(samplerGroup, "play") <= 0) {
                pulse(samplerGroup, "LoadSelectedTrack");
                return;
            }
            if (samplerForPad(side, pad) <= safeGet("[App]", "num_samplers") &&
                    safeGet(samplerGroup, "track_loaded") > 0) {
                pulse(samplerGroup, state.shifted[side] ? "cue_gotoandstop" : "start_play");
            } else {
                log("SAMPLER_PAD_UNAVAILABLE", {side: side, pad: pad, group: samplerGroup});
            }
        }
        log("PAD_ACTION", {controlId: controlId, side: side, mode: mode, pad: pad});
    }

    function handleOnButton(controlId, side) {
        var match = /^BtnOnButton([1-4])(Left|Right)$/.exec(controlId);
        if (!match) {
            return;
        }
        var strip = Number(match[1]);
        if (state.browserVisible[side]) {
            if (strip === 1) {
                toggleSortDirection(side);
                return;
            }
            if (strip === 4) {
                if (state.preview.active && state.preview.side === side) {
                    stopPreview(side, "ON_BUTTON_4");
                } else {
                    startPreview(side);
                }
                return;
            }
            log("BROWSER_ON_BUTTON_RESERVED", {side: side, strip: strip});
            return;
        }
        var sampler = samplerForStrip(side, strip);
        toggle("[Sampler" + sampler + "]", "mute");
        log("SAMPLER_MUTE", {side: side, strip: strip, sampler: sampler});
    }

    function handleFxButton(controlId, side) {
        var match = /^BtnFx([1-4])Button(Left|Right)$/.exec(controlId);
        if (!match) {
            return;
        }
        var button = Number(match[1]);
        if (button === 1) {
            toggle(effectUnitGroup(side), "enabled");
        } else if (effectMode(side) === "SINGLE") {
            var selectedSlot = button - 1;
            state.fxSelectSlot[side] = selectedSlot;
            [1, 2, 3].forEach(function(slot) {
                safeSet(effectSlotGroup(side, slot), "enabled", slot === selectedSlot ? 1 : 0);
            });
        } else {
            toggle(effectSlotGroup(side, button - 1), "enabled");
        }
        publishSurfaceState(side);
        log("FX_BUTTON", {side: side, button: button, mode: effectMode(side),
            unit: effectUnitForSide(side)});
    }

    function handleFxAssignment(controlId) {
        var match = /^BtnFxass([LR])([ABCD])Mixer$/.exec(controlId);
        if (!match) {
            return;
        }
        var unit = match[1] === "L" ? 1 : 2;
        var deck = channelFromLetter(match[2]);
        toggle("[EffectRack1_EffectUnit" + unit + "]", "group_[Channel" + deck + "]_enable");
        log("FX_ASSIGN", {unit: unit, deck: deck});
    }

    function handlePfl(controlId) {
        var match = /^BtnPfl([ABCD])Mixer$/.exec(controlId);
        if (!match) {
            return;
        }
        var group = groupForChannelLetter(match[1]);
        toggle(group, "pfl");
        log("PFL", {channel: match[1], group: group, gatedByNumDecks: false});
    }

    function prewarmBrowse(side) {
        state.browsePrewarm[side] = {
            at: Date.now(),
            deck: deckForSide(side),
            backendApiAvailable: typeof engine.s8PreviewSelected === "function"
        };
        // Capacitive BROWSE touch is only a harmless prewarm hint. The approved
        // preview transport is DISPLAY BUTTON 8 press/hold/release.
        log("BROWSE_PREWARM_HINT", {side: side,
            backendApiAvailable: typeof engine.s8PreviewSelected === "function", sideEffects: false});
    }

    function startPreview(side) {
        if (!state.browserVisible[side] || state.preview.active ||
                Math.round(safeGet("[Library]", "focused_widget")) === 2) {
            return false;
        }
        try {
            if (typeof engine.s8PreviewSelected === "function" && engine.s8PreviewSelected(true)) {
                state.preview.active = true;
                state.preview.side = side;
                state.display[side].revision += 1;
                publishSurfaceState(side);
                log("PREVIEW_STARTED", {side: side, deck: deckForSide(side), pflChanged: false,
                    trigger: "ON_BUTTON_4_OR_DISPLAY_ALIAS"});
                return true;
            }
        } catch (error) {
            log("PREVIEW_START_FAILED", {side: side, error: String(error)});
        }
        return false;
    }

    function stopPreview(side, reason) {
        if (!state.preview.active || state.preview.side !== side) {
            return false;
        }
        try {
            if (typeof engine.s8PreviewSelected === "function") {
                engine.s8PreviewSelected(false);
            } else {
                safeSet("[PreviewDeck1]", "play", 0);
            }
        } catch (error) {
            log("PREVIEW_STOP_FAILED", {side: side, error: String(error)});
        }
        state.preview.active = false;
        state.preview.side = null;
        state.display[side].revision += 1;
        publishSurfaceState(side);
        log("PREVIEW_STOPPED", {side: side, reason: reason});
        return true;
    }

    function setBrowserSurfaceModes(ownerSide, reason) {
        ["LEFT", "RIGHT"].forEach(function(side) {
            var wasVisible = state.browserVisible[side];
            var isVisible = ownerSide === side;
            state.browserVisible[side] = isVisible;
            updateLedField285("BACK_" + side, isVisible,
                "BROWSER_VISIBILITY_" + (isVisible ? "OPEN" : "CLOSED"));
            if (!isVisible && state.preview.active && state.preview.side === side) {
                stopPreview(side, "BROWSER_CONTEXT_EXIT");
            }
            if (!isVisible && state.browserSortPopupTimer[side]) {
                stopTimer(state.browserSortPopupTimer[side]);
                state.browserSortPopupTimer[side] = 0;
                state.browserSortPopupVisible[side] = false;
            }
            if (!isVisible && state.popup[side].kind === POPUP_KIND.SELECTION) {
                // Leaving the browser context discards a pending SORT BY
                // selection without touching Mixxx's real sort order.
                cancelSort(side);
            }
            log(side + "_DISPLAY_MODE", {
                mode: isVisible ? "BROWSER" : "DECK",
                reason: reason,
                changed: wasVisible !== isVisible
            });
        });
        publishAllSurfaceState();
    }

    function applyProgramBrowserState(expanded, ownerSide, origin, forceLog) {
        var normalized = !!expanded;
        var changed = state.programBrowserExpanded !== normalized;
        state.programBrowserExpanded = normalized;
        // Program Browser transitions own the surface context boundary. Neither
        // side may retain an FX selector while the global state is reconciled.
        state.fxSelectVisible.LEFT = false;
        state.fxSelectVisible.RIGHT = false;
        updateFxSelectLed285("LEFT", "PROGRAM_BROWSER_FX_SELECT_CLOSE_LEFT");
        updateFxSelectLed285("RIGHT", "PROGRAM_BROWSER_FX_SELECT_CLOSE_RIGHT");
        setBrowserSurfaceModes(normalized ? ownerSide : null, origin);
        if (changed || forceLog) {
            log(normalized ? "PROGRAM_BROWSER_EXPANDED" : "PROGRAM_BROWSER_COLLAPSED", {
                origin: origin,
                ownerSide: ownerSide || null,
                changed: changed
            });
        }
    }

    function requiredFiniteGet(group, key) {
        try {
            var value = engine.getValue(group, key);
            if (!finite(value)) {
                log("ENGINE_GET_FAILED", {
                    group: group,
                    key: key,
                    error: "NON_FINITE_VALUE",
                    value: String(value)
                });
                return null;
            }
            return value;
        } catch (error) {
            log("ENGINE_GET_FAILED", {group: group, key: key, error: String(error)});
            return null;
        }
    }

    function observeProgramBrowserState(value, origin) {
        var expanded = Number(value) > 0;
        // Internal writes update the authoritative mirror before setValue. A
        // synchronous makeConnection callback must therefore be a no-op and must
        // not erase the side selected for the S8 Browser surface.
        if (expanded === state.programBrowserExpanded) {
            return expanded;
        }
        if (!expanded) {
            // If this mapping expanded the desktop Library, an external collapse
            // (Big Library/UI/another official control path) still closes the
            // ownership interval. Restore the widget that was focused before the
            // S8 forced the tracks table, then reconcile both S8 surfaces.
            restoreDesktopFocusIfOwned();
        }
        applyProgramBrowserState(expanded, null, origin, false);
        return expanded;
    }

    function syncProgramBrowserState(origin, forceLog) {
        var expanded = safeGet("[Skin]", "show_maximized_library") > 0;
        if (expanded !== state.programBrowserExpanded) {
            observeProgramBrowserState(expanded ? 1 : 0, origin);
        } else if (forceLog) {
            log(expanded ? "PROGRAM_BROWSER_EXPANDED" : "PROGRAM_BROWSER_COLLAPSED", {
                origin: origin,
                ownerSide: null,
                changed: false
            });
        }
        return expanded;
    }

    function connectProgramBrowserState() {
        browserStateConnection = null;
        try {
            if (typeof engine.makeConnection === "function") {
                browserStateConnection = engine.makeConnection(
                    "[Skin]", "show_maximized_library", function() {
                        if (active && state) {
                            // Read the CO now instead of trusting a possibly queued,
                            // stale callback payload from an earlier internal write.
                            syncProgramBrowserState("MIXXX_CONTROL_CHANGE", false);
                        }
                    });
            }
        } catch (error) {
            log("BROWSER_STATE_CONNECTION_FAILED", {error: String(error)});
        }
    }

    function disconnectProgramBrowserState() {
        if (!browserStateConnection) {
            return;
        }
        try {
            if (typeof browserStateConnection.disconnect === "function") {
                browserStateConnection.disconnect();
            }
        } catch (error) {
            log("BROWSER_STATE_DISCONNECT_FAILED", {error: String(error)});
        }
        browserStateConnection = null;
    }

    function acquireDesktopLibrary() {
        if (!state.desktopLibrary.owned) {
            state.desktopLibrary.previousMaximized = safeGet("[Skin]", "show_maximized_library") ? 1 : 0;
            state.desktopLibrary.previousFocusedWidget = safeGet("[Library]", "focused_widget");
            state.desktopLibrary.owned = true;
        }
        // Preserve an existing Sidebar/TracksTable selection. Otherwise enter
        // through the real Sidebar tree (FocusWidget::Sidebar = 2).
        var focused = Math.round(safeGet("[Library]", "focused_widget"));
        if (focused !== 2 && focused !== 3) {
            safeSet("[Library]", "focused_widget", 2);
        }
    }

    function restoreDesktopFocusIfOwned() {
        if (!state.desktopLibrary.owned) {
            return;
        }
        if (state.desktopLibrary.previousFocusedWidget > 0) {
            safeSet("[Library]", "focused_widget", state.desktopLibrary.previousFocusedWidget);
        }
        state.desktopLibrary.owned = false;
    }

    function openBrowser(side, reason) {
        acquireDesktopLibrary();
        state.fxSelectVisible[side] = false;
        state.lastSide = side;
        applyProgramBrowserState(true, side, reason, false);
        if (!safeSet("[Skin]", "show_maximized_library", 1)) {
            applyProgramBrowserState(false, null, "OPEN_WRITE_FAILED", false);
            restoreDesktopFocusIfOwned();
            return false;
        }
        log("BROWSER_OPEN", {
            side: side,
            deck: deckForSide(side),
            windowsDesktopLibraryVisible: true,
            s8DisplayBridgePublished: true
        });
        return true;
    }

    function closeBrowser(reason, side) {
        applyProgramBrowserState(false, null, reason, false);
        // A long press is a global toggle. Collapse explicitly even when Mixxx was
        // expanded outside this mapping; do not restore a stale cached value.
        if (!safeSet("[Skin]", "show_maximized_library", 0)) {
            syncProgramBrowserState("CLOSE_WRITE_FAILED", false);
            log("BROWSER_CLOSE_FAILED", {side: side, reason: reason});
            return false;
        }
        restoreDesktopFocusIfOwned();
        log("BROWSER_CLOSE", {side: side, reason: reason, global: true});
        return true;
    }

    function requestLoad(side, targetDeck, pressFocusRevision) {
        if (!state.browserVisible[side]) {
            log("LOAD_BLOCKED_BROWSER_NOT_OWNED", {side: side});
            return;
        }
        var currentDeck = deckForSide(side);
        var group = "[Channel" + targetDeck + "]";
        log("SHORT_LOAD_REQUEST", {
            side: side,
            targetDeck: targetDeck,
            currentDeck: currentDeck,
            pressFocusRevision: pressFocusRevision,
            currentFocusRevision: state.focusRevision[side],
            group: group
        });
        if (!deckIsAvailable(targetDeck)) {
            log("LOAD_BLOCKED_DECK_UNAVAILABLE", {
                side: side,
                targetDeck: targetDeck,
                availableDecks: availableDeckCount()
            });
            return;
        }
        // Deck focus is locked at press. A focus change while held is ambiguous and
        // therefore fails closed. Play is deliberately re-read at release time.
        if (currentDeck !== targetDeck || state.focusRevision[side] !== pressFocusRevision) {
            log("LOAD_BLOCKED_FOCUS_CHANGED", {
                side: side,
                targetDeck: targetDeck,
                currentDeck: currentDeck,
                pressFocusRevision: pressFocusRevision,
                currentFocusRevision: state.focusRevision[side]
            });
            return;
        }
        log("SHORT_LOAD_TARGET", {side: side, targetDeck: targetDeck, group: group});
        var playState = requiredFiniteGet(group, "play");
        if (playState === null) {
            log("LOAD_BLOCKED_PLAY_STATE_UNAVAILABLE", {
                side: side,
                group: group,
                targetDeck: targetDeck
            });
            return;
        }
        if (playState > 0) {
            showLoadRejection(side, "DECK_PLAYING");
            log("LOAD_BLOCKED_DECK_PLAYING", {side: side, group: group, targetDeck: targetDeck});
            return;
        }
        var selectionIdentity = "";
        try {
            if (typeof engine.getS8BrowserState === "function") {
                var selectionState = engine.getS8BrowserState(9);
                selectionIdentity = selectionState && selectionState.selectedIdentity ?
                    String(selectionState.selectedIdentity) : "";
            }
        } catch (error) {
            log("LOAD_SELECTION_IDENTITY_FAILED", {side: side, error: String(error)});
        }
        // Fail closed when the native browser bridge cannot identify a selected
        // track. A LoadSelectedTrack pulse must never precede this validation.
        if (!selectionIdentity) {
            showLoadRejection(side, "NO_SELECTION");
            log("LOAD_REJECTED_NO_SELECTION", {side: side, targetDeck: targetDeck});
            return;
        }
        var loadPulse = pulseWithOutcome(group, "LoadSelectedTrack");
        if (!loadPulse.onAccepted) {
            showLoadRejection(side, "COMMAND_FAILED");
            log("LOAD_COMMAND_FAILED", {
                side: side,
                group: group,
                targetDeck: targetDeck,
                stage: "ON",
                releaseAccepted: loadPulse.offAccepted
            });
            return;
        }
        if (!loadPulse.offAccepted) {
            log("LOAD_RELEASE_FAILED_AFTER_COMMAND", {
                side: side,
                group: group,
                targetDeck: targetDeck,
                loadMayHaveExecuted: true
            });
            return;
        }
        log("LOAD_EXECUTED", {
            side: side,
            group: group,
            targetDeck: targetDeck,
            browserUnchanged: true,
            meaning: "MIXXX_LOAD_COMMAND_PULSED"
        });
        state.loadStatus[side] = 1;
        state.loadRejectReason[side] = 0;
        state.display[side].revision += 1;
        publishSurfaceState(side);
        var verification = {attempt: 0, identity: selectionIdentity, targetDeck: targetDeck, timerId: 0};
        state.loadVerification[side] = verification;
        function verifyLoad() {
            if (!active || state.loadVerification[side] !== verification) {
                return;
            }
            verification.attempt += 1;
            var loadedIdentity = "";
            try {
                var metadata = typeof engine.getTrackMetadata === "function" ?
                    engine.getTrackMetadata(group) : null;
                loadedIdentity = metadata && metadata.identity ? String(metadata.identity) : "";
            } catch (error) {
                log("LOAD_CONFIRM_READ_FAILED", {side: side, error: String(error)});
            }
            if (loadedIdentity === verification.identity) {
                state.loadVerification[side] = null;
                state.loadStatus[side] = 0;
                state.display[side].revision += 1;
                publishSurfaceState(side);
                closeBrowser("LOAD_CONFIRMED", side);
                log("LOAD_CONFIRMED", {side: side, targetDeck: targetDeck, identity: loadedIdentity});
                return;
            }
            if (verification.attempt >= 10) {
                state.loadVerification[side] = null;
                showLoadRejection(side, "MIXXX_DID_NOT_CONFIRM");
                log("LOAD_REJECTED", {side: side, targetDeck: targetDeck,
                    expectedIdentity: verification.identity, loadedIdentity: loadedIdentity});
                return;
            }
            verification.timerId = beginOneShot(50, verifyLoad);
        }
        verification.timerId = beginOneShot(50, verifyLoad);
    }

    function clearLoadRejection(side, reason) {
        if (state.loadRejectTimer[side]) {
            stopTimer(state.loadRejectTimer[side]);
            state.loadRejectTimer[side] = 0;
        }
        if (state.loadStatus[side] !== 2) {
            return false;
        }
        state.loadStatus[side] = 0;
        state.loadRejectReason[side] = 0;
        state.display[side].revision += 1;
        publishSurfaceState(side);
        log("LOAD_REJECTION_CLOSED", {side: side, reason: reason});
        return true;
    }

    function showLoadRejection(side, reason) {
        clearLoadRejection(side, "REPLACED");
        state.loadStatus[side] = 2;
        state.loadRejectReason[side] = reason === "DECK_PLAYING" ? 1 :
            (reason === "NO_SELECTION" ? 2 : 3);
        // Android parity: a real rejection is a WARNING ranked popup, so a BPM or
        // LOOP SIZE notice can never hide it. The historical load_status keys are
        // still published for the preserved 291 footer rendering.
        showTemporaryPopup(side, POPUP_KIND.WARNING,
            reason === "DECK_PLAYING" ? POPUP_TITLE.DECK_LOCKED : POPUP_TITLE.LOADING,
            0, POPUP_PRIORITY.WARNING);
        state.display[side].revision += 1;
        publishSurfaceState(side);
        state.loadRejectTimer[side] = beginOneShot(1500, function() {
            if (!active || state.loadStatus[side] !== 2) {
                return;
            }
            state.loadRejectTimer[side] = 0;
            state.loadStatus[side] = 0;
            state.loadRejectReason[side] = 0;
            state.display[side].revision += 1;
            publishSurfaceState(side);
            log("LOAD_REJECTION_CLOSED", {side: side, reason: "TIMEOUT_1500MS"});
        });
        log("LOAD_REJECTION_SHOWN", {side: side, reason: reason, milliseconds: 1500});
    }

    function consumeHeldBrowseGestures(triggerSide) {
        ["LEFT", "RIGHT"].forEach(function(side) {
            var current = state.browseDown[side];
            if (!current) {
                return;
            }
            if (side !== triggerSide && current.timerId) {
                stopTimer(current.timerId);
            }
            current.timerId = 0;
            current.consumed = true;
            current.consumedBy = triggerSide;
        });
    }

    function cancelBrowseGestures(reason) {
        ["LEFT", "RIGHT"].forEach(function(side) {
            var current = state && state.browseDown[side];
            if (!current) {
                return;
            }
            if (current.timerId) {
                stopTimer(current.timerId);
            }
            state.browseDown[side] = null;
            log("BROWSE_GESTURE_CANCELLED", {
                side: side,
                reason: reason,
                targetDeck: current.targetDeck
            });
        });
    }

    function browsePress(controlId, side) {
        if (state.browseDown[side]) {
            log("BROWSE_DUPLICATE_PRESS_IGNORED", {side: side});
            return;
        }
        syncProgramBrowserState("BROWSE_PRESS_SYNC", false);
        var context = state.programBrowserExpanded && state.browserVisible[side] ?
            "PROGRAM_BROWSER_EXPANDED" : "PROGRAM_BROWSER_COLLAPSED";
        var down = {
            context: context,
            consumed: false,
            consumedBy: null,
            timerId: 0,
            startedAt: Date.now(),
            targetDeck: deckForSide(side),
            focusRevision: state.focusRevision[side],
            simultaneous: false,
            sameReportHazards: []
        };
        var otherSide = side === "LEFT" ? "RIGHT" : "LEFT";
        if (state.browseDown[otherSide]) {
            down.simultaneous = true;
            state.browseDown[otherSide].simultaneous = true;
            log("BROWSE_SIMULTANEOUS_GESTURE", {firstSide: otherSide, secondSide: side});
        }
        state.browseDown[side] = down;
        down.timerId = beginOneShot(BROWSE_HOLD_MS, function() {
            var current = state.browseDown[side];
            if (!active || !current || current !== down || current.consumed) {
                return;
            }
            // First threshold wins. Any other Browse knob already held is consumed
            // and its timer cancelled, so a simultaneous gesture toggles once.
            consumeHeldBrowseGestures(side);
            var wasExpanded = syncProgramBrowserState("LONG_THRESHOLD_SYNC", false);
            if (wasExpanded) {
                closeBrowser("LONG_PRESS_1500MS", side);
            } else {
                openBrowser(side, "LONG_PRESS_1500MS");
            }
            log("BROWSE_LONG_" + side, {
                milliseconds: BROWSE_HOLD_MS,
                action: wasExpanded ? "COLLAPSE" : "EXPAND"
            });
            log("BROWSE_LONG_PRESS_CONSUMED", {side: side, milliseconds: BROWSE_HOLD_MS});
        });
        log("BROWSE_PUSH_DOWN", {side: side, context: context, targetDeck: down.targetDeck});
    }

    function browseRelease(side) {
        var down = state.browseDown[side];
        if (!down) {
            return;
        }
        if (down.timerId) {
            stopTimer(down.timerId);
            down.timerId = 0;
        }
        state.browseDown[side] = null;
        if (down.consumed) {
            log("LONG_RELEASE_CONSUMED", {side: side, consumedBy: down.consumedBy});
            log("BROWSE_RELEASE_CONSUMED", {side: side});
            return;
        }
        if (down.simultaneous) {
            log("LOAD_BLOCKED_SIMULTANEOUS_BROWSE", {side: side, targetDeck: down.targetDeck});
            return;
        }
        if (down.sameReportHazards && down.sameReportHazards.length > 0) {
            log("LOAD_BLOCKED_SAME_REPORT_RACE", {
                side: side,
                targetDeck: down.targetDeck,
                hazards: down.sameReportHazards.slice()
            });
            return;
        }
        // Traktor S8 parity: sorting is applied directly by Performance knob 1.
        // A subsequent Browse push dismisses the informational popup and keeps
        // its normal enter/load behavior.
        if (state.popup[side].kind === POPUP_KIND.SELECTION) {
            cancelSort(side);
        }
        if (down.context === "PROGRAM_BROWSER_COLLAPSED") {
            openBrowser(side, "BROWSE_PUSH_DECK_VIEW");
            return;
        }
        var focusedWidget = Math.round(safeGet("[Library]", "focused_widget"));
        if (focusedWidget === 2) {
            pulse("[Library]", "GoToItem");
            log("BROWSER_TREE_ENTER", {side: side});
            return;
        }
        requestLoad(side, down.targetDeck, down.focusRevision);
    }

    function browseTurn(side, event) {
        if (state.programBrowserExpanded && !state.browserVisible[side]) {
            log("BROWSER_TURN_BLOCKED_OTHER_OWNER", {side: side});
            return;
        }
        var magnitude = clamp(Math.abs(event.delta || 1), 1, 16);
        // ROTARY is the sole early-dismiss gesture for a rejected load. The
        // same movement must continue into normal navigation.
        clearLoadRejection(side, "BROWSE_ROTARY");
        if (state.display[side].settingsOpen) {
            state.display[side].settingsPage = wrapIndex(state.display[side].settingsPage,
                event.direction === "CW" ? 1 : -1, 12);
            state.display[side].revision += 1;
            publishSurfaceState(side);
            log("DISPLAY_SETTINGS_NAVIGATE", {side: side,
                page: state.display[side].settingsPage + 1});
            return;
        }
        var display = state.display[side];
        var group = groupForSide(side);
        if (display.activePanel === ACTIVE_PANEL.BPM) {
            var step = bpmStep(state.shifted[side]);
            var currentBpm = safeGet(group, "bpm") || safeGet(group, "visual_bpm");
            // Decoder 269 reports the raw decrement as CW (the same
            // operational inversion used by Browser navigation).  Preserve
            // that correction locally: physical clockwise raises BPM.
            var bpmDelta = event.direction === "CW" ? -step : step;
            if (currentBpm > 0) {
                var requestedBpm = quantizeBpm(Math.max(1, currentBpm + bpmDelta * magnitude));
                var written = safeSet(group, "bpm", requestedBpm);
                var actualBpm = safeGet(group, "bpm");
                log("BPM_WRITE_RESULT", {side: side, requestedBpm: requestedBpm,
                    actualBpm: actualBpm, accepted: written && Math.abs(actualBpm - requestedBpm) < 0.0001});
            }
            log("BPM_ACTUATED", {side: side, delta: bpmDelta * magnitude});
            return;
        }
        if (display.activePanel === ACTIVE_PANEL.KEY) {
            var pitchControl = event.direction === "CW" ? "pitch_up" : "pitch_down";
            if (!state.shifted[side]) {
                pitchControl += "_small";
            }
            for (var pitchStep = 0; pitchStep < magnitude; pitchStep += 1) {
                pulse(group, pitchControl);
            }
            log("KEY_ACTUATED", {side: side, control: pitchControl, steps: magnitude});
            return;
        }
        // Decoder truth: canonical CW_DECREASES yields decoded direction "CW" for
        // a raw nibble decrement. Mixxx LibraryControl maps +1 to next/down.
        // Mission 283: invert only Browser Rotary navigation direction.
        // Loop Rotary and every other relative encoder remain untouched.
        var acceleration = state.shifted[side] ? 10 : 1;
        var signed = (event.direction === "CW" ? -magnitude : magnitude) * acceleration;
        safeSet("[Library]", "MoveVertical", signed);
        log("ROTARY_" + side, {
            decodedDirection: event.direction,
            delta: signed,
            semanticDirection: signed > 0 ? "DOWN" : "UP"
        });
        log("BROWSER_NAVIGATE_GLOBAL", {
            side: side,
            decodedDirection: event.direction,
            semanticDirection: signed > 0 ? "DOWN" : "UP",
            mixxxDelta: signed,
            programBrowserExpanded: state.programBrowserExpanded
        });
    }

    function loopTurn(side, event) {
        var group = groupForSide(side);
        var steps = clamp(Math.abs(event.delta || 1), 1, 4);
        if ((state.padMode[side] === "FREEZE" || state.padMode[side] === "SLICER") &&
                state.touch["BtnSliceButton" + (side === "LEFT" ? "Left" : "Right")]) {
            state.sliceSizeIndex[side] = clamp(state.sliceSizeIndex[side] +
                (event.direction === "CW" ? 1 : -1), 0, SLICE_SIZES.length - 1);
            publishSurfaceState(side);
            log("SLICE_SIZE", {side: side, beats: SLICE_SIZES[state.sliceSizeIndex[side]]});
            captureSlices(side);
            publishSurfaceState(side);
            return;
        }
        var control;
        var sizeBefore = safeGet(group, "beatloop_size", 0);
        if (state.shifted[side]) {
            control = event.direction === "CW" ? "beatjump_forward" : "beatjump_backward";
            safeSet(group, "beatjump_size", safeGet(group, "beatloop_size", 1) || 1);
        } else {
            control = event.direction === "CW" ? "loop_double" : "loop_halve";
        }
        for (var i = 0; i < steps; i += 1) {
            pulse(group, control);
        }
        if (!state.shifted[side] && (state.loopTouched[side] ||
                state.popup[side].title === POPUP_TITLE.LOOP_SIZE)) {
            var sizeAfter = safeGet(group, "beatloop_size", sizeBefore);
            var expected = event.direction === "CW" ?
                sizeBefore * Math.pow(2, steps) : sizeBefore / Math.pow(2, steps);
            var popupValue = finite(sizeAfter) && sizeAfter !== sizeBefore ? sizeAfter : expected;
            showTemporaryPopup(side, POPUP_KIND.INFORMATION, POPUP_TITLE.LOOP_SIZE,
                popupValue, POPUP_PRIORITY.INFORMATION);
        }
        log("LOOP_SIZE", {side: side, direction: event.direction, steps: steps});
    }

    function toggleFxSelect(side) {
        if (state.browserVisible[side]) {
            log("FX_SELECT_BLOCKED_BROWSER_VISIBLE", {side: side});
            return;
        }
        state.fxSelectVisible[side] = !state.fxSelectVisible[side];
        updateFxSelectLed285(side, "FX_SELECT_TOGGLE");
        publishSurfaceState(side);
        log("FX_SELECT", {side: side, visible: state.fxSelectVisible[side], slot: state.fxSelectSlot[side]});
    }

    function touchIndex(controlId, family) {
        var regex;
        if (family === "FX") {
            regex = /^CapFx([1-4])Knob(Left|Right)$/;
        } else if (family === "SCREEN") {
            regex = /^CapKnob([1-4])(Left|Right)$/;
        } else if (family === "FADER") {
            regex = /^CapFader([1-4])(Left|Right)$/;
        }
        var match = regex ? regex.exec(controlId) : null;
        return match ? Number(match[1]) - 1 : -1;
    }

    function updateTouch(controlId, pressed) {
        var side = sideOf(controlId);
        state.touch[controlId] = pressed;
        if (side) {
            state.lastSide = side;
            updateLedField285("QUANTIZE", safeGet(groupForSide(side), "quantize") > 0, "FOCUS_QUANTIZE");
        }
        if (/^CapBrowseKnob/.test(controlId)) {
            if (pressed) {
                prewarmBrowse(side);
            }
            return;
        }
        var index = touchIndex(controlId, "FX");
        if (index >= 0) {
            if (pressed) {
                state.fxTouchMask[side] |= 1 << index;
                if (index >= 1) {
                    state.fxSelectSlot[side] = index;
                }
            } else {
                state.fxTouchMask[side] &= ~(1 << index);
            }
            publishSurfaceState(side);
            log("FX_TOUCH", {side: side, index: index + 1, pressed: pressed, mask: state.fxTouchMask[side]});
            return;
        }
        index = touchIndex(controlId, "SCREEN");
        if (index >= 0) {
            if (pressed) {
                state.screenTouchMask[side] |= 1 << index;
            } else {
                state.screenTouchMask[side] &= ~(1 << index);
            }
            publishSurfaceState(side);
            log("SCREEN_KNOB_TOUCH", {side: side, index: index + 1, pressed: pressed, mask: state.screenTouchMask[side]});
            return;
        }
        index = touchIndex(controlId, "FADER");
        if (index >= 0) {
            if (pressed) {
                state.faderTouchMask[side] |= 1 << index;
            } else {
                state.faderTouchMask[side] &= ~(1 << index);
            }
            publishSurfaceState(side);
            log("PERFORMANCE_FADER_TOUCH", {side: side, index: index + 1, pressed: pressed, mask: state.faderTouchMask[side]});
            return;
        }
        if (/^CapLoopKnob/.test(controlId)) {
            state.loopTouched[side] = pressed;
            publishSurfaceState(side);
            if (pressed) {
                if (state.shifted[side]) {
                    if (state.popup[side].title === POPUP_TITLE.LOOP_SIZE) {
                        closePopup(side, false);
                    }
                    log("LOOP_TOUCH_SUPPRESSED_SHIFT", {side: side, pressed: true});
                    return;
                }
                // Android parity (M10004 item 5): the LOOP touch gate only
                // announces the current loop size. It never writes beatloop_size;
                // the beatloop family follows the rotary as before.
                var loopSize = safeGet(groupForSide(side), "beatloop_size", 0);
                showTemporaryPopup(side, POPUP_KIND.INFORMATION, POPUP_TITLE.LOOP_SIZE,
                    loopSize, POPUP_PRIORITY.INFORMATION);
                log("LOOP_TOUCH", {side: side, pressed: pressed, loopSize: loopSize,
                    beatloopWrite: false});
                return;
            }
            log("LOOP_TOUCH", {side: side, pressed: pressed});
            return;
        }
        if (/^BtnTouchstrip/.test(controlId)) {
            if (pressed) {
                startTouchstripGesture(side);
            } else {
                cleanupTouchstrip(side, true);
            }
            return;
        }
        log("TOUCH_CONTEXT", {controlId: controlId, side: side, pressed: pressed});
    }

    function startTouchstripGesture(side) {
        var group = groupForSide(side);
        // Targeted Windows diagnostic: while the physical touch gate is held,
        // compare complete IF5 carriers and log only bytes that actually change.
        // This does not assign a position field or modify baseline 255.
        state.touchstripRawTrace.activeSide = side;
        state.touchstripRawTrace.remaining = 256;
        state.touchstripRawTrace.previousByFamily = Object.create(null);
        state.touchstripRawTrace.lastDelta = null;
        state.touchstripRawTrace.deltaCount = 0;
        var playing = safeGet(group, "play_indicator") || safeGet(group, "play");
        var mode = state.shifted[side] ? "SEEK" : (playing ? "BEND" : "SCRATCH");
        // Lock deck ownership and interaction mode until release. The first
        // valid position sample establishes the relative reference for BEND or
        // SCRATCH, and is itself the absolute target for SEEK.
        state.touchstripGesture[side] = {
            side: side,
            deck: deckForSide(side),
            group: group,
            mode: mode,
            lastPosition: null,
            movementAvailable: false,
            scratchArmed: false
        };
        refreshPhaseMeter285(side, "TOUCHSTRIP_GESTURE_START", true);
        publishSurfaceState(side);
        log("TOUCHSTRIP_TOUCH_DOWN", {side: side, deck: deckForSide(side), mode: mode, contract: "MISSION_274"});
    }

    function cleanupTouchstrip(side, logRelease) {
        if (!state || !state.touchstripGesture) {
            return;
        }
        var gesture = state.touchstripGesture[side];
        if (!gesture) {
            return;
        }
        if (gesture.scratchArmed) {
            try {
                if (typeof engine.scratchDisable === "function") {
                    engine.scratchDisable(gesture.deck, true);
                }
            } catch (error) {
                log("SCRATCH_DISABLE_FAILED", {side: side, error: String(error)});
            }
        }
        if (gesture.mode === "BEND") {
            safeSet(gesture.group, "jog", 0);
        }
        state.touchstripGesture[side] = null;
        refreshPhaseMeter285(side, "TOUCHSTRIP_GESTURE_END", true);
        if (state.touchstripRawTrace.activeSide === side) {
            state.touchstripRawTrace.activeSide = null;
            state.touchstripRawTrace.remaining = 0;
        }
        publishSurfaceState(side);
        if (logRelease) {
            log("TOUCHSTRIP_TOUCH_UP", {side: side, cleanup: true});
        }
    }

    function traceTouchstripRaw(data, length) {
        var trace = state && state.touchstripRawTrace;
        if (!trace || !trace.activeSide || trace.remaining <= 0 || !data) {
            return;
        }
        var bytes = [];
        for (var i = 0; i < length; i += 1) {
            bytes.push(Number(data[i]) & 0xFF);
        }
        var reportId = bytes.length ? bytes[0] : -1;
        var family = String(reportId) + "/" + String(length);
        var previous = trace.previousByFamily[family];
        trace.previousByFamily[family] = bytes;
        if (!previous || previous.length !== bytes.length) {
            log("TOUCHSTRIP_RAW_TRACE_BASELINE", {side: trace.activeSide, family: family, bytes: bytes.length});
            return;
        }
        var changed = [];
        for (var offset = 0; offset < bytes.length; offset += 1) {
            if (bytes[offset] !== previous[offset]) {
                changed.push({offset: offset, before: previous[offset], after: bytes[offset]});
            }
        }
        if (!changed.length) {
            return;
        }
        trace.remaining -= 1;
        trace.deltaCount += 1;
        trace.lastDelta = {side: trace.activeSide, family: family, changed: changed};
        log("TOUCHSTRIP_RAW_DELTA_CANDIDATE", {
            side: trace.activeSide,
            family: family,
            changed: changed,
            remaining: trace.remaining,
            baselineMutation: false
        });
    }

    function applyTouchstripMovement(side, position) {
        var gesture = state.touchstripGesture[side];
        if (!gesture || !finite(position)) {
            return false;
        }
        position = clamp(Math.round(position), 0, TOUCHSTRIP_MAX);
        var normalized = position / TOUCHSTRIP_MAX;
        // Mission 281: adapt only BEND to the active D2 Bridge transfer
        // function. Scratch and Seek continue to consume the native S8 sample.
        var movementSample = gesture.mode === "BEND" ?
            Math.round(position * 127 / TOUCHSTRIP_MAX) : position;
        if (gesture.lastPosition === null) {
            gesture.lastPosition = movementSample;
            gesture.movementAvailable = true;
            if (gesture.mode === "SCRATCH" && typeof engine.scratchEnable === "function") {
                try {
                    engine.scratchEnable(gesture.deck, 128, 33.333333, 0.125, 0.00390625, true);
                    gesture.scratchArmed = true;
                } catch (error) {
                    log("SCRATCH_ENABLE_FAILED", {side: side, error: String(error)});
                }
            } else if (gesture.mode === "SEEK") {
                safeSet(gesture.group, "playposition", normalized);
            }
            return true;
        }
        var delta = movementSample - gesture.lastPosition;
        gesture.lastPosition = movementSample;
        if (gesture.mode === "BEND") {
            if (delta === 0) {
                return true;
            }
            delta = clamp(delta, -8, 8);
            safeSet(gesture.group, "jog", -delta * 0.5);
        } else if (gesture.mode === "SCRATCH" && gesture.scratchArmed && typeof engine.scratchTick === "function") {
            if (delta !== 0) {
                try {
                    engine.scratchTick(gesture.deck, clamp(
                        delta,
                        -TOUCHSTRIP_SCRATCH_TICK_LIMIT,
                        TOUCHSTRIP_SCRATCH_TICK_LIMIT));
                } catch (error) {
                    log("SCRATCH_TICK_FAILED", {side: side, error: String(error)});
                }
            }
        } else if (gesture.mode === "SEEK") {
            safeSet(gesture.group, "playposition", normalized);
        }
        return true;
    }

    function consumeTouchstripPosition274(data, length) {
        if (!data || length < 36 || (Number(data[0]) & 0xFF) !== 1) {
            return;
        }
        ["LEFT", "RIGHT"].forEach(function(side) {
            var gate = (Number(data[TOUCHSTRIP_GATE_OFFSET[side]]) & 0x01) !== 0;
            if (!gate) {
                return;
            }
            applyTouchstripMovement(side, Number(data[TOUCHSTRIP_POSITION_OFFSET[side]]) & 0xFF);
        });
    }

    function analogTarget(controlId) {
        var match;
        if (controlId === "XfdCrossfaderMixer") {
            return {group: "[Master]", key: "crossfader", role: "CROSSFADER"};
        }
        match = /^FadLinefader([ABCD])Mixer$/.exec(controlId);
        if (match) {
            return {group: groupForChannelLetter(match[1]), key: "volume", role: "LINEFADER"};
        }
        match = /^KnbGain([ABCD])Mixer$/.exec(controlId);
        if (match) {
            return {group: groupForChannelLetter(match[1]), key: "pregain", role: "GAIN"};
        }
        match = /^Knb(Hi|Mid|Low)([ABCD])Mixer$/.exec(controlId);
        if (match) {
            var parameter = match[1] === "Low" ? "parameter1" : (match[1] === "Mid" ? "parameter2" : "parameter3");
            var channel = channelFromLetter(match[2]);
            return {group: "[EqualizerRack1_[Channel" + channel + "]_Effect1]", key: parameter, role: "EQ_" + match[1].toUpperCase()};
        }
        match = /^KnbFilter([ABCD])Mixer$/.exec(controlId);
        if (match) {
            var filterChannel = channelFromLetter(match[1]);
            return {group: "[QuickEffectRack1_[Channel" + filterChannel + "]]", key: "super1", role: "FILTER"};
        }
        match = /^KnbFx([1-4])Knob(Left|Right)$/.exec(controlId);
        if (match) {
            var side = match[2] === "Left" ? "LEFT" : "RIGHT";
            var fxIndex = Number(match[1]);
            if (fxIndex === 1) {
                return {group: effectUnitGroup(side), key: "mix", role: "FX_MIX", side: side};
            }
            if (effectMode(side) === "SINGLE") {
                return {group: effectSlotGroup(side, state.fxSelectSlot[side] || 1),
                    key: "parameter" + (fxIndex - 1), role: "FX_SINGLE_PARAMETER", side: side};
            }
            return {group: effectSlotGroup(side, fxIndex - 1), key: "meta", role: "FX_META", side: side};
        }
        match = /^FadFader([1-4])(Left|Right)$/.exec(controlId);
        if (match) {
            var faderSide = match[2] === "Left" ? "LEFT" : "RIGHT";
            var sampler = samplerForStrip(faderSide, Number(match[1]));
            return {group: "[Sampler" + sampler + "]", key: "volume", role: "PERFORMANCE_FADER", side: faderSide};
        }
        return null;
    }

    function normalizeAnalog(controlId, rawValue) {
        var control = controls[controlId];
        if (!control || control.signal_type !== "ANALOG") {
            return null;
        }
        var max = control.field.field_width === 1 ? ANALOG_MAX_NIBBLE : ANALOG_MAX_12BIT;
        if (!finite(rawValue) || rawValue < 0 || rawValue > max) {
            log("ANALOG_REJECTED_OUT_OF_RANGE", {controlId: controlId, rawValue: rawValue, max: max});
            return null;
        }
        var normalized = rawValue / max;
        var decreasing = control.direction === "DECREASING";
        if (ANALOG_DIRECTION_FLIP_269[controlId]) {
            decreasing = !decreasing;
        }
        if (decreasing) {
            normalized = 1 - normalized;
        }
        return clamp(normalized, 0, 1);
    }

    // -----------------------------------------------------------------------
    // Android parity: arbitrated temporary popups (M10004/M10006 contract).
    // Priority is SELECTION > WARNING > INFORMATION and a lower ranked popup
    // can never replace a higher ranked one. Every path below publishes both
    // the unified bridge keys and the historical 291 keys, so the renderer and
    // the preserved offline tests keep their previous inputs.
    // -----------------------------------------------------------------------
    function closePopup(side, restoreFocus) {
        var popup = state.popup[side];
        if (popup.timerId) {
            stopTimer(popup.timerId);
        }
        if (restoreFocus && finite(popup.previousFocus)) {
            safeSet("[Library]", "focused_widget", popup.previousFocus);
        }
        popup.phase = POPUP_PHASE.RESTORE_FOCUS;
        state.popup[side] = closedPopupState();
        state.masterTempoPopup = state.popup.LEFT.title === POPUP_TITLE.BPM ||
            state.popup.RIGHT.title === POPUP_TITLE.BPM;
        state.display[side].revision += 1;
        publishSurfaceState(side);
    }

    function showTemporaryPopup(side, kind, title, value, priority) {
        var current = state.popup[side];
        if (current.kind === POPUP_KIND.SELECTION || current.priority > priority) {
            log("POPUP_SUPPRESSED", {side: side, title: title, kind: kind, priority: priority,
                currentKind: current.kind, currentPriority: current.priority});
            return false;
        }
        if (current.timerId) {
            stopTimer(current.timerId);
        }
        state.popup[side] = {
            kind: kind,
            phase: POPUP_PHASE.OPEN,
            title: title,
            value: finite(value) ? Number(value) : 0,
            hasValue: finite(value),
            priority: priority,
            deck: deckForSide(side),
            master: false,
            timerId: 0,
            previousFocus: null,
            pendingIndex: 0,
            pendingDescending: false,
            pendingCriteria: 0
        };
        var popup = state.popup[side];
        popup.timerId = beginOneShot(TEMPORARY_POPUP_MS, function() {
            if (state.popup[side].kind === kind && state.popup[side].title === title) {
                closePopup(side, false);
            }
        });
        state.display[side].revision += 1;
        publishSurfaceState(side);
        log("POPUP_OPEN", {side: side, title: title, kind: kind, priority: priority,
            value: popup.hasValue ? popup.value : null, milliseconds: TEMPORARY_POPUP_MS});
        return true;
    }

    function showMasterTempoPopupEverywhere(reason, kind, value, priority) {
        var shown = false;
        ["LEFT", "RIGHT"].forEach(function(side) {
            if (showTemporaryPopup(side, kind, POPUP_TITLE.BPM, value, priority)) {
                state.popup[side].master = true;
                state.popup[side].deck = 0;
                shown = true;
            }
        });
        state.masterTempoPopup = state.popup.LEFT.title === POPUP_TITLE.BPM ||
            state.popup.RIGHT.title === POPUP_TITLE.BPM;
        log("MASTER_TEMPO_POPUP", {reason: reason, bpm: masterTempoBpm(),
            group: masterTempoGroup(), shown: shown});
        return shown;
    }

    function nativeSortCriteria() {
        var browserSort = nativeBrowserSortState();
        return Array.isArray(browserSort.sortCriteria) ? browserSort.sortCriteria : [];
    }

    function criteriaIndexOf(criteria, columnId) {
        for (var index = 0; index < criteria.length; index += 1) {
            if (Number(criteria[index].id) === Number(columnId)) {
                return index;
            }
        }
        return -1;
    }

    function sortPopupValue(popup, criteria) {
        var criterion = criteria[popup.pendingIndex] || {};
        var label = String(criterion.label || "UNAVAILABLE").toUpperCase();
        return label + (popup.pendingDescending ? " DESCENDING" : " ASCENDING");
    }

    // Android M10004 item 3: SORT BY is an explicit interactive state
    // (OPEN/SELECTING -> CONFIRM/CANCEL -> CLOSE -> RESTORE_FOCUS) instead of a
    // fixed 1200 ms notification that the sort already happened.
    function openSortPopup(side) {
        var current = state.popup[side];
        if (current.kind === POPUP_KIND.SELECTION && current.title === POPUP_TITLE.SORT_BY) {
            return current;
        }
        var criteria = nativeSortCriteria();
        if (!criteria.length) {
            log("BROWSER_SORT_UNAVAILABLE", {side: side, reason: "NO_NATIVE_SORT_CRITERIA"});
            return null;
        }
        var browserSort = nativeBrowserSortState();
        var index = criteriaIndexOf(criteria, browserSort.sortColumnId);
        if (current.timerId) {
            stopTimer(current.timerId);
        }
        state.popup[side] = {
            kind: POPUP_KIND.SELECTION,
            phase: POPUP_PHASE.SELECTING,
            title: POPUP_TITLE.SORT_BY,
            value: 0,
            hasValue: false,
            priority: POPUP_PRIORITY.SELECTION,
            deck: deckForSide(side),
            master: false,
            timerId: 0,
            previousFocus: safeGet("[Library]", "focused_widget"),
            pendingIndex: index < 0 ? 0 : index,
            pendingDescending: !!browserSort.sortDescending,
            pendingCriteria: criteria.length
        };
        state.browserSortPopupVisible[side] = true;
        state.display[side].revision += 1;
        publishSurfaceState(side);
        log("BROWSER_SORT_OPEN", {side: side, index: state.popup[side].pendingIndex,
            criteria: criteria.length, descending: state.popup[side].pendingDescending});
        return state.popup[side];
    }

    function selectSort(side, steps) {
        var popup = openSortPopup(side);
        if (!popup) {
            return false;
        }
        var count = Math.max(1, popup.pendingCriteria);
        var direction = steps >= 0 ? 1 : -1;
        var magnitude = Math.min(Math.abs(steps), 16);
        popup.pendingIndex = ((popup.pendingIndex + direction * magnitude) % count + count) % count;
        popup.phase = POPUP_PHASE.SELECTING;
        state.display[side].revision += 1;
        publishSurfaceState(side);
        log("BROWSER_SORT_SELECTING", {side: side, index: popup.pendingIndex,
            descending: popup.pendingDescending});
        return applyPendingSort(side, false);
    }

    function armSortPopupDismiss(side) {
        stopTimer(state.browserSortPopupTimer[side]);
        state.browserSortPopupTimer[side] = beginOneShot(TEMPORARY_POPUP_MS, function() {
            state.browserSortPopupTimer[side] = 0;
            if (state.popup[side].kind === POPUP_KIND.SELECTION &&
                    state.popup[side].title === POPUP_TITLE.SORT_BY) {
                state.browserSortPopupVisible[side] = false;
                closePopup(side, true);
            }
        });
    }

    function applyPendingSort(side, closeAfter) {
        var popup = state.popup[side];
        if (popup.kind !== POPUP_KIND.SELECTION || popup.title !== POPUP_TITLE.SORT_BY) {
            return false;
        }
        var criteria = nativeSortCriteria();
        var criterion = criteria[popup.pendingIndex];
        if (!criterion) {
            log("BROWSER_SORT_UNAVAILABLE", {side: side, reason: "PENDING_CRITERION_UNAVAILABLE"});
            closePopup(side, true);
            return false;
        }
        var sorted = false;
        try {
            sorted = typeof engine.s8BrowserSort === "function" &&
                engine.s8BrowserSort(Number(criterion.id), popup.pendingDescending);
        } catch (error) {
            log("BROWSER_SORT_FAILED", {side: side, error: String(error)});
        }
        state.browserSortIndex[side] = popup.pendingIndex;
        state.browserSortDescending[side] = popup.pendingDescending;
        log("BROWSER_SORT", {side: side, columnId: Number(criterion.id),
            label: criterion.label, descending: popup.pendingDescending,
            changed: !!sorted, trigger: closeAfter ? "CONFIRM" : "DIRECT",
            popupMilliseconds: closeAfter ? 0 : TEMPORARY_POPUP_MS});
        if (closeAfter) {
            state.browserSortPopupVisible[side] = false;
            closePopup(side, true);
        } else {
            armSortPopupDismiss(side);
        }
        return !!sorted;
    }

    function toggleSortDirection(side) {
        var popup = openSortPopup(side);
        if (!popup) {
            return false;
        }
        popup.pendingDescending = !popup.pendingDescending;
        popup.phase = POPUP_PHASE.SELECTING;
        state.display[side].revision += 1;
        publishSurfaceState(side);
        log("BROWSER_SORT_DIRECTION", {side: side, index: popup.pendingIndex,
            descending: popup.pendingDescending});
        return applyPendingSort(side, false);
    }

    function confirmSort(side) {
        var popup = state.popup[side];
        if (popup.kind !== POPUP_KIND.SELECTION || popup.title !== POPUP_TITLE.SORT_BY) {
            return false;
        }
        popup.phase = POPUP_PHASE.CONFIRM;
        return applyPendingSort(side, true);
    }

    function cancelSort(side) {
        var popup = state.popup[side];
        if (popup.kind !== POPUP_KIND.SELECTION) {
            return false;
        }
        popup.phase = POPUP_PHASE.CANCEL;
        state.browserSortPopupVisible[side] = false;
        closePopup(side, true);
        log("BROWSER_SORT_CANCELLED", {side: side});
        return true;
    }

    function nativeBrowserSortState() {
        try {
            if (typeof engine.getS8BrowserState === "function") {
                return engine.getS8BrowserState(5) || {};
            }
        } catch (error) {
            log("BROWSER_SORT_STATE_FAILED", {error: String(error)});
        }
        return {};
    }

    function handleEndKnob(event) {
        var id = event.controlId;
        var side = sideOf(id);
        var previous = state.endKnobRaw[id];
        state.endKnobRaw[id] = event.rawValue;
        if (previous === undefined || previous === null) {
            return;
        }
        var delta = (event.rawValue - previous + ENDKNOB_MODULUS) % ENDKNOB_MODULUS;
        if (delta === ENDKNOB_MODULUS / 2) {
            log("ENDKNOB_AMBIGUOUS_HALF_MODULUS", {controlId: id, rawValue: event.rawValue});
            return;
        }
        if (delta > ENDKNOB_MODULUS / 2) {
            delta -= ENDKNOB_MODULUS;
        }
        state.endKnobDelta[id] = delta;
        var knobMatch = /^EndKnob([1-4])(Left|Right)$/.exec(id);
        if (knobMatch && state.fxSelectVisible[side] && delta !== 0) {
            var fxState = nativeEffectState(side);
            var effects = fxState && fxState.visibleEffects ? fxState.visibleEffects : [];
            var fxSlot = state.fxSelectSlot[side] || 1;
            var loaded = fxState && fxState.slots && fxState.slots[fxSlot - 1] ?
                Number(fxState.slots[fxSlot - 1].loadedEffect) - 1 : -1;
            if (effects.length && typeof engine.s8LoadEffect === "function") {
                var nextEffect = wrapIndex(loaded < 0 ? 0 : loaded,
                    delta > 0 ? 1 : -1, effects.length);
                var loadedOk = engine.s8LoadEffect(effectUnitForSide(side), fxSlot, nextEffect);
                log("FX_EFFECT_SELECTED", {side: side, unit: effectUnitForSide(side), slot: fxSlot,
                    index: nextEffect, name: effects[nextEffect] ? effects[nextEffect].name : "",
                    changed: !!loadedOk});
            }
            return;
        }
        if (knobMatch && state.browserVisible[side] && delta !== 0) {
            var knob = Number(knobMatch[1]);
            if (knob === 1) {
                // Android parity: the rotary only moves the pending selection.
                // Mixxx is sorted when the operator confirms, never on the turn.
                selectSort(side, delta);
                return;
            }
            if (knob === 4 && state.preview.active && state.preview.side === side) {
                var seekStep = 1;
                try {
                    if (typeof engine.getS8Preference === "function") {
                        seekStep = engine.getS8Preference("preview_seek_seconds", 1);
                    }
                } catch (preferenceError) {
                    log("PREVIEW_PREFERENCE_FAILED", {side: side, error: String(preferenceError)});
                }
                var seconds = (delta > 0 ? 1 : -1) * Math.min(Math.abs(delta), 16) * seekStep *
                    (state.shifted[side] ? 10 : 1);
                var moved = false;
                try {
                    moved = typeof engine.s8PreviewSeek === "function" && engine.s8PreviewSeek(seconds);
                } catch (error) {
                    log("PREVIEW_SEEK_FAILED", {side: side, error: String(error)});
                }
                log("PREVIEW_SEEK", {side: side, seconds: seconds, moved: !!moved,
                    trigger: "LOWER_ENCODER_4"});
                return;
            }
        }
        log("ENDKNOB_RELATIVE", {
            controlId: id,
            side: side,
            rawValue: event.rawValue,
            previousRaw: previous,
            delta: delta,
            modulus: ENDKNOB_MODULUS,
            engineWrite: false,
            role: "FUNCTIONAL_CONTEXT"
        });
    }

    function handleAbsolute(event) {
        var id = event.controlId;
        if (/^EndKnob[1-4](Left|Right)$/.test(id)) {
            handleEndKnob(event);
            return;
        }
        var target = analogTarget(id);
        if (!target) {
            log("ABSOLUTE_CONTEXT_ONLY", {controlId: id, rawValue: event.rawValue});
            return;
        }
        var normalized = normalizeAnalog(id, event.rawValue);
        if (normalized === null) {
            return;
        }
        safeSetParameter(target.group, target.key, normalized);
        log("ANALOG_ACTION", {
            controlId: id,
            group: target.group,
            key: target.key,
            role: target.role,
            rawValue: event.rawValue,
            normalized: normalized
        });
    }

    function initializeSnapshot(snapshot) {
        var id = snapshot.controlId;
        if (/^EndKnob[1-4](Left|Right)$/.test(id)) {
            state.endKnobRaw[id] = snapshot.rawValue;
        }
        if (snapshot.signalType === "TOUCH") {
            state.touch[id] = !!snapshot.canonicalValue;
        }
        if (/^BtnShiftButton(Left|Right)$/.test(id)) {
            state.shifted[sideOf(id)] = !!snapshot.canonicalValue;
        }
    }

    function handleRelative(event) {
        var id = event.controlId;
        var side = sideOf(id);
        if (/^EncBrowseKnob/.test(id)) {
            browseTurn(side, event);
        } else if (/^EncLoopKnob/.test(id)) {
            loopTurn(side, event);
        } else if (id === TEMPO_OVERLAY_10004.controlId) {
            // Reconciled Android encoding: the centre rotary arrives as a wrap
            // counter relative event, never as an absolute direction code.
            masterTempoTurn(event);
        } else {
            log("RELATIVE_CONTEXT", {controlId: id, delta: event.delta, direction: event.direction});
        }
    }

    function masterTempoGroup() {
        for (var deck = 1; deck <= availableDeckCount(); deck += 1) {
            if (safeGet("[Channel" + deck + "]", "sync_leader", 0) > 0) {
                return "[Channel" + deck + "]";
            }
        }
        return "[InternalClock]";
    }

    function masterTempoBpm() {
        var group = masterTempoGroup();
        var bpm = safeGet(group, "bpm", 0);
        return bpm > 0 ? bpm : safeGet("[InternalClock]", "bpm", 124);
    }

    var tempoOverlayApplied = false;
    var tempoReconciledControl = null;

    function installTempoReconciliation() {
        var reconciled = applyTempoReconciliationOverlay(S8Canonical259);
        tempoOverlayApplied = !!reconciled;
        tempoReconciledControl = null;
        if (reconciled) {
            reconciled.baseline.controls.forEach(function(candidate) {
                if (candidate && candidate.control_id === TEMPO_OVERLAY_10004.controlId) {
                    tempoReconciledControl = candidate;
                }
            });
        }
        return reconciled;
    }

    function showMasterTempoPopup(reason) {
        state.masterTempoPopup = true;
        if (!state.masterTempoDraft) {
            state.masterTempoDraft = {group: masterTempoGroup(), bpm: masterTempoBpm(), dirty: false};
        }
        showMasterTempoPopupEverywhere(reason, POPUP_KIND.INFORMATION, state.masterTempoDraft.bpm,
            POPUP_PRIORITY.INFORMATION);
        ["LEFT", "RIGHT"].forEach(function(side) {
            if (state.popup[side].title === POPUP_TITLE.BPM && state.popup[side].timerId) {
                stopTimer(state.popup[side].timerId);
                state.popup[side].timerId = 0;
            }
        });
        publishAllSurfaceState();
    }

    function commitMasterTempoPopup(reason) {
        // WINDOWS 2 writes every detent immediately. Kept as a no-op for
        // compatibility with existing callers/tests; closing never writes BPM.
        log("MASTER_TEMPO_CLOSE_NO_COMMIT", {reason: reason});
        return true;
    }

    function closeMasterTempoPopup(reason, commit) {
        if (!state.masterTempoPopup) {
            return false;
        }
        if (commit) { commitMasterTempoPopup(reason); }
        state.masterTempoPopup = false;
        ["LEFT", "RIGHT"].forEach(function(side) {
            if (state.display[side].activePanel === ACTIVE_PANEL.BPM) {
                state.display[side].activePanel = ACTIVE_PANEL.NONE;
            }
            if (state.popup[side].title === POPUP_TITLE.BPM) {
                closePopup(side, false);
            }
        });
        state.masterTempoDraft = null;
        publishAllSurfaceState();
        log("MASTER_TEMPO_POPUP_CLOSED", {reason: reason});
        return true;
    }

    // Android M10004/M10006: one unit step of the central TEMPO rotary is one
    // detent and moves the effective MASTER by 0.01 BPM. The physical counter is
    // resynchronised on jumps, so a fast turn applies exactly the detents the
    // decoder reported and never a fabricated step.
    function masterTempoTurn(event) {
        var steps = clamp(Math.abs(Number(event.delta) || 1), 1, 8);
        var step = bpmStep(!!(state.shifted.LEFT || state.shifted.RIGHT));
        var delta = (event.direction === "CW" ? 1 : -1) * steps * step;
        state.tempoObserved = {
            delta: event.delta,
            direction: event.direction,
            encoding: TEMPO_OVERLAY_10004.encoding,
            modulus: TEMPO_OVERLAY_10004.modulus
        };
        if (!state.masterTempoDraft || state.masterTempoDraft.group !== masterTempoGroup()) {
            state.masterTempoDraft = {group: masterTempoGroup(), bpm: masterTempoBpm(), dirty: false};
        }
        var group = state.masterTempoDraft.group;
        var previous = state.masterTempoDraft.bpm;
        if (!(previous > 0)) {
            log("MASTER_TEMPO_UNAVAILABLE", {group: group});
            return false;
        }
        var next = quantizeBpm(clamp(previous + delta, MASTER_TEMPO_MIN, MASTER_TEMPO_MAX));
        var written = safeSet(group, "bpm", next);
        var actual = safeGet(group, "bpm", previous);
        var accepted = written && Math.abs(actual - next) < 0.0001;
        state.masterTempoDraft.bpm = accepted ? actual : previous;
        state.masterTempoDraft.dirty = false;
        showMasterTempoPopup("ENCODER");
        log("MASTER_TEMPO_ACTUATED", {group: group, detents: event.delta,
            direction: event.direction, previousBpm: previous, requestedBpm: next,
            bpm: state.masterTempoDraft.bpm, delta: delta, step: step,
            pending: false, written: written, accepted: accepted});
        return accepted;
    }

    function handleCodeObserved(event) {
        if (event.controlId === "EncTempoMixer") {
            state.tempoObserved = {rawValue: event.rawValue, direction: event.direction};
            if (tempoOverlayApplied) {
                // The reconciled encoding turns this control into a relative
                // wrap counter, so an absolute observation cannot happen. If it
                // ever does, it is reported and never acted on.
                log("TEMPO_CODE_OBSERVED_AFTER_OVERLAY", {rawValue: event.rawValue,
                    historicalCodes: TEMPO_LEGACY_CODES_259_287.slice()});
                return;
            }
            // Only reachable when the reconciled overlay refused to install. The
            // historical description is then the honest fallback, and the
            // mission 292/293/294 write verification is preserved.
            var delta = event.rawValue === TEMPO_LEGACY_CODES_259_287[0] ? bpmStep(false) :
                (event.rawValue === TEMPO_LEGACY_CODES_259_287[1] ? -bpmStep(false) : 0);
            if (!delta) {
                log("TEMPO_CODE_IGNORED", {rawValue: event.rawValue,
                    approvedCodes: TEMPO_LEGACY_CODES_259_287.slice(), overlayApplied: false});
                return;
            }
            var group = masterTempoGroup();
            var previous = masterTempoBpm();
            var next = quantizeBpm(clamp(previous + delta, MASTER_TEMPO_MIN, MASTER_TEMPO_MAX));
            var written = safeSet(group, "bpm", next);
            var accepted = written && Math.abs(safeGet(group, "bpm") - next) < 0.0001;
            if (accepted) {
                showMasterTempoPopup("ENCODER");
            } else {
                log("MASTER_TEMPO_WRITE_REJECTED", {rawValue: event.rawValue, group: group,
                    requestedBpm: next, actualBpm: safeGet(group, "bpm"), written: written});
            }
            log("MASTER_TEMPO_ACTUATED", {rawValue: event.rawValue, group: group,
                previousBpm: previous, bpm: safeGet(group, "bpm"), requestedBpm: next,
                delta: delta, accepted: accepted});
        }
    }

    function selectMasterDeck(side) {
        var selectedDeck = deckForSide(side);
        var selectedGroup = "[Channel" + selectedDeck + "]";
        var alreadyLeader = safeGet(selectedGroup, "sync_leader") > 0;
        for (var deck = 1; deck <= availableDeckCount(); deck += 1) {
            if (deck !== selectedDeck && safeGet("[Channel" + deck + "]", "sync_leader") > 0) {
                safeSet("[Channel" + deck + "]", "sync_leader", 0);
            }
        }
        if (alreadyLeader) {
            safeSet(selectedGroup, "sync_leader", 0);
            safeSet("[InternalClock]", "sync_leader", 1);
            log("MASTER_CLOCK_SELECTED", {side: side, previousDeck: selectedDeck});
        } else {
            safeSet("[InternalClock]", "sync_leader", 0);
            safeSet(selectedGroup, "sync_leader", 1);
            log("MASTER_DECK_SELECTED", {side: side, deck: selectedDeck});
        }
        refreshSyncIndicators285("MASTER_SELECTION");
        publishAllSurfaceState();
    }

    var DISPLAY_ACTIONS_NO_SHIFT = Object.freeze([
        null, "FOUR_DECK_VIEW", "BPM_GRANULAR_OVERLAY", "KEY_LOCK_KEY_SET_CONTEXT",
        "STEMS_FX_SELECTOR_PREVIOUS", "TWO_DECK_VIEW_LOCAL", "WAVEFORM_ZOOM_IN",
        "WAVEFORM_ZOOM_OUT", "STEMS_FX_SELECTOR_NEXT"
    ]);
    var DISPLAY_ACTIONS_SHIFT = Object.freeze([
        null, "DISPLAY_SETTINGS", "MIXER_FX_PREVIOUS", "CYCLE_KEY_DISPLAY_TYPE",
        "STEMS_FX_SELECTOR_PREVIOUS", "CYCLE_WAVEFORM_MODE", "MIXER_FX_NEXT",
        "CYCLE_INFORMATION_OVERLAY", "STEMS_FX_SELECTOR_NEXT"
    ]);

    function displayButtonNumber(controlId) {
        var match = /^DISPLAY_(LEFT|RIGHT)_BTN_([0-9]{2})$/.exec(controlId);
        return match ? Number(match[2]) : 0;
    }

    function wrapIndex(value, delta, count) {
        return (value + delta + count) % count;
    }

    function persistedPreference(name, fallback) {
        try {
            if (typeof engine.getS8Preference === "function") {
                return engine.getS8Preference(name, fallback);
            }
        } catch (error) {
            log("DISPLAY_SETTING_READ_FAILED", {name: name, error: String(error)});
        }
        return fallback;
    }

    function writePreference(name, value) {
        try {
            return typeof engine.setS8Preference === "function" && engine.setS8Preference(name, value);
        } catch (error) {
            log("DISPLAY_SETTING_WRITE_FAILED", {name: name, value: value, error: String(error)});
            return false;
        }
    }

    function applyCurrentDisplaySetting(side) {
        var display = state.display[side];
        var page = display.settingsPage;
        var changed = false;
        var value = null;
        if (page === 0) {
            var unit = effectUnitForSide(side);
            var modeName = "fx_unit_" + unit + "_mode";
            value = persistedPreference(modeName, 0) ? 0 : 1;
            changed = writePreference(modeName, value);
        } else if (page === 1) {
            pulse(effectUnitGroup(side), "next_chain_preset");
            changed = true;
        } else if (page === 6) {
            value = wrapIndex(Math.round(persistedPreference("pad_palette", 0)), 1, 4);
            changed = writePreference("pad_palette", value);
            if (changed) {
                state.padPalette = value;
                ["LEFT", "RIGHT"].forEach(function(targetSide) {
                    refreshAllHotcuePads285(targetSide);
                    sendLiveLedReport285(targetSide === "LEFT" ? 0x80 : 0x81,
                        "DISPLAY_SETTINGS_PAD_PALETTE");
                });
            }
        } else if (page === 7) {
            value = wrapIndex(Math.round(persistedPreference("waveform_style", display.waveformMode)), 1, 4);
            changed = writePreference("waveform_style", value);
            if (changed) {
                display.waveformMode = value;
            }
        } else if (page === 9) {
            value = Math.round(persistedPreference("browser_rows", 5)) + 1;
            if (value > 9) { value = 4; }
            changed = writePreference("browser_rows", value);
        } else if (page === 10) {
            value = Math.round(persistedPreference("bpm_precision", 2)) === 2 ? 1 : 2;
            changed = writePreference("bpm_precision", value);
        } else if (page === 11) {
            var previewSteps = [1, 5, 10, 30];
            var currentStep = Math.round(persistedPreference("preview_seek_seconds", 1));
            var currentIndex = previewSteps.indexOf(currentStep);
            value = previewSteps[wrapIndex(currentIndex < 0 ? 0 : currentIndex, 1, previewSteps.length)];
            changed = writePreference("preview_seek_seconds", value);
        }
        display.revision += 1;
        publishSurfaceState(side);
        log("DISPLAY_SETTING_APPLY", {side: side, page: page + 1, changed: !!changed, value: value,
            unavailable: !changed && [2, 3, 4, 5, 8].indexOf(page) >= 0});
        return changed;
    }

    function applyDisplayAction(side, action) {
        var display = state.display[side];
        var group = groupForSide(side);
        if (action === "FOUR_DECK_VIEW") {
            display.viewMode = DISPLAY_VIEW.FOUR;
            display.activePanel = ACTIVE_PANEL.NONE;
        } else if (action === "BPM_GRANULAR_OVERLAY") {
            closeMasterTempoPopup("DECK_BPM_PANEL", false);
            display.activePanel = ACTIVE_PANEL.BPM;
        } else if (action === "KEY_LOCK_KEY_SET_CONTEXT") {
            display.activePanel = ACTIVE_PANEL.KEY;
        } else if (action === "STEMS_FX_SELECTOR_PREVIOUS") {
            display.stemsPage = wrapIndex(display.stemsPage, -1, 2);
        } else if (action === "TWO_DECK_VIEW_LOCAL") {
            display.viewMode = display.viewMode === DISPLAY_VIEW.TWO ? DISPLAY_VIEW.SINGLE : DISPLAY_VIEW.TWO;
            display.activePanel = ACTIVE_PANEL.NONE;
        } else if (action === "WAVEFORM_ZOOM_IN") {
            pulse(group, "waveform_zoom_down");
            display.waveformZoom = clamp(display.waveformZoom + 1, 0, 9);
        } else if (action === "WAVEFORM_ZOOM_OUT") {
            pulse(group, "waveform_zoom_up");
            display.waveformZoom = clamp(display.waveformZoom - 1, 0, 9);
        } else if (action === "STEMS_FX_SELECTOR_NEXT") {
            display.stemsPage = wrapIndex(display.stemsPage, 1, 2);
        } else if (action === "DISPLAY_SETTINGS") {
            display.settingsOpen = true;
            display.activePanel = ACTIVE_PANEL.SETTINGS;
        } else if (action === "MIXER_FX_PREVIOUS") {
            pulse(effectUnitGroup(side), "prev_chain_preset");
        } else if (action === "CYCLE_KEY_DISPLAY_TYPE") {
            safeSet("[Library]", "key_notation",
                wrapIndex(Math.round(safeGet("[Library]", "key_notation")), 1, 7));
        } else if (action === "CYCLE_WAVEFORM_MODE") {
            display.waveformMode = wrapIndex(display.waveformMode, 1, 4);
        } else if (action === "MIXER_FX_NEXT") {
            pulse(effectUnitGroup(side), "next_chain_preset");
        } else if (action === "CYCLE_INFORMATION_OVERLAY") {
            display.informationOverlay = display.informationOverlay < INFORMATION_OVERLAY.BEATGRID ?
                INFORMATION_OVERLAY.BEATGRID :
                (display.informationOverlay >= INFORMATION_OVERLAY.FX ?
                    INFORMATION_OVERLAY.BEATGRID : display.informationOverlay + 1);
        } else {
            return false;
        }
        display.revision += 1;
        publishSurfaceState(side);
        return true;
    }

    function dispatchDisplayButton(event, edge) {
        var side = sideOf(event.controlId);
        var button = displayButtonNumber(event.controlId);
        var shifted = !!state.shifted[side];
        var action = (shifted ? DISPLAY_ACTIONS_SHIFT : DISPLAY_ACTIONS_NO_SHIFT)[button];
        var context = surfaceContext(side);
        var logicalEvent = {
            surface: side,
            physicalId: event.controlId,
            logicalId: "s8." + side.toLowerCase() + ".display.buttons." + button,
            button: button,
            edge: edge,
            context: context === DISPLAY_CONTEXT.DECK ? "DECK_VIEW" :
                (context === DISPLAY_CONTEXT.BROWSER ? "BROWSER" : "FX_SELECT"),
            modifier: shifted ? "SHIFT" : "NO_SHIFT",
            action: action
        };
        state.lastLogicalDisplayEvent = logicalEvent;
        if (button === 8 && edge === "RELEASE" && state.preview.active &&
                state.preview.side === side) {
            logicalEvent.action = "PREVIEW_STOP";
            return stopPreview(side, "DISPLAY_BUTTON_8_RELEASE");
        }
        if (logicalEvent.context === "BROWSER" && button === 8) {
            logicalEvent.action = edge === "PRESS" ? "PREVIEW_START" : "PREVIEW_STOP";
            if (edge === "PRESS") {
                return startPreview(side);
            }
            return false;
        }
        if (edge !== "PRESS") {
            log("DISPLAY_BUTTON_RELEASE", logicalEvent);
            return false;
        }
        if (button === 5 && (logicalEvent.context !== "DECK_VIEW" ||
                state.masterTempoPopup ||
                state.display[side].activePanel !== ACTIVE_PANEL.NONE || state.display[side].settingsOpen ||
                state.display[side].viewMode === DISPLAY_VIEW.FOUR ||
                state.display[side].informationOverlay !== INFORMATION_OVERLAY.NONE)) {
            cancelBrowseGestures("DISPLAY_BUTTON_5_HOME");
            if (state.programBrowserExpanded || state.browserVisible[side]) {
                closeBrowser("DISPLAY_BUTTON_5_HOME", side);
            }
            state.fxSelectVisible[side] = false;
            updateFxSelectLed285(side, "DISPLAY_HOME_FX_SELECT_CLOSE");
            closeMasterTempoPopup("HOME", false);
            state.display[side].activePanel = ACTIVE_PANEL.NONE;
            state.display[side].settingsOpen = false;
            state.display[side].viewMode = DISPLAY_VIEW.SINGLE;
            state.display[side].informationOverlay = INFORMATION_OVERLAY.NONE;
            state.display[side].revision += 1;
            publishSurfaceState(side);
            logicalEvent.action = "HOME_DECK_VIEW";
            log("DISPLAY_BUTTON_HOME", logicalEvent);
            return true;
        }
        if (logicalEvent.context !== "DECK_VIEW") {
            if (logicalEvent.context === "BROWSER" && button === 4) {
                // Android parity: BUTTON 4 toggles the direction of the pending
                // selection; the sort itself is applied on confirm.
                logicalEvent.action = "SORT_DIRECTION_PENDING";
                return toggleSortDirection(side);
            }
            log("DISPLAY_BUTTON_CONTEXT_RESERVED", logicalEvent);
            return false;
        }
        if (button === 2 && state.display[side].activePanel === ACTIVE_PANEL.BPM) {
            state.display[side].activePanel = ACTIVE_PANEL.NONE;
            state.display[side].revision += 1;
            publishSurfaceState(side);
            logicalEvent.action = "CLOSE_BPM_PANEL";
            return true;
        }
        if (button === 3 && state.display[side].activePanel === ACTIVE_PANEL.KEY) {
            state.display[side].activePanel = ACTIVE_PANEL.NONE;
            state.display[side].revision += 1;
            publishSurfaceState(side);
            logicalEvent.action = "CLOSE_KEY_PANEL";
            return true;
        }
        if (!applyDisplayAction(side, action)) {
            log("DISPLAY_BUTTON_ACTION_UNAVAILABLE", logicalEvent);
            return false;
        }
        log("DISPLAY_BUTTON_ACTION", logicalEvent);
        return true;
    }

    function backPress(side) {
        if (state.backDown[side]) {
            return;
        }
        var down = {consumed: false, timerId: 0};
        state.backDown[side] = down;
        down.timerId = beginOneShot(800, function() {
            if (!active || state.backDown[side] !== down || !state.browserVisible[side]) {
                return;
            }
            down.consumed = true;
            var changed = typeof engine.s8BrowserBack === "function" && engine.s8BrowserBack(true);
            log("BROWSER_BACK_ROOT", {side: side, changed: !!changed});
        });
    }

    function backRelease(side) {
        var down = state.backDown[side];
        if (!down) {
            return;
        }
        if (down.timerId) {
            stopTimer(down.timerId);
        }
        state.backDown[side] = null;
        if (down.consumed) {
            return;
        }
        // Android parity: BACK cancels a pending SORT BY selection and restores
        // the focus that was active before the popup opened.
        if (state.popup[side].kind === POPUP_KIND.SELECTION) {
            cancelSort(side);
            return;
        }
        if (state.browserVisible[side]) {
            var changed = typeof engine.s8BrowserBack === "function" && engine.s8BrowserBack(false);
            if (!changed) {
                log("BROWSER_BACK_UNAVAILABLE", {side: side});
            }
            log("BROWSER_BACK_PARENT", {side: side});
            return;
        }
        state.fxSelectVisible[side] = false;
        updateFxSelectLed285(side, "BACK_FX_SELECT_CLOSE");
        state.display[side].activePanel = ACTIVE_PANEL.NONE;
        state.display[side].settingsOpen = false;
        state.display[side].revision += 1;
        publishSurfaceState(side);
    }

    function handlePress(event) {
        var id = event.controlId;
        var side = sideOf(id);
        if (side) {
            state.lastSide = side;
        }
        updateMomentaryLed285(id, side, true);
        if (/^BtnShiftButton/.test(id)) {
            state.shifted[side] = true;
            if (state.loopTouched[side] && state.popup[side].title === POPUP_TITLE.LOOP_SIZE) {
                closePopup(side, false);
            }
            publishSurfaceState(side);
            return;
        }
        if (/^DISPLAY_(LEFT|RIGHT)_BTN_[0-9]{2}$/.test(id)) {
            dispatchDisplayButton(event, "PRESS");
            return;
        }
        if (/^PHYSICAL_DECK_BUTTON_/.test(id)) {
            switchDeck(side);
            return;
        }
        if (/^BtnBrowseKnob/.test(id)) {
            if (state.fxSelectVisible[side]) {
                state.fxSelectVisible[side] = false;
                updateFxSelectLed285(side, "BROWSE_CONFIRM_FX_SELECT_CLOSE");
                publishSurfaceState(side);
                log("FX_SELECTION_CONFIRMED", {side: side, unit: effectUnitForSide(side),
                    slot: state.fxSelectSlot[side]});
                return;
            }
            if (state.display[side].settingsOpen) {
                applyCurrentDisplaySetting(side);
                return;
            }
            if (state.display[side].activePanel === ACTIVE_PANEL.BPM) {
                closeMasterTempoPopup("BROWSE_PUSH", false);
                state.display[side].activePanel = ACTIVE_PANEL.NONE;
                state.display[side].revision += 1;
                publishSurfaceState(side);
                log("BPM_PANEL_CLOSED", {side: side, source: "BROWSE_PUSH"});
                return;
            }
            if (state.display[side].activePanel === ACTIVE_PANEL.KEY) {
                toggle(groupForSide(side), "keylock");
                log("KEYLOCK_TOGGLED", {side: side});
                return;
            }
            browsePress(id, side);
            return;
        }
        if (/^BtnPlayButton/.test(id)) {
            toggle(groupForSide(side), "play");
        } else if (/^BtnCueButton/.test(id)) {
            hold(id, groupForSide(side), "cue_default");
        } else if (/^BtnSyncButton/.test(id)) {
            if (state.shifted[side]) {
                selectMasterDeck(side);
            } else {
                // Keep input and feedback on Mixxx's authoritative latching state.
                toggle(groupForSide(side), "sync_enabled");
            }
        } else if (/^BtnFluxButton/.test(id)) {
            toggle(groupForSide(side), "slip_enabled");
        } else if (/^BtnSelectButton/.test(id)) {
            toggleFxSelect(side);
        } else if (/^BtnHotcueButton/.test(id)) {
            setPadMode(side, "HOTCUE");
        } else if (/^BtnLoopButton/.test(id)) {
            setPadMode(side, state.padMode[side] === "FREEZE" ? "SLICER" : "LOOP");
        } else if (/^BtnSliceButton/.test(id)) {
            captureSlices(side);
            state.touch[id] = true;
            setPadMode(side, "FREEZE");
        } else if (/^BtnRemixButton/.test(id)) {
            state.touch[id] = true;
            if (state.shifted[side]) {
                var banks = Math.max(1, Math.ceil(safeGet("[App]", "num_samplers") / 16));
                state.samplerBank[side] = (state.samplerBank[side] + 1) % banks;
            }
            setPadMode(side, "REMIX");
        } else if (/^BtnPad[1-8]/.test(id)) {
            handlePadPress(id, side);
        } else if (/^BtnLoopKnob/.test(id)) {
            if (state.padMode[side] === "FREEZE" || state.padMode[side] === "SLICER") {
                setPadMode(side, "HOTCUE");
            } else {
                pulse(groupForSide(side), "beatloop_activate");
            }
        } else if (/^BtnFx[1-4]Button/.test(id)) {
            handleFxButton(id, side);
        } else if (/^BtnFxass/.test(id)) {
            handleFxAssignment(id);
        } else if (/^BtnPfl[ABCD]Mixer$/.test(id)) {
            handlePfl(id);
        } else if (/^BtnOnButton[1-4]/.test(id)) {
            handleOnButton(id, side);
        } else if (/^BtnEditButton/.test(id)) {
            state.beatgridEdit[side] = !state.beatgridEdit[side];
            log("BEATGRID_EDIT_CONTEXT", {side: side, enabled: state.beatgridEdit[side]});
        } else if (/^BtnQuantizeMixer$/.test(id)) {
            toggle(groupForSide(state.lastSide), "quantize");
            updateLedField285("QUANTIZE", safeGet(groupForSide(state.lastSide), "quantize") > 0,
                "QUANTIZE_TOGGLE");
        } else if (/^BtnSnapMixer$/.test(id)) {
            log("SNAP_CONTEXT_ONLY", {focusSide: state.lastSide, reason: "NO_DISTINCT_APPROVED_MIXXX_POLICY_259"});
        } else if (/^BtnTempoMixer$/.test(id)) {
            if (state.masterTempoPopup) {
                closeMasterTempoPopup("TEMPO_PUSH", false);
            } else {
                log("TEMPO_PUSH_NO_POPUP", {action: "CLOSE_ONLY"});
            }
        } else if (/^BtnBackButton/.test(id)) {
            backPress(side);
        } else if (/^BtnCaptureButton/.test(id)) {
            log("CAPTURE_CONTEXT_ONLY", {side: side});
        } else {
            log("BUTTON_CONTEXT_ONLY", {controlId: id, side: side});
        }
    }

    function handleRelease(event) {
        var id = event.controlId;
        var side = sideOf(id);
        updateMomentaryLed285(id, side, false);
        if (/^Btn(Slice|Remix)Button/.test(id)) {
            state.touch[id] = false;
        }
        if (/^BtnPad[1-8]/.test(id) && state.padMode[side] === "SLICER") {
            releaseSlice(side, padNumber(id));
        }
        if (/^BtnShiftButton/.test(id)) {
            state.shifted[side] = false;
            publishSurfaceState(side);
            return;
        }
        if (/^DISPLAY_(LEFT|RIGHT)_BTN_[0-9]{2}$/.test(id)) {
            dispatchDisplayButton(event, "RELEASE");
            return;
        }
        if (/^BtnBrowseKnob/.test(id)) {
            if (!state.browseDown[side]) {
                return;
            }
            browseRelease(side);
            return;
        }
        if (/^BtnBackButton/.test(id)) {
            backRelease(side);
            return;
        }
        releaseHeld(id);
    }

    function handleDigital(event) {
        var id = event.controlId;
        var control = controls[id];
        if (control && control.signal_type === "TOUCH") {
            updateTouch(id, event.eventType === "PRESS");
            return;
        }
        if (event.eventType === "PRESS") {
            handlePress(event);
        } else {
            handleRelease(event);
        }
    }

    function markSameReportBrowseReleaseHazards(events) {
        var releaseBySide = {LEFT: false, RIGHT: false};
        var hazardsBySide = {LEFT: [], RIGHT: []};
        var hasBrowseSelectionChange = false;
        events.forEach(function(event) {
            var side;
            if (event.eventType === "RELEASE" && /^BtnBrowseKnob(Left|Right)$/.test(event.controlId)) {
                side = sideOf(event.controlId);
                releaseBySide[side] = true;
            }
            if (event.eventType === "RELATIVE" && /^EncBrowseKnob(Left|Right)$/.test(event.controlId)) {
                hasBrowseSelectionChange = true;
            }
        });
        events.forEach(function(event) {
            if (event.eventType !== "PRESS") {
                return;
            }
            var side = sideOf(event.controlId);
            if (!side || !releaseBySide[side]) {
                return;
            }
            if (/^PHYSICAL_DECK_BUTTON_(LEFT|RIGHT)$/.test(event.controlId)) {
                hazardsBySide[side].push("DECK_FOCUS_CHANGE");
            } else if (/^BtnPlayButton(Left|Right)$/.test(event.controlId)) {
                hazardsBySide[side].push("PLAY_STATE_CHANGE");
            }
        });
        ["LEFT", "RIGHT"].forEach(function(side) {
            if (!releaseBySide[side]) {
                return;
            }
            if (hasBrowseSelectionChange) {
                hazardsBySide[side].push("SELECTION_CHANGE");
            }
            var current = state.browseDown[side];
            if (!current || hazardsBySide[side].length === 0) {
                return;
            }
            current.sameReportHazards = hazardsBySide[side];
        });
    }

    function consumeMixerFilterPhysicalInput285(data, length) {
        // Physical microcapture authority: S8 17CC:1370 IF5, DEVICE->HOST,
        // EP 0x84, report 0x01. Runtime callback: raw[20] A=0x02/C=0x01;
        // raw[23] B=0x08/D=0x10. Baseline 255 is deliberately unchanged.
        // This bounded runtime addendum deliberately does not edit baseline 255.
        if (!state || !state.mixerFilterPhysicalInput285 || !data || length < 24 || data.length < 24 ||
                (Number(data[0]) & 0xFF) !== 0x01) {
            return;
        }
        var memory = state.mixerFilterPhysicalInput285;
        var current = {
            A: (Number(data[20]) & 0x02) !== 0,
            B: (Number(data[23]) & 0x08) !== 0,
            C: (Number(data[20]) & 0x01) !== 0,
            D: (Number(data[23]) & 0x10) !== 0
        };
        if (!memory.initialized) {
            ["A", "B", "C", "D"].forEach(function(letter) { memory[letter] = current[letter]; });
            memory.initialized = true;
            return;
        }
        ["A", "B", "C", "D"].forEach(function(letter) {
            if (!memory[letter] && current[letter]) {
                var channel = channelFromLetter(letter);
                var group = "[QuickEffectRack1_[Channel" + channel + "]]";
                var previousEngineValue = safeGet(group, "enabled");
                var requestedEngineValue = previousEngineValue ? 0 : 1;
                toggle(group, "enabled");
                log("MIXER_FILTER_PHYSICAL_INPUT_PRESS", {channel: letter, group: group, key: "enabled",
                    previousEngineValue: previousEngineValue, requestedEngineValue: requestedEngineValue});
            }
            memory[letter] = current[letter];
        });
    }

    function incomingData(data, length) {
        if (!active || !decoder) {
            return false;
        }
        // Stock Mixxx HID mappings call incomingData(data) with a Uint8Array. The
        // second argument existed in the Android bridge path, so accept both forms.
        var actualLength = (typeof length === "number" && isFinite(length)) ? length :
            (data && typeof data.length === "number" ? data.length : 0);
        state.reports += 1;
        traceTouchstripRaw(data, actualLength);
        var result;
        try {
            result = decoder.decode(data, actualLength);
        } catch (error) {
            result = {accepted: false, reason: String(error), events: [], snapshots: [], diagnostics: []};
        }
        if (!result.accepted) {
            releaseAll();
            cancelBrowseGestures("REPORT_REJECTED");
            ["LEFT", "RIGHT"].forEach(function(side) { cleanupTouchstrip(side, false); });
            decoder.reset();
            log("REPORT_REJECTED", {reason: result.reason});
            return false;
        }
        state.acceptedReports += 1;
        result.snapshots.forEach(initializeSnapshot);
        result.diagnostics.forEach(function(item) {
            log("DECODE_DIAGNOSTIC", item);
        });
        // Preserve canonical decoder order, but classify report-level races before
        // any callback can LOAD from a stale play/focus/selection snapshot.
        markSameReportBrowseReleaseHazards(result.events);
        result.events.forEach(function(event) {
            state.events += 1;
            if (event.eventType === "PRESS" || event.eventType === "RELEASE") {
                handleDigital(event);
            } else if (event.eventType === "ABSOLUTE") {
                handleAbsolute(event);
            } else if (event.eventType === "RELATIVE") {
                handleRelative(event);
            } else if (event.eventType === "CODE_OBSERVED") {
                handleCodeObserved(event);
            }
        });
        // Only accepted reports reach this post-decoder operational addendum.
        // It is edge-driven and therefore does nothing on release or hold.
        consumeMixerFilterPhysicalInput285(data, actualLength);
        // Mission 274 deliberately remains an adendum instead of mutating the
        // historical baseline 255. Consume its two raw absolute fields only
        // after the decoder has applied touch-down/release events from the same
        // report, so a released gate can never leak a residual position.
        consumeTouchstripPosition274(data, actualLength);
        return true;
    }

    function getCoverage() {
        return decoder.support().map(function(item) {
            var status = "DECODED_CONTEXT";
            if (item.status !== "SUPPORTED") {
                status = item.status;
            } else if (item.controlId === "EncTempoMixer") {
                status = "DECODED_MASTER_TEMPO";
            } else if (/^CapBrowseKnob/.test(item.controlId)) {
                status = "DECODED_BACKEND_PREWARM";
            } else if (/^(TstTouchstrip)/.test(item.controlId)) {
                status = "DECODED_BY_MISSION_274_ADENDUM";
            } else if (/^(Knb|Fad|Xfd)/.test(item.controlId) && !/^EndKnob/.test(item.controlId)) {
                status = "DECODED_ENGINE";
            } else if (/^Btn(Pfl|Play|Cue|Sync|Flux|Fx|On|Pad|LoopKnob|Quantize)/.test(item.controlId) ||
                    /^PHYSICAL_DECK_BUTTON_/.test(item.controlId) ||
                    /^Enc(Browse|Loop)/.test(item.controlId)) {
                status = "DECODED_ENGINE_OR_STATE_MACHINE";
            }
            return {
                controlId: item.controlId,
                signalType: item.signalType,
                decoderStatus: item.status,
                functionalStatus: status,
                reason: item.reason
            };
        });
    }

    function getState() {
        return JSON.parse(JSON.stringify(state));
    }

    return {
        init: init,
        shutdown: shutdown,
        incomingData: incomingData,
        getState: getState,
        getCoverage: getCoverage,
        getBpmPrecisionForTest: bpmPrecision,
        calculateBpmForTest: function(current, clockwise, shifted, magnitude) {
            var delta = (clockwise ? 1 : -1) * bpmStep(shifted) * (magnitude || 1);
            return quantizeBpm(Math.max(1, current + delta));
        },
        updateTouchForTest: updateTouch,
        setShiftForTest: function(side, shifted) {
            var event = {controlId: "BtnShiftButton" + (side === "LEFT" ? "Left" : "Right")};
            if (shifted) { handlePress(event); } else { handleRelease(event); }
        },
        applyProgramBrowserStateForTest: applyProgramBrowserState,
        refreshPhaseMeterForTest: refreshPhaseMeter285,
        phaseSegmentForSideForTest: phaseSegmentForSide285,
        showMasterTempoPopupForTest: showMasterTempoPopup,
        closeMasterTempoPopupForTest: closeMasterTempoPopup,
        masterTempoTurnForTest: masterTempoTurn,
        switchDeckForTest: switchDeck,
        setPadModeForTest: setPadMode,
        loopTurnForTest: loopTurn,
        refreshLoopRingForTest: refreshLoopRing285,
        handlePressForTest: handlePress,
        dispatchDisplayButtonForTest: dispatchDisplayButton,
        applyTouchstripMovementForTest: applyTouchstripMovement,
        // Android parity surface, used by the offline tests and by operators who
        // explicitly open the gated CUE/PFL LED write path.
        setPflLedFeedbackEnabled: setPflLedFeedbackEnabled,
        refreshPflLed: refreshPflLed10004,
        buildPflLedPayload: buildPflLedPayload10004,
        pflLedMask: pflLedMask10004,
        getPopupState: function() {
            return JSON.parse(JSON.stringify(state ? state.popup : {}));
        },
        getTempoReconciledControl: function() {
            return tempoReconciledControl ? JSON.parse(JSON.stringify(tempoReconciledControl)) : null;
        },
        applyTempoOverlayForTest: function() {
            installTempoReconciliation();
            return tempoOverlayApplied;
        },
        constants: {
            endKnobModulus: ENDKNOB_MODULUS,
            browseHoldMs: BROWSE_HOLD_MS,
            bundleId: BUNDLE_ID,
            axisDirectionFlip269: Object.keys(ANALOG_DIRECTION_FLIP_269),
            displayContext: DISPLAY_CONTEXT,
            displayPadMode: DISPLAY_PAD_MODE,
            touchstrip: {
                max: TOUCHSTRIP_MAX,
                bendSensitivity: TOUCHSTRIP_BEND_SENSITIVITY,
                bendLimit: TOUCHSTRIP_BEND_LIMIT,
                scratchTickLimit: TOUCHSTRIP_SCRATCH_TICK_LIMIT,
                positionOffset: TOUCHSTRIP_POSITION_OFFSET,
                gateOffset: TOUCHSTRIP_GATE_OFFSET
            },
            tempoReconciliation: {
                controlId: TEMPO_OVERLAY_10004.controlId,
                encoding: TEMPO_OVERLAY_10004.encoding,
                bitMaskHex: TEMPO_OVERLAY_10004.bitMaskHex,
                modulus: TEMPO_OVERLAY_10004.modulus,
                stepPolicy: "BPM_PRECISION_PREFERENCE",
                stepBpmDefault: MASTER_TEMPO_STEP_DEFAULT,
                historicalCodes: TEMPO_LEGACY_CODES_259_287.slice()
            },
            popupKind: POPUP_KIND,
            popupPhase: POPUP_PHASE,
            popupTitle: POPUP_TITLE,
            popupPriority: POPUP_PRIORITY,
            temporaryPopupMs: TEMPORARY_POPUP_MS,
            pflLed: {
                reportId: "0xF4",
                payloadId: PFL_LED_PAYLOAD_ID,
                masks: PFL_LED_MASKS,
                gateDefault: false
            }
        }
    };
}());

if (typeof module !== "undefined" && module.exports) {
    module.exports = S8WindowsV1;
}
