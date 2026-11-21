# Château de La Voulte

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-la-voulte-q2969602` |
| Coordinates | 45.00506, 2.48778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.00506/2.48778)) |
| Wikidata | [Q2969602](https://www.wikidata.org/wiki/Q2969602) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Marmanhac |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, zone 1, road 19, building 45, waterway 1, wall 1).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 1, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254855442 historic=castle Q2969602 1 m from ledger point
- 1476 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.00506/2.48778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2969602 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/chateau-de-la-voulte-q2969602.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
