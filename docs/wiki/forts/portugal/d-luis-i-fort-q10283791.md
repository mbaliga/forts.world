# D. Luís I. Fort

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `d-luis-i-fort-q10283791` |
| Coordinates | 38.70451, -9.26721 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.70451/-9.26721)) |
| Wikidata | [Q10283791](https://www.wikidata.org/wiki/Q10283791) (CC0) |
| Wikidata class | fort |
| Types | prison\|fort |
| Administrative area | Oeiras e São Julião da Barra, Paço de Arcos e Caxias |
| Inception | 1886 |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 55 elements (outline 1, road 32, retaining-wall 3, building 10, waterway 2, wall 2, zone 2, coastline 1, water 2).

Evidence: documented 0, mapped 55, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19509146 historic=archaeological_site Q113303449 554 m from ledger point
- origin moved 578 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":44,"medianInside":-0.2,"medianOutside":30.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.70451/-9.26721) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; prison\|fort; sitelinks=5; wikidata:Q10283791 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 55 elements); data/traces/d-luis-i-fort-q10283791.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
