# Palau de la Generalitat

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palau-de-la-generalitat-q599118` |
| Coordinates | 41.38311, 2.17632 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38311/2.17632)) |
| Wikidata | [Q599118](https://www.wikidata.org/wiki/Q599118) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building of public administration |
| Administrative area | Gothic Quarter |
| Inception | 1400 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 18, road 197, wall 14, building 234, waterway 4, retaining-wall 1, water 2, zone 2).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 117, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2874767 historic=castle Q599118 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 234 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38311/2.17632) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building of public administration; sitelinks=14; wikidata:Q599118 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/palau-de-la-generalitat-q599118.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
