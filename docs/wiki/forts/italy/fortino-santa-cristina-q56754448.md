# Fortino Santa Cristina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortino-santa-cristina-q56754448` |
| Coordinates | 39.14489, 8.30375 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.14489/8.30375)) |
| Wikidata | [Q56754448](https://www.wikidata.org/wiki/Q56754448) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Carloforte |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, road 90, building 124, wall 5, zone 1, coastline 1, water 2).

Evidence: documented 0, mapped 224, inferred 0, derived 2; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1340048297 historic=castle 552 m from ledger point
- origin moved 552 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":20,"medianInside":0.1,"medianOutside":10.3}
- sea-1: DEM check ok {"cells":8,"medianInside":-0.3,"medianOutside":10}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.14489/8.30375) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q56754448 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/fortino-santa-cristina-q56754448.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
