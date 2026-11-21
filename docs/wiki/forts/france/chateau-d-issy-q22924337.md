# Château d'Issy

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-issy-q22924337` |
| Coordinates | 48.82274, 2.27326 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.82274/2.27326)) |
| Wikidata | [Q22924337](https://www.wikidata.org/wiki/Q22924337) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château\|destroyed building or structure |
| Administrative area | Issy-les-Moulineaux |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 301 elements (marker 5, road 286, building 497, water 1, retaining-wall 7, wall 16, zone 2).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 2, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20259514 historic=castle Q22924337 1 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (26 x 47 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 497 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 286 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.82274/2.27326) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château\|destroyed building or structure; sitelinks=3; wikidata:Q22924337 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 301 elements); data/traces/chateau-d-issy-q22924337.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
