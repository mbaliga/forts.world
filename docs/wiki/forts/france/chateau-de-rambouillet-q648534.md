# Château de Rambouillet

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-rambouillet-q648534` |
| Coordinates | 48.64542, 1.8175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.64542/1.8175)) |
| Wikidata | [Q648534](https://www.wikidata.org/wiki/Q648534) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum\|château |
| Administrative area | Rambouillet |
| Inception | 1474 |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | http://chateau-rambouillet.monuments-nationaux.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, marker 1, road 85, zone 43, building 95, waterway 1, wall 1).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 3, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1071097840 historic=castle Q648534 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.64542/1.8175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum\|château; sitelinks=20; wikidata:Q648534 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/chateau-de-rambouillet-q648534.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
