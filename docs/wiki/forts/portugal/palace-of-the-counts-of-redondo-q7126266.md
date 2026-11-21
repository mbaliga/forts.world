# Palace of the Counts of Redondo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-counts-of-redondo-q7126266` |
| Coordinates | 38.72426, -9.14569 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72426/-9.14569)) |
| Wikidata | [Q7126266](https://www.wikidata.org/wiki/Q7126266) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building\|cultural heritage |
| Administrative area | Santo António |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Edificado no 3º quartel do séc. XVII, por iniciativa do 7º ou 8º Conde de Redondo, este palácio, classificado como Imóvel de Interesse Público e traduzindo um exemplar de arquitectura residencial barroca, resistiu ao Terramoto de 1755 sem danos si |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, road 164, building 351, retaining-wall 4, wall 6, waterway 1, zone 1).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 10, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4218666 historic=castle Q7126266 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72426/-9.14569) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building\|cultural heritage; sitelinks=4; wikidata:Q7126266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/palace-of-the-counts-of-redondo-q7126266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
