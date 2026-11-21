# Château de Brie-Comte-Robert

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-brie-comte-robert-q1011203` |
| Coordinates | 48.6925, 2.6108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6925/2.6108)) |
| Wikidata | [Q1011203](https://www.wikidata.org/wiki/Q1011203) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Brie-Comte-Robert |
| Designations | classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |
| OSM `description` | Château de Brie-Comte-Robert (XIIe siècle), Centre d'Interprétation du Patrimoine. Exposition Historique et Archéologique permanente de la ville. |
| OSM `ruins` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, road 87, building 513, wall 2, waterway 1).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6142213 historic=ruins Q1011203 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 513 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6925/2.6108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1011203 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/chateau-de-brie-comte-robert-q1011203.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
