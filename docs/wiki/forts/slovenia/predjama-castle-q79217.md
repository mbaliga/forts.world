# Predjama Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `predjama-castle-q79217` |
| Coordinates | 45.8152, 14.12759 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.8152/14.12759)) |
| Wikidata | [Q79217](https://www.wikidata.org/wiki/Q79217) (CC0) |
| Wikidata class | castle |
| Types | cave castle |
| Administrative area | Municipality of Postojna |
| Designations | monument of national significance |
| Wikipedia language editions | 35 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Temporarily closed 3d model: https://sketchfab.com/3d-models/predjamski-grad-100k-929048f2db0f464797465f2e8751dd98 |
| OSM `ruins` | no |
| OSM `website` | https://www.postojnska-jama.eu/en/predjama-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, road 29, waterway 2, building 18, zone 8, cliff 1, wall 1).

Evidence: documented 0, mapped 60, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/426772755 historic=castle Q79217 94 m from ledger point
- origin moved 93 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.8152/14.12759) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; cave castle; sitelinks=35; wikidata:Q79217 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/predjama-castle-q79217.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
