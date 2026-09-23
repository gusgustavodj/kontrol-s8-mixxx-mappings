# Windows installation

The documented Mixxx source revision is `3ebac449e7e5fe2a0186596657696e87ce8b0e56`. Obtain that revision from the official Mixxx repository and confirm the commit before modifying a working copy.

On a clean copy, run `git apply --check` with `windows/patch/MIXXX_Kontrol_S8_HID_DISPLAY_PATCH.patch`. Then apply the patch and build with BULK and HID support. Copy the four mapping files into the built installation:

- `windows/mappings/HID/Kontrol-S8-Mixxx-Windows-v1.0.hid.xml`
- `windows/mappings/HID/Kontrol-S8-Mixxx-Windows-v1.0.js`
- `windows/mappings/DISPLAY/Kontrol-S8-Mixxx-Windows-v1.0.bulk.xml`
- `windows/mappings/DISPLAY/Kontrol-S8-Mixxx-Windows-v1.0-display.js`

The required adapter and decoder are embedded in the two JS files. The revised splash contains no Mixxx logo raster. Do not install separate helper scripts from older bundles. Assign the Kontrol S8 HID and Bulk interfaces in Mixxx preferences.

To revert, return to a preserved installation or clean build copy. The owner reported physical success for an earlier splash composition; the revised text-only splash has passed static rendering checks and still needs physical inspection. The exact environment, patch used and tested functions of the earlier run have not yet been documented.
