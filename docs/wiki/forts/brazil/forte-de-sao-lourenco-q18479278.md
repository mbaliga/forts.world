# Forte de São Lourenço

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-lourenco-q18479278` |
| Coordinates | -12.87944, -38.68545 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-12.87944/-38.68545)) |
| Wikidata | [Q18479278](https://www.wikidata.org/wiki/Q18479278) (CC0) |
| Wikidata class | fort |
| Types | hospital\|prison\|historic site\|fort |
| Administrative area | Itaparica |
| Inception | 1647 |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `description` | O Forte de São Lourenço localiza-se na ponta da Baleia, extremo norte da ilha de Itaparica, atual Praça Getúlio Vargas s/n°, município de Itaparica, no litoral do estado brasileiro da Bahia. Junto à portada do forte existe uma placa do Instituto Geográfic |

## What the model contains

Tier **T1**, status `outline-only`, 43 elements (outline 1, road 33, building 7, coastline 1, water 1).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/472955524 historic=fort Q18479278 15 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":265,"medianInside":0.1,"medianOutside":3}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-12.87944/-38.68545) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hospital\|prison\|historic site\|fort; sitelinks=4; wikidata:Q18479278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 43 elements); data/traces/forte-de-sao-lourenco-q18479278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
