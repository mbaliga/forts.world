# Portuguese Castle

> Iran · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portuguese-castle-q3944984` |
| Coordinates | 27.10068, 56.45213 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.10068/56.45213)) |
| Wikidata | [Q3944984](https://www.wikidata.org/wiki/Q3944984) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural property |
| Administrative area | Hormozgan Province |
| Inception | 1507 |
| Designations | Heritage of Portuguese Influence\|Iranian National Heritage |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, coastline 1, road 18, wall 2, water 2, building 2).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8100175 historic=castle Q3944984 16 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1871,"medianInside":0.7,"medianOutside":5.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.10068/56.45213) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural property; sitelinks=11; wikidata:Q3944984 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/portuguese-castle-q3944984.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/iran.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
