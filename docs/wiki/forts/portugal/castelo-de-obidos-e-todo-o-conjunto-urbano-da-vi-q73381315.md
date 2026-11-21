# Castelo de Óbidos e todo o conjunto urbano da vila

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-obidos-e-todo-o-conjunto-urbano-da-vi-q73381315` |
| Coordinates | 39.35954, -9.15821 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.35954/-9.15821)) |
| Wikidata | [Q73381315](https://www.wikidata.org/wiki/Q73381315) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage\|old town |
| Administrative area | Santa Maria, São Pedro e Sobral da Lagoa |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, marker 3, road 101, building 124, wall 26, zone 10, waterway 3, water 1, retaining-wall 2).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 3, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64880896 historic=citywalls Q2579998 443 m from ledger point
- origin moved 443 m from the ledger point to the outline centroid
- 56 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.35954/-9.15821) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage\|old town; sitelinks=1; wikidata:Q73381315 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/castelo-de-obidos-e-todo-o-conjunto-urbano-da-vi-q73381315.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
