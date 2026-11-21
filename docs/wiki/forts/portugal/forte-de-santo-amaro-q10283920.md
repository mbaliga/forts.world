# Forte de Santo Amaro

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-santo-amaro-q10283920` |
| Coordinates | 38.68127, -9.3149 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.68127/-9.3149)) |
| Wikidata | [Q10283920](https://www.wikidata.org/wiki/Q10283920) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Oeiras e São Julião da Barra, Paço de Arcos e Caxias |
| Inception | 1659 |
| Designations | heritage without legal protection |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 195 elements (outline 1, road 110, retaining-wall 8, building 41, zone 11, wall 18, coastline 1, water 3, waterway 1).

Evidence: documented 0, mapped 195, inferred 0, derived 2; heights documented 2, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158749032 historic=castle Q10283920 64 m from ledger point
- origin moved 67 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":221,"medianInside":0,"medianOutside":12.4}
- sea-1: DEM check failed {"cells":564,"medianInside":8.3,"medianOutside":1.7}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.68127/-9.3149) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q10283920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 195 elements); data/traces/forte-de-santo-amaro-q10283920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
