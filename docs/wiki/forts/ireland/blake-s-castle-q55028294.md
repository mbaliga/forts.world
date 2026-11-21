# Blake's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blake-s-castle-q55028294` |
| Coordinates | 53.27079, -9.05455 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.27079/-9.05455)) |
| Wikidata | [Q55028294](https://www.wikidata.org/wiki/Q55028294) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Galway |
| Inception | 1470 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 8, road 287, waterway 20, building 310, zone 11, water 5, coastline 4, wall 14).

Evidence: documented 0, mapped 333, inferred 0, derived 3; heights documented 68, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1022503399 historic=castle Q55028294 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 310 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 287 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":2,"medianOutside":6.3}
- sea-1: DEM check ok {"cells":32,"medianInside":3,"medianOutside":6.4}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":6.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.27079/-9.05455) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=2; wikidata:Q55028294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/blake-s-castle-q55028294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
