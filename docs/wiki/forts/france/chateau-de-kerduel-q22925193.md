# Château de Kerduel

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-kerduel-q22925193` |
| Coordinates | 48.76573, -3.49506 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.76573/-3.49506)) |
| Wikidata | [Q22925193](https://www.wikidata.org/wiki/Q22925193) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Pleumeur-Bodou |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 17 elements (zone 5, road 5, water 1, building 5, waterway 1).

Evidence: documented 0, mapped 17, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3973597 historic=castle Q22925193 9 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (110 x 79 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.76573/-3.49506) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q22925193 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/chateau-de-kerduel-q22925193.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
