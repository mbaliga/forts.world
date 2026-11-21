# Fortress with gates and bastions

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-with-gates-and-bastions-q30060893` |
| Coordinates | 50.81236, 19.09701 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.81236/19.09701)) |
| Wikidata | [Q30060893](https://www.wikidata.org/wiki/Q30060893) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Częstochowa |
| Inception | 1630 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.jasnagora.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 59, road 359, building 206, zone 45, wall 34).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 7, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13236692 historic=castle Q573920 21 m from ledger point
- pruned to the outline plus 150 m: 704 -> 560 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 136 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the centre of the mapped site
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.81236/19.09701) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=0; wikidata:Q30060893 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/fortress-with-gates-and-bastions-q30060893.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
