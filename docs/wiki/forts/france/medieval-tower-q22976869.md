# medieval tower

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `medieval-tower-q22976869` |
| Coordinates | 43.4695, 3.3416 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4695/3.3416)) |
| Wikidata | [Q22976869](https://www.wikidata.org/wiki/Q22976869) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Alignan-du-Vent |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, marker 1, road 73, building 519, wall 1).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/361736862 historic=building 205 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 519 mapped (trace size budget); the rest of the town is not drawn
- origin moved 205 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4695/3.3416) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22976869 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/medieval-tower-q22976869.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
