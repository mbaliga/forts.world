# Lilyache Fortress

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lilyache-fortress-q140521233` |
| Coordinates | 43.31486, 23.55197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31486/23.55197)) |
| Wikidata | [Q140521233](https://www.wikidata.org/wiki/Q140521233) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `ruins` | wall |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, road 25, waterway 3, water 3, building 2, zone 3, cliff 4).

Evidence: documented 0, mapped 42, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21035382 historic=archaeological_site Q140521233 49 m from ledger point
- origin moved 55 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31486/23.55197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q140521233 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/lilyache-fortress-q140521233.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
