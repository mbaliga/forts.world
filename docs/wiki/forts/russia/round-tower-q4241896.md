# Round Tower

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `round-tower-q4241896` |
| Coordinates | 60.71297, 28.73729 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.71297/28.73729)) |
| Wikidata | [Q4241896](https://www.wikidata.org/wiki/Q4241896) (CC0) |
| Wikidata class | fort |
| Types | tower\|architectural landmark\|fort |
| Administrative area | Vyborg |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://vyborgmuseum.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 8, road 258, building 18, coastline 11, wall 15, retaining-wall 16, cliff 11, zone 16, water 3).

Evidence: documented 0, mapped 357, inferred 0, derived 3; heights documented 19, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19317626 historic=castle Q2272243 570 m from ledger point
- island ring (18213 m2) cut out of sea-0
- origin moved 573 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":402,"medianInside":11.2,"medianOutside":20.1}
- sea-1: DEM check failed {"cells":483,"medianInside":11.9,"medianOutside":18.4}
- sea-2: DEM check failed {"cells":429,"medianInside":12,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.71297/28.73729) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|architectural landmark\|fort; sitelinks=10; wikidata:Q4241896 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/round-tower-q4241896.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
