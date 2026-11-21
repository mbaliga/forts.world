# Romanesque palatium in Kraków

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `romanesque-palatium-in-krakow-q122187245` |
| Coordinates | 50.05496, 19.93655 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05496/19.93655)) |
| Wikidata | [Q122187245](https://www.wikidata.org/wiki/Q122187245) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | fortification |
| OSM `website` | https://www.katedra-wawelska.pl/katedra-wawelska/dzwony-i-wieze-katedralne/wieza-zygmuntowska/ |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 59, road 305, building 98, wall 118, waterway 1, zone 114, retaining-wall 2).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 66, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/396000369 historic=fortification Q9373801 68 m from ledger point
- pruned to the outline plus 150 m: 698 -> 411 elements
- roads capped: kept the 80 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 69 m from the ledger point to the outline centroid
- 38 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05496/19.93655) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=0; wikidata:Q122187245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/romanesque-palatium-in-krakow-q122187245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
