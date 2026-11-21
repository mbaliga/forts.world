# Ořechov Castle

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orechov-castle-q33426214` |
| Coordinates | 49.03096, 17.30229 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.03096/17.30229)) |
| Wikidata | [Q33426214](https://www.wikidata.org/wiki/Q33426214) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Ořechov |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://www.zamekorechov.cz/ |

## What the model contains

Tier **T1**, status `location-only`, 176 elements (marker 10, zone 2, road 44, waterway 4, building 116).

Evidence: documented 0, mapped 176, inferred 0, derived 0; heights documented 90, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19985263 historic=castle Q33426214 15 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (52 x 77 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.03096/17.30229) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q33426214 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 176 elements); data/traces/orechov-castle-q33426214.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
