# Fort Paull

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-paull-q8564766` |
| Coordinates | 53.71273, -0.22987 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.71273/-0.22987)) |
| Wikidata | [Q8564766](https://www.wikidata.org/wiki/Q8564766) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum |
| Administrative area | Paull |
| Inception | 1861 |
| Designations | Grade II listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `website` | https://www.fortpaull.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, road 25, coastline 1, waterway 2, building 22, retaining-wall 9, wall 5, zone 3, water 3).

Evidence: documented 0, mapped 71, inferred 0, derived 3; heights documented 0, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1062183632 historic=fort Q8564766 89 m from ledger point
- origin moved 86 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":530,"medianInside":-1.5,"medianOutside":9}
- sea-1: DEM check ok {"cells":68,"medianInside":3,"medianOutside":6.7}
- sea-2: DEM check ok {"cells":1,"medianInside":3.9,"medianOutside":6.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.71273/-0.22987) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum; sitelinks=3; wikidata:Q8564766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/fort-paull-q8564766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
