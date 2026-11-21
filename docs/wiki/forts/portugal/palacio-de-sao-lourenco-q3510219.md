# Palácio de São Lourenço

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-sao-lourenco-q3510219` |
| Coordinates | 32.64721, -16.9102 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.64721/-16.9102)) |
| Wikidata | [Q3510219](https://www.wikidata.org/wiki/Q3510219) (CC0) |
| Wikidata class | fort |
| Types | palace\|cultural heritage\|museum\|fort |
| Administrative area | Sé |
| Inception | 1490 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 351 elements (outline 1, marker 7, road 354, building 211, waterway 3, water 6, wall 32, zone 23, retaining-wall 5, coastline 4).

Evidence: documented 0, mapped 351, inferred 0, derived 3; heights documented 117, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/137755873 historic=fort Q3510219 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 354 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2,"medianInside":12.9,"medianOutside":24.7}
- sea-1: DEM check ok {"cells":35,"medianInside":0,"medianOutside":25.6}
- sea-2: DEM check ok {"cells":20,"medianInside":1.9,"medianOutside":25.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.64721/-16.9102) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; palace\|cultural heritage\|museum\|fort; sitelinks=5; wikidata:Q3510219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 351 elements); data/traces/palacio-de-sao-lourenco-q3510219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
