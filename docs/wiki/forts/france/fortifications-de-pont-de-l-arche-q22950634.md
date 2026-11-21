# Fortifications de Pont-de-l'Arche

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-de-pont-de-l-arche-q22950634` |
| Coordinates | 49.3057, 1.15354 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.3057/1.15354)) |
| Wikidata | [Q22950634](https://www.wikidata.org/wiki/Q22950634) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Pont-de-l'Arche |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, road 107, waterway 2, building 406, wall 5, zone 10, water 1).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225460074 historic=castle Q22976587 301 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 406 mapped (trace size budget); the rest of the town is not drawn
- origin moved 300 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.3057/1.15354) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q22950634 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/fortifications-de-pont-de-l-arche-q22950634.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
