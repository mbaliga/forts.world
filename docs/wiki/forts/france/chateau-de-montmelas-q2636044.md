# Château de Montmelas

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-montmelas-q2636044` |
| Coordinates | 46.0111, 4.62167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.0111/4.62167)) |
| Wikidata | [Q2636044](https://www.wikidata.org/wiki/Q2636044) (CC0) |
| Wikidata class | castle |
| Types | castle\|winery\|château |
| Administrative area | Saint-Julien |
| Designations | monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 66 elements (marker 1, road 20, building 35, wall 6, zone 3, water 1).

Evidence: documented 0, mapped 66, inferred 0, derived 0; heights documented 0, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2798716 historic=castle Q2636044 33 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (89 x 120 m)
- origin moved 41 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.0111/4.62167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|winery\|château; sitelinks=4; wikidata:Q2636044 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/chateau-de-montmelas-q2636044.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
