# Tostov palác

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tostov-palac-q112093923` |
| Coordinates | 48.72411, 21.25192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72411/21.25192)) |
| Wikidata | [Q112093923](https://www.wikidata.org/wiki/Q112093923) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|apartment building |
| Administrative area | Old Town |
| Inception | 1912 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://tostovpalac.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, marker 7, road 217, building 178, wall 40, zone 100, waterway 1).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 18, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/47704740 historic=castle Q112093923 6 m from ledger point
- pruned to the outline plus 150 m: 544 -> 317 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 119 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 115 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72411/21.25192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|apartment building; sitelinks=0; wikidata:Q112093923 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 223 elements); data/traces/tostov-palac-q112093923.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
