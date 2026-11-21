# Castell del Regomir

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-del-regomir-q17596819` |
| Coordinates | 41.38111, 2.18 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38111/2.18)) |
| Wikidata | [Q17596819](https://www.wikidata.org/wiki/Q17596819) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gothic Quarter |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 9, road 275, building 202, wall 3, waterway 4, coastline 1, water 3, retaining-wall 1, zone 4).

Evidence: documented 0, mapped 296, inferred 0, derived 1; heights documented 119, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9225548 historic=castle Q20898622 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 202 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 275 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":2.8,"medianOutside":22.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38111/2.18) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q17596819 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/castell-del-regomir-q17596819.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
