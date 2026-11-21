# Roman Walls of Lugo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roman-walls-of-lugo-q2733427` |
| Coordinates | 43.01419, -7.55989 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.01419/-7.55989)) |
| Wikidata | [Q2733427](https://www.wikidata.org/wiki/Q2733427) (CC0) |
| Wikidata class | fortification |
| Types | monument\|city walls |
| Administrative area | Lugo |
| Designations | list of World Heritage Sites in Galicia\|part of UNESCO World Heritage Site\|bien de interés cultural\|World Heritage Site |
| UNESCO WHC id | 987 |
| Wikipedia language editions | 29 |
| OSM `historic` | citywalls |
| OSM `heritage` | 1 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 388 elements (outline 1, marker 38, road 704, wall 22, building 3904, zone 52, retaining-wall 19).

Evidence: documented 0, mapped 388, inferred 0, derived 0; heights documented 196, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1225220 historic=citywalls Q2733427 345 m from ledger point
- pruned to the outline plus 80 m: 4740 -> 3894 elements
- present-day buildings capped: kept the 200 nearest the outline centre of 3273 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 514 mapped (trace size budget); minor lanes are not drawn
- origin moved 311 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.01419/-7.55989) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|city walls; sitelinks=29; wikidata:Q2733427 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/roman-walls-of-lugo-q2733427.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
