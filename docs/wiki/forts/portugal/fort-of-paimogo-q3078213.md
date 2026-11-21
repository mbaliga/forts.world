# Fort of Paimogo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-paimogo-q3078213` |
| Coordinates | 39.2874, -9.34047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.2874/-9.34047)) |
| Wikidata | [Q3078213](https://www.wikidata.org/wiki/Q3078213) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Lourinhã e Atalaia |
| Inception | 1674 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | Forte (ruínas) no lugar de Paimogo |
| OSM `barrier` | city_wall |
| OSM `website` | https://servicos.dgpc.gov.pt/pesquisapatrimonioimovel/detalhes.php?code=74218 |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, coastline 2, building 5, wall 13, retaining-wall 2, road 20, cliff 4, zone 1, water 1).

Evidence: documented 0, mapped 50, inferred 0, derived 1; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/479314582 historic=castle Q3078213 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":136,"medianInside":0,"medianOutside":27}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.2874/-9.34047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=5; wikidata:Q3078213 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/fort-of-paimogo-q3078213.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
