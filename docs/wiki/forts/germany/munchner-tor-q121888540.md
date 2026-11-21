# Münchner Tor

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `munchner-tor-q121888540` |
| Coordinates | 47.77497, 12.13792 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.77497/12.13792)) |
| Wikidata | [Q121888540](https://www.wikidata.org/wiki/Q121888540) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Neubeuern |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `location-only`, 219 elements (marker 3, road 84, waterway 3, building 112, zone 15, water 1, retaining-wall 1).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 1, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1715968 historic=castle 141 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (144 x 40 m)
- origin moved 133 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.77497/12.13792) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q121888540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 219 elements); data/traces/munchner-tor-q121888540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
