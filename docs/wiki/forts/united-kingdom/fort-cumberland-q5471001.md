# Fort Cumberland

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-cumberland-q5471001` |
| Coordinates | 50.78889, -1.0325 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.78889/-1.0325)) |
| Wikidata | [Q5471001](https://www.wikidata.org/wiki/Q5471001) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | City of Portsmouth |
| Designations | Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, road 47, water 3, coastline 2, building 58, retaining-wall 19, wall 5, waterway 2, zone 5).

Evidence: documented 0, mapped 142, inferred 0, derived 2; heights documented 24, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1062175191 historic=fort Q5471001 28 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":445,"medianInside":-2,"medianOutside":3.7}
- sea-1: DEM check ok {"cells":159,"medianInside":0.1,"medianOutside":2.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.78889/-1.0325) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q5471001 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/fort-cumberland-q5471001.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
