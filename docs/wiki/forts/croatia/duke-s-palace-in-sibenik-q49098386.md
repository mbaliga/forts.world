# Duke's Palace in Šibenik

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duke-s-palace-in-sibenik-q49098386` |
| Coordinates | 43.73524, 15.88935 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.73524/15.88935)) |
| Wikidata | [Q49098386](https://www.wikidata.org/wiki/Q49098386) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Šibenik |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 8, road 268, zone 17, building 274, wall 8, retaining-wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 308, inferred 0, derived 1; heights documented 8, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13374363 historic=castle Q49098386 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 274 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 268 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":189,"medianInside":0,"medianOutside":13.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.73524/15.88935) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=4; wikidata:Q49098386 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/duke-s-palace-in-sibenik-q49098386.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
