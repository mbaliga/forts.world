# Château de Gaillon

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-gaillon-q1989567` |
| Coordinates | 49.16157, 1.32978 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.16157/1.32978)) |
| Wikidata | [Q1989567](https://www.wikidata.org/wiki/Q1989567) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Le Val-d'Hazey |
| Inception | 1192 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 316 elements (marker 1, road 135, zone 22, building 484, wall 22, waterway 2, retaining-wall 14).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 7, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15949599 historic=castle Q1989567 25 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (102 x 157 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 484 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.16157/1.32978) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=10; wikidata:Q1989567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/chateau-de-gaillon-q1989567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
