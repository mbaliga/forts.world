# Fort of Giribita

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-giribita-q10283859` |
| Coordinates | 38.69739, -9.28255 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69739/-9.28255)) |
| Wikidata | [Q10283859](https://www.wikidata.org/wiki/Q10283859) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Oeiras e São Julião da Barra, Paço de Arcos e Caxias |
| Inception | 1649 |
| Designations | Under study listing |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 81 elements (outline 1, marker 1, road 41, retaining-wall 5, building 14, zone 3, waterway 13, coastline 1, water 1).

Evidence: documented 0, mapped 81, inferred 0, derived 1; heights documented 1, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158649640 historic=castle Q10283859 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":225,"medianInside":0,"medianOutside":17.3}
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69739/-9.28255) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q10283859 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 81 elements); data/traces/fort-of-giribita-q10283859.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
