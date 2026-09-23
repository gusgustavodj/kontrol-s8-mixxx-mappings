# Separate Mixxx source patch

`MIXXX_Kontrol_S8_HID_DISPLAY_PATCH.patch` is a source patch for Mixxx base commit `3ebac449e7e5fe2a0186596657696e87ce8b0e56` (release 2.5.6). SHA-256: `0800B7E1EB507E15B7EBA09F7DB00A6E8F5F95A2040B76D6C4207E645B6CCA6A`. It is distinct from the four mapping files.

This patch modifies and includes context from Mixxx, whose corresponding source is under GNU GPL version 2 or (at your option) any later version. The exact upstream `COPYING` text is included at the repository root. The patch is provided under applicable GPL-2.0-or-later conditions; retain upstream copyright and license notices. The corresponding base source is available at [Mixxx commit `3ebac449e7e5fe2a0186596657696e87ce8b0e56`](https://github.com/mixxxdj/mixxx/commit/3ebac449e7e5fe2a0186596657696e87ce8b0e56); patch provenance and source file list are preserved in the project's preparation record. No modified Mixxx binary or installer is distributed here.

The documented full HID/Bulk and display bridge functionality depends on applying this patch and building the corresponding Mixxx source. An unmodified official Mixxx installation does not provide that full functionality.
