# Volyn Fort

> Belarus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `volyn-fort-q107283002` |
| Coordinates | 52.07832, 23.65826 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.07832/23.65826)) |
| Wikidata | [Q107283002](https://www.wikidata.org/wiki/Q107283002) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Brest |
| Designations | Cultural heritage of Belarus |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Photos: https://openpoimap.org/?map=various&zoom=17&lat=52.08302&lon=23.65507&layers=B00FFFFFFFFFFFFFTFFFFFF |

## What the model contains

Tier **T1**, status `outline+walls`, 126 elements (outline 1, marker 6, waterway 4, road 63, zone 35, building 6, water 2, wall 9).

Evidence: documented 0, mapped 126, inferred 0, derived 0; heights documented 4, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9165830 historic=castle Q23868 572 m from ledger point
- origin moved 986 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.07832/23.65826) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q107283002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 126 elements); data/traces/volyn-fort-q107283002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belarus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
