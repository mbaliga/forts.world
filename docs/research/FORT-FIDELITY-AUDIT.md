# Fort reconstruction fidelity audit

`fort-fidelity-audit.csv` is the working register for the **138 original catalogue sites**. The catalogue's latitude/longitude values are approximate discovery coordinates. They must not be treated as surveyed coordinates or footprints.

## Current baseline (2026-10-31)

The regenerated register contains 138 sites: 113 have a playable scene, 25 have no scene, and **none currently meets the full verification standard** below. Of the scene-backed sites, 29 have a documented geometry improvement and one (Tughlaqabad) has a plan-traced blockout; all remain explicitly unverified. A playable scene or an improved outline does not mean that its real-period architecture, terrain, settlements, routes and present condition have all been reconciled. This count is a fidelity status, not a count of finished models.

The later Sahyadri/Gingee coordinate-reference pass added UNESCO component reference points and property-area metadata to five scene anchors. These are not fort-wall centres or footprint vertices, so they do not increase the count of geometry-improved or verified scenes. Rajgad also has a published 2026 UAV/GIS survey reference; its raw spatial layers were not found as downloadable files.

## Full scene playability sweep (2026-10-31)

The complete automated scene sweep built and traversed all 253 dated scene states across the 113 scene-backed forts with zero build failures and no unreachable tagged places. This confirms that the current scenes load and their tagged points connect to the movement graph; it does **not** verify any historical footprint, scale, period appearance, terrain, or surrounding settlement. The fidelity baseline therefore remains 0 verified of 138 sites. The user's latest priority is the Jaipur ridge ensemble (Amer, Jaigarh, Nahargarh) and Mandu as large, lived-in fort-city landscapes; continue those as connected settings while preserving site-specific chronology and the separate uncertainty labels.

## What the register says

- `playable_scene` and `scene_kind` describe software coverage only. A hand-authored scene can still be historically wrong; a generated scene is a schematic placeholder.
- Source counts are discovery references already attached to each site. They are not a source-quality score. Third-party web pages and photographs do not substitute for a measured plan, official inventory, archaeological survey, or dated primary image.
- `UNREVIEWED` means no comparative audit has been completed for that field. `NOT VERIFIED` is the default fidelity result. A fort may only move to verified when its location, footprint, terrain/water, dated phases, ownership, settlement, routes and present condition have each been checked against cited evidence.
- The next research action should identify exact page, map, sheet, figure, image date, and any disagreements. Record a feature as **measured**, **documented**, **inferred**, **disputed**, or **unknown**. Never fill gaps with generated geometry while presenting it as observed fact.

## Evidence sequence for each site

1. Confirm location and boundary against an official survey, protected-monument inventory, heritage authority plan, or georeferenced archival map. Use current aerial imagery to check present land cover and visible footprint, noting imagery provider/date and positional uncertainty.
2. Compare plans, elevations, measured drawings, archaeology, dated photographs and conservation reports. Separate surviving fabric from reconstructed, restored, lost or hypothetical fabric.
3. Create a dated ownership and construction timeline. Model separate campaign-era states; do not show later buildings or unchanged borders in earlier scenarios.
4. Map the surrounding settlement, water, agriculture, markets, ports, roads, passes and crossings as part of the same geographic region. Record seasonal access only where evidence supports it.
5. Reconcile the model against the sources in top, oblique and ground-level views, then mark each component's evidence status in the scene.

## Initial review priority

The first landscape review is Amer and Jaigarh together with the Amber valley settlement, the Jaipur walled-city context, Nahargarh's 1734 and 1868 phases, and Mandu's inhabited plateau. This priority follows the user's direction; it does not change the count or identity of the original catalogue forts. Existing scenes at these sites are explicitly schematic and do not yet satisfy the fidelity bar.

## Regeneration

From the repository root, run `node tools/build-fort-fidelity-audit.mjs`. The script reads the original 138 IDs, catalogue metadata, scene registry and source catalogue to regenerate the CSV. Hand edits in the generated CSV will be overwritten; store reviewed evidence and decisions in the research record/source catalogue and extend the generator when the schema changes.
