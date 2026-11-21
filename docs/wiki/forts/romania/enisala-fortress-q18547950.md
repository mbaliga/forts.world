# Enisala Fortress

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enisala-fortress-q18547950` |
| Coordinates | 44.88389, 28.83531 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.88389/28.83531)) |
| Wikidata | [Q18547950](https://www.wikidata.org/wiki/Q18547950) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site |
| Administrative area | Tulcea County |
| Designations | Historic Monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | Fortress build by the Genoese merchants late in the XIII century., on the side of the VII century Byzantine fort. |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | http://www.cetateaenisala.ro |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 10, zone 2, waterway 1, building 4, wall 1, cliff 2).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/345215627 historic=castle Q18547950 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.88389/28.83531) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site; sitelinks=3; wikidata:Q18547950 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/enisala-fortress-q18547950.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
