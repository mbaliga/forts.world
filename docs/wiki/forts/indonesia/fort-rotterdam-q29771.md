# Fort Rotterdam

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-rotterdam-q29771` |
| Coordinates | -5.13439, 119.40575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-5.13439/119.40575)) |
| Wikidata | [Q29771](https://www.wikidata.org/wiki/Q29771) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort\|military museum |
| Administrative area | Makassar |
| Inception | 1545 |
| Wikipedia language editions | 16 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 2, road 82, building 216, zone 7, wall 1, water 4, coastline 1, waterway 1).

Evidence: documented 0, mapped 315, inferred 0, derived 3; heights documented 29, inferred 0, unknown 188.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195837380 historic=fort Q29771 39 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":136,"medianInside":5.5,"medianOutside":6}
- sea-1: DEM check ok {"cells":162,"medianInside":1,"medianOutside":6}
- sea-2: DEM check ok {"cells":9,"medianInside":2.9,"medianOutside":6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-5.13439/119.40575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort\|military museum; sitelinks=16; wikidata:Q29771 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/fort-rotterdam-q29771.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
