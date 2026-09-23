# Windows

Use the Mixxx revision identified in the root README. Check the patch against a clean checkout with `git apply --check` before applying it. Install the HID and Display/Bulk mappings in this directory and assign their interfaces in Mixxx preferences. Preserve an existing working installation.

The owner reports that the updated Windows v1.0 composition works on physical hardware. Exact environment and test scope are still to be recorded.

The mapping contains exactly four files under `mappings/`: two HID and two Display files. The required baseline helper scripts are embedded in their corresponding JS files. The patch under `patch/` remains a separate Mixxx source dependency.
