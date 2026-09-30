# Linux

Tested on Fedora 43 (kernel 6.19, PipeWire), Mixxx 2.5.6 built from
`3ebac449` with `windows/patch/MIXXX_Kontrol_S8_HID_DISPLAY_PATCH.patch` plus
`linux/patch/MIXXX_Kontrol_S8_LINUX_ADDENDUM.patch`. The mappings are the ones
in `windows/mappings/`; no separate Linux copy is needed.

## Build

```bash
git clone https://github.com/mixxxdj/mixxx && cd mixxx && git checkout 3ebac449e7e5fe2a0186596657696e87ce8b0e56
git apply <repo>/windows/patch/MIXXX_Kontrol_S8_HID_DISPLAY_PATCH.patch
git apply <repo>/linux/patch/MIXXX_Kontrol_S8_LINUX_ADDENDUM.patch
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=RelWithDebInfo -DBUILD_TESTING=OFF
ninja -C build
```

The Windows display transport (SetupDi/CreateFileW) is `#if __WINDOWS__`; on
Linux the displays use Mixxx's regular libusb bulk path, HID uses hidraw.

## System

- **Audio**: the S8 is USB Audio Class. Use PipeWire's *Pro Audio* profile:
  master on outputs 1/2, headphones on 3/4.
- **Permissions**: Mixxx's `69-mixxx-usb-uaccess.rules` already covers vendor
  `17cc` for hidraw and USB, so no extra udev rule.

## Linux-specific behaviour

- Linux hidraw delivers input report `0x01` at its native 41 bytes; Windows
  hidapi pads it to 109. The HID mapping accepts both.
- Mixxx's keyboard focus does not exist while its window is inactive, so the
  browser navigates focus-independently (needs the addendum patch; older
  patch builds fall back to the original behaviour).
