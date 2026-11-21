# Bergenhus Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bergenhus-fortress-q583428` |
| Coordinates | 60.39972, 5.3175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.39972/5.3175)) |
| Wikidata | [Q583428](https://www.wikidata.org/wiki/Q583428) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum |
| Administrative area | Bergen Municipality |
| Inception | 1514 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 14 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |
| OSM `website` | https://www.forsvarsbygg.no/no/festningene/finn-din-festning/bergenhus-festning/ |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 17, road 372, coastline 24, building 247, wall 19, retaining-wall 8, zone 13, cliff 5, water 7).

Evidence: documented 0, mapped 364, inferred 0, derived 7; heights documented 69, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/487821106 historic=fort Q583428 36 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 247 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 372 mapped (trace size budget); minor lanes are not drawn
- origin moved 37 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":22,"medianInside":0.1,"medianOutside":1.3}
- sea-1: DEM check ok {"cells":110,"medianInside":0,"medianOutside":1.4}
- sea-2: DEM check ok {"cells":1175,"medianInside":0,"medianOutside":3.3}
- sea-3: DEM check failed {"cells":3585,"medianInside":1.3,"medianOutside":0}
- sea-4: DEM check failed {"cells":3484,"medianInside":1.3,"medianOutside":0.4}
- sea-5: DEM check failed {"cells":3588,"medianInside":1.2,"medianOutside":0.4}
- sea-6: DEM check ok {"cells":3600,"medianInside":1.2,"medianOutside":null}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.39972/5.3175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum; sitelinks=14; wikidata:Q583428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/bergenhus-fortress-q583428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
