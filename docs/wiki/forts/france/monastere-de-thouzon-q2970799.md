# Monastère de Thouzon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `monastere-de-thouzon-q2970799` |
| Coordinates | 43.94523, 4.9857 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.94523/4.9857)) |
| Wikidata | [Q2970799](https://www.wikidata.org/wiki/Q2970799) (CC0) |
| Wikidata class | castle |
| Types | castle\|monastery\|yes\|abbey |
| Administrative area | Le Thor |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | monastery |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 89 elements (outline 1, building 22, road 64, waterway 1, zone 1).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/544424579 historic=castle Q2970799 7 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.94523/4.9857) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monastery\|yes\|abbey; sitelinks=2; wikidata:Q2970799 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 89 elements); data/traces/monastere-de-thouzon-q2970799.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
