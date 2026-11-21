# Fraserburgh Wine Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fraserburgh-wine-tower-q17570440` |
| Coordinates | 57.69742, -2.00272 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.69742/-2.00272)) |
| Wikidata | [Q17570440](https://www.wikidata.org/wiki/Q17570440) (CC0) |
| Wikidata class | castle |
| Types | hill castle |
| Administrative area | Aberdeenshire |
| Inception | 1600 |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline-only`, 224 elements (outline 1, marker 2, road 59, coastline 3, building 152, water 7).

Evidence: documented 0, mapped 224, inferred 0, derived 5; heights documented 2, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1489254088 historic=tomb 458 m from ledger point
- origin moved 457 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":399,"medianInside":12.6,"medianOutside":5}
- sea-1: DEM check failed {"cells":398,"medianInside":12.6,"medianOutside":5}
- sea-2: DEM check ok {"cells":36,"medianInside":5.6,"medianOutside":12.9}
- sea-3: DEM check ok {"cells":18,"medianInside":5.5,"medianOutside":12.6}
- sea-4: DEM check ok {"cells":12,"medianInside":6.3,"medianOutside":12.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.69742/-2.00272) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; hill castle; sitelinks=3; wikidata:Q17570440 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 224 elements); data/traces/fraserburgh-wine-tower-q17570440.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
