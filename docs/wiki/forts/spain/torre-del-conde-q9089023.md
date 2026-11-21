# Torre del Conde

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-conde-q9089023` |
| Coordinates | 28.09056, -17.11167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.09056/-17.11167)) |
| Wikidata | [Q9089023](https://www.wikidata.org/wiki/Q9089023) (CC0) |
| Wikidata class | fort |
| Types | fortification\|monument\|defensive tower |
| Administrative area | San Sebastián de La Gomera |
| Inception | 1447 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 357 elements (outline 1, marker 1, road 167, building 168, waterway 1, zone 11, retaining-wall 3, water 4, coastline 1).

Evidence: documented 0, mapped 357, inferred 0, derived 2; heights documented 1, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28960205 historic=castle Q9089023 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":21,"medianInside":0.3,"medianOutside":8.9}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":8.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.09056/-17.11167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|monument\|defensive tower; sitelinks=7; wikidata:Q9089023 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 357 elements); data/traces/torre-del-conde-q9089023.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
