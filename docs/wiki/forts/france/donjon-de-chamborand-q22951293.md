# Donjon de Chamborand

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-de-chamborand-q22951293` |
| Coordinates | 46.15342, 1.57084 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.15342/1.57084)) |
| Wikidata | [Q22951293](https://www.wikidata.org/wiki/Q22951293) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Chamborand |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, zone 20, building 18, waterway 5, road 10, water 1, wall 1).

Evidence: documented 0, mapped 56, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68471254 historic=(none; chosen by its Wikidata id) Q22951293 8 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.15342/1.57084) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=2; wikidata:Q22951293 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 50 elements); data/traces/donjon-de-chamborand-q22951293.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 56 elements; outline osm:way/68471254 historic=(none; chosen by its Wikidata id) Q22951293 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
