# Derby Fort

> Isle of Man · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `derby-fort-q65042900` |
| Coordinates | 54.07506, -4.60508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.07506/-4.60508)) |
| Wikidata | [Q65042900](https://www.wikidata.org/wiki/Q65042900) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Malew |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, road 28, building 1, coastline 4, zone 8, wall 7, cliff 1, water 2).

Evidence: documented 0, mapped 52, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11304320 historic=castle Q31103110 4 m from ledger point
- island ring (1896 m2) cut out of sea-1
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":6,"medianInside":2.9,"medianOutside":2}
- sea-1: DEM check ok {"cells":257,"medianInside":1.5,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.07506/-4.60508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q65042900 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 52 elements); data/traces/derby-fort-q65042900.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/isle-of-man.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
