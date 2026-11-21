# 35 Żeromskiego Street in Radom

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `35-zeromskiego-street-in-radom-q20032303` |
| Coordinates | 51.40164, 21.15434 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.40164/21.15434)) |
| Wikidata | [Q20032303](https://www.wikidata.org/wiki/Q20032303) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|administrative building |
| Administrative area | Radom |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 5, road 292, building 227, zone 112, wall 54).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 61, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/671904025 historic=castle Q20032785 259 m from ledger point
- pruned to the outline plus 150 m: 691 -> 490 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 151 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 218 mapped (trace size budget); minor lanes are not drawn
- origin moved 258 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.40164/21.15434) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|administrative building; sitelinks=2; wikidata:Q20032303 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/35-zeromskiego-street-in-radom-q20032303.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
