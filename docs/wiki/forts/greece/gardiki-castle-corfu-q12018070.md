# Gardiki Castle, Corfu

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gardiki-castle-corfu-q12018070` |
| Coordinates | 39.47678, 19.88508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.47678/19.88508)) |
| Wikidata | [Q12018070](https://www.wikidata.org/wiki/Q12018070) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Southern Corfu Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 9 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, marker 1, road 11, wall 11, building 5, zone 1).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 8, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19805887 historic=citywalls 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.47678/19.88508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q12018070 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 31 elements); data/traces/gardiki-castle-corfu-q12018070.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
