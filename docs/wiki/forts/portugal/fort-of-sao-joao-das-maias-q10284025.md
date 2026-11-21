# Fort of São João das Maias

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-sao-joao-das-maias-q10284025` |
| Coordinates | 38.68528, -9.30444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.68528/-9.30444)) |
| Wikidata | [Q10284025](https://www.wikidata.org/wiki/Q10284025) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Oeiras e São Julião da Barra, Paço de Arcos e Caxias |
| Inception | 1644 |
| Designations | heritage without legal protection |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, road 24, building 11, retaining-wall 6, wall 4, coastline 1, zone 1, waterway 1, water 1).

Evidence: documented 0, mapped 51, inferred 0, derived 1; heights documented 1, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180125691 historic=castle Q10284025 61 m from ledger point
- origin moved 57 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":228,"medianInside":0,"medianOutside":14.9}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.68528/-9.30444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q10284025 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/fort-of-sao-joao-das-maias-q10284025.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
