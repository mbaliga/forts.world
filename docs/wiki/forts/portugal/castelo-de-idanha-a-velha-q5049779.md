# Castelo de Idanha-a-Velha

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-idanha-a-velha-q5049779` |
| Coordinates | 39.99556, -7.14389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.99556/-7.14389)) |
| Wikidata | [Q5049779](https://www.wikidata.org/wiki/Q5049779) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Monsanto e Idanha-a-Velha |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 3, road 55, waterway 3, building 57, wall 8, zone 2).

Evidence: documented 0, mapped 129, inferred 0, derived 0; heights documented 0, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/219984193 historic=building 31 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- 41 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.99556/-7.14389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q5049779 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/castelo-de-idanha-a-velha-q5049779.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
