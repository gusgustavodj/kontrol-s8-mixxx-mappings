# Kontrol S8 for Mixxx — Cross-Platform Mappings

Independent Mixxx mappings for the Traktor Kontrol S8, created by **gusgustavofreitas** with AI assistance. The project is cross-platform in scope; Windows is the initial implementation. Additional platforms and compatibility reports are welcome. This is neither an official Mixxx nor a Native Instruments distribution.

### Hardware Protocol Reference

This repository contains the independent Mixxx mappings. The companion [Traktor Kontrol S8 Hardware Protocol — Independent Reference](https://github.com/gusgustavodj/kontrol-s8-protocol) documents the S8 hardware protocol, including HID, LED and display information. Developers working on additional platforms can consult the Protocol reference and its evidence and platform-support notes.

Windows includes HID, LED, Display/Bulk mappings and a separate patch required for the documented HID/Bulk display bridge on the exact Mixxx base commit `3ebac449e7e5fe2a0186596657696e87ce8b0e56`. The documented full HID/Bulk functionality is not provided by an unmodified official Mixxx installation. The patch is distributed separately under applicable GPL-2.0-or-later terms; see [`windows/patch/README.md`](windows/patch/README.md). The four mapping files are separate from that patch.

See [platform support](docs/platform-support.md), [Windows installation](docs/installation-windows.md), [compatibility](docs/compatibility.md), and [known limitations](docs/known-limitations.md). The 7000 ms splash passed static rendering checks; the revised splash has no new recorded physical test. Android is not included.

## Contributing

Contributions are welcome through [GitHub Issues](https://github.com/gusgustavodj/kontrol-s8-mixxx-mappings/issues) and [Pull Requests](https://github.com/gusgustavodj/kontrol-s8-mixxx-mappings/pulls). Report bugs, mapping improvements, compatibility results, or requests for additional platforms. See [CONTRIBUTING.md](CONTRIBUTING.md) and the templates in `.github/`. Do not post private captures or proprietary materials.

Contributions are reviewed before incorporation. The maintainer decides whether changes enter the official repository; Issues and Pull Requests do not create an obligation to implement, accept or merge a proposal.

## License and notices

The independent mapping XML/JS code is licensed under GPL-2.0-or-later; see [`LICENSE`](LICENSE). The separately distributed patch contains/changes Mixxx source and follows applicable GPL-2.0-or-later obligations, upstream notices, exact base revision and source references; see [`COPYING`](COPYING), [`NOTICE.md`](NOTICE.md), and [`windows/patch/README.md`](windows/patch/README.md). Third-party marks and materials are not relicensed.
