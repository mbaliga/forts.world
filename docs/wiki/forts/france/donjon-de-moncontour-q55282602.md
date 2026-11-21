# Donjon de Moncontour

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-de-moncontour-q55282602` |
| Coordinates | 46.88239, -0.01458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.88239/-0.01458)) |
| Wikidata | [Q55282602](https://www.wikidata.org/wiki/Q55282602) (CC0) |
| Wikidata class | castle |
| Types | château\|keep |
| Administrative area | Moncontour |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | hauteur 25 mètres |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 1, zone 19, building 254, road 73, wall 11, waterway 10, retaining-wall 2).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 0, inferred 0, unknown 267.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/131956112 historic=castle Q22956156 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.88239/-0.01458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|keep; sitelinks=2; wikidata:Q55282602 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/donjon-de-moncontour-q55282602.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
