# Dun Troddan

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-troddan-q2131824` |
| Coordinates | 57.19425, -5.58675 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.19425/-5.58675)) |
| Wikidata | [Q2131824](https://www.wikidata.org/wiki/Q2131824) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Highland |
| Designations | part of a Scheduled Monument |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |
| OSM `website` | https://www.historicenvironment.scot/visit-a-place/places/glenelg-brochs-dun-telve-and-dun-troddan/ |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, road 9, waterway 1, building 10, wall 3).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 2, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/673020395 historic=archaeological_site Q2131824 42 m from ledger point
- origin moved 42 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.19425/-5.58675) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=6; wikidata:Q2131824 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/dun-troddan-q2131824.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
