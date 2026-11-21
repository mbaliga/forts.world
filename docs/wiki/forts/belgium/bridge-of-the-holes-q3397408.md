# Bridge of the Holes

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bridge-of-the-holes-q3397408` |
| Coordinates | 50.613, 3.38379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.613/3.38379)) |
| Wikidata | [Q3397408](https://www.wikidata.org/wiki/Q3397408) (CC0) |
| Wikidata class | fortification |
| Types | water gate\|stone bridge |
| Administrative area | Tournai |
| Inception | 1281 |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 2, road 128, building 728, water 1, waterway 1, wall 83, zone 1, retaining-wall 2).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 1, inferred 0, unknown 204.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/453104798 historic=citywalls Q123482861 627 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 728 mapped (trace size budget); the rest of the town is not drawn
- origin moved 628 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.613/3.38379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; water gate\|stone bridge; sitelinks=7; wikidata:Q3397408 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/bridge-of-the-holes-q3397408.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
