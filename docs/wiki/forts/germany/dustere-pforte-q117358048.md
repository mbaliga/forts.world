# Düstere Pforte

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dustere-pforte-q117358048` |
| Coordinates | 52.12425, 11.63372 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.12425/11.63372)) |
| Wikidata | [Q117358048](https://www.wikidata.org/wiki/Q117358048) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Magdeburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 336 elements (marker 83, road 975, building 375, zone 39, waterway 3, wall 63, retaining-wall 7, water 1).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 49, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/194991 historic=castle Q1408941 743 m from ledger point
- site is a site relation of 51 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4978 x 8093 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 375 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 975 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.12425/11.63372) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q117358048 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 336 elements); data/traces/dustere-pforte-q117358048.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
