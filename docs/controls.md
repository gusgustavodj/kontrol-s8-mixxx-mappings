# Controls and output — Mixxx implementation

This document covers the Windows Mixxx candidate. The companion **Traktor Kontrol S8 Hardware Protocol — Independent Reverse Engineering** repository provides the protocol reference; its public URL has not been assigned.

The owner reports that the updated Windows v1.0 composition works on physical hardware. The exact functions tested remain to be recorded. Earlier owner-attested HID, LED and display results apply only to the configurations tested at that time.

## FREEZE

The mapping contains output fields `FREEZE_LEFT` and `FREEZE_RIGHT` at offset 49 of reports `0x80` and `0x81`, mask `0x7F`, with initial parameter `0x14`. That parameter belongs to this Mixxx implementation; it is not a normative protocol value. The logical association of the LED with Mixxx's corresponding functional state remains marked `HID_FIELD_IMPLEMENTED_LOGICAL_BINDING_PENDING` in the candidate code. This document does not change that binding or infer a physical LED result.

## DECK and DIRECT THRU

Physical DECK buttons and their LEDs are distinct. Selection and update logic follow the included code. The Atlas documents DIRECT THRU through a Feature Report; that does not establish complete physical confirmation or alter this mapping.

See [known limitations](known-limitations.md), [Windows installation](installation-windows.md) and [compatibility](compatibility.md).
