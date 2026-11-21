# Reduto Gomes Freire

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reduto-gomes-freire-q115359530` |
| Coordinates | 38.68001, -9.32215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.68001/-9.32215)) |
| Wikidata | [Q115359530](https://www.wikidata.org/wiki/Q115359530) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|redoubt |
| Administrative area | Oeiras e São Julião da Barra, Paço de Arcos e Caxias |
| Designations | heritage without legal protection |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 97 elements (outline 1, road 56, building 25, wall 3, zone 7, coastline 1, retaining-wall 1, water 2).

Evidence: documented 0, mapped 97, inferred 0, derived 2; heights documented 3, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158749534 historic=castle Q10283853 461 m from ledger point
- origin moved 461 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":398,"medianInside":4.8,"medianOutside":0}
- sea-1: DEM check ok {"cells":145,"medianInside":0,"medianOutside":12.4}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.68001/-9.32215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|redoubt; sitelinks=1; wikidata:Q115359530 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 97 elements); data/traces/reduto-gomes-freire-q115359530.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
