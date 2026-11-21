# Fort of São Sebastião de Caparica

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-sao-sebastiao-de-caparica-q10284061` |
| Coordinates | 38.67653, -9.21161 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.67653/-9.21161)) |
| Wikidata | [Q10284061](https://www.wikidata.org/wiki/Q10284061) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort\|former hospital |
| Administrative area | Caparica e Trafaria |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 112 elements (outline 1, coastline 1, building 32, road 23, wall 51, cliff 1, zone 1, waterway 1, water 1).

Evidence: documented 0, mapped 112, inferred 0, derived 1; heights documented 0, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8718577 historic=fort Q10284061 17 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":154,"medianInside":0,"medianOutside":31.1}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.67653/-9.21161) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort\|former hospital; sitelinks=5; wikidata:Q10284061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 112 elements); data/traces/fort-of-sao-sebastiao-de-caparica-q10284061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
