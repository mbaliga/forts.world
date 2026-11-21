# Tynemouth Castle and Priory

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tynemouth-castle-and-priory-q7860523` |
| Coordinates | 55.0175, -1.41889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.0175/-1.41889)) |
| Wikidata | [Q7860523](https://www.wikidata.org/wiki/Q7860523) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort\|historic house museum\|military museum |
| Administrative area | North Tyneside |
| Inception | 0601 |
| Designations | scheduled monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/tynemouth-priory-and-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 199 elements (outline 1, marker 6, road 110, building 36, zone 12, retaining-wall 5, wall 23, coastline 2, cliff 2, water 2).

Evidence: documented 0, mapped 199, inferred 0, derived 2; heights documented 9, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/104015382 historic=castle Q7860523 70 m from ledger point
- origin moved 71 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":372,"medianInside":-1.6,"medianOutside":10.3}
- sea-1: DEM check ok {"cells":1072,"medianInside":-1.4,"medianOutside":17}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.0175/-1.41889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort\|historic house museum\|military museum; sitelinks=10; wikidata:Q7860523 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 199 elements); data/traces/tynemouth-castle-and-priory-q7860523.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
