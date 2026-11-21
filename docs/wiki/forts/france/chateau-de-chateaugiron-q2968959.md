# Château de Châteaugiron

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-chateaugiron-q2968959` |
| Coordinates | 48.04875, -1.50293 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.04875/-1.50293)) |
| Wikidata | [Q2968959](https://www.wikidata.org/wiki/Q2968959) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Châteaugiron |
| Inception | C12 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 288 elements (road 147, building 584, waterway 1, wall 13, zone 7).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 6, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7392878 historic=castle Q2968959 11 m from ledger point
- site is a site relation of 8 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (109 x 78 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 584 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.04875/-1.50293) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2968959 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 288 elements); data/traces/chateau-de-chateaugiron-q2968959.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
