# Bases da muralha de Cascais

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bases-da-muralha-de-cascais-q9650613` |
| Coordinates | 38.69698, -9.41979 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69698/-9.41979)) |
| Wikidata | [Q9650613](https://www.wikidata.org/wiki/Q9650613) (CC0) |
| Wikidata class | fort |
| Types | defensive wall\|cultural heritage\|fort |
| Administrative area | Cascais e Estoril |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `description` | Edifício notável |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, marker 1, road 123, retaining-wall 3, building 422, wall 8, zone 11, water 3, waterway 1, coastline 1).

Evidence: documented 0, mapped 272, inferred 0, derived 1; heights documented 32, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/556181649 historic=castle 110 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 422 mapped (trace size budget); the rest of the town is not drawn
- origin moved 110 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":168,"medianInside":0,"medianOutside":12.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69698/-9.41979) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; defensive wall\|cultural heritage\|fort; sitelinks=2; wikidata:Q9650613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/bases-da-muralha-de-cascais-q9650613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
