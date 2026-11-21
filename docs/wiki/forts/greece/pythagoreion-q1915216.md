# Pythagoreion

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pythagoreion-q1915216` |
| Coordinates | 37.69, 26.94256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.69/26.94256)) |
| Wikidata | [Q1915216](https://www.wikidata.org/wiki/Q1915216) (CC0) |
| Wikidata class | fortification |
| Types | ancient city\|archaeological site |
| Administrative area | East Samos Municipality |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 595-001 |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, marker 1, road 66, coastline 1, zone 3, building 154, wall 5, retaining-wall 5, cliff 1, water 1).

Evidence: documented 0, mapped 238, inferred 0, derived 1; heights documented 4, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/709752774 historic=castle 257 m from ledger point
- origin moved 255 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":169,"medianInside":0,"medianOutside":10.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.69/26.94256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; ancient city\|archaeological site; sitelinks=26; wikidata:Q1915216 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/pythagoreion-q1915216.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
