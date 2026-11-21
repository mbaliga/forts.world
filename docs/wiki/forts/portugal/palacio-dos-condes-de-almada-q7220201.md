# Palácio dos Condes de Almada

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-dos-condes-de-almada-q7220201` |
| Coordinates | 38.71527, -9.1393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71527/-9.1393)) |
| Wikidata | [Q7220201](https://www.wikidata.org/wiki/Q7220201) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Santa Maria Maior |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Fundado em 1467, por D. Fernando de Almada, a sua traça medieval primitiva foi conhecendo alterações, tendo subsistido dessa época 4 portais e 2 grandes cháminés de cones facetados, à semelhança das do Palácio da Vila de Sintra. |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 8, road 231, building 362, retaining-wall 20, wall 20, zone 4, water 1).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 9, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8335154 historic=castle Q7220201 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 362 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71527/-9.1393) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=4; wikidata:Q7220201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/palacio-dos-condes-de-almada-q7220201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
