# Château de Valençay

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-valencay-q1142363` |
| Coordinates | 47.15754, 1.56328 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.15754/1.56328)) |
| Wikidata | [Q1142363](https://www.wikidata.org/wiki/Q1142363) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|no\|château |
| Administrative area | Valençay |
| Designations | monument historique inscrit\|Maisons des Illustres\|classified historical monument |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `ruins` | no |
| OSM `website` | https://www.chateau-valencay.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 191 elements (outline 1, road 52, building 91, water 11, waterway 2, retaining-wall 3, wall 3, zone 28).

Evidence: documented 0, mapped 191, inferred 0, derived 0; heights documented 0, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/133420704 historic=castle Q1142363 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.15754/1.56328) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|no\|château; sitelinks=23; wikidata:Q1142363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 191 elements); data/traces/chateau-de-valencay-q1142363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
