# Šášov Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sasov-castle-q9386782` |
| Coordinates | 48.57899, 18.90039 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.57899/18.90039)) |
| Wikidata | [Q9386782](https://www.wikidata.org/wiki/Q9386782) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Žiar nad Hronom |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.zahoramizadolami.sk/hrad-sasov/ |

## What the model contains

Tier **T1**, status `outline+walls`, 85 elements (outline 1, marker 1, waterway 2, road 25, building 42, wall 11, water 1, cliff 2).

Evidence: documented 0, mapped 85, inferred 0, derived 0; heights documented 28, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11978938 historic=castle Q9386782 38 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.57899/18.90039) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=9; wikidata:Q9386782 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 85 elements); data/traces/sasov-castle-q9386782.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
