# Hotel d'Hane-Steenhuyse

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-d-hane-steenhuyse-q2120186` |
| Coordinates | 51.0516, 3.72175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.0516/3.72175)) |
| Wikidata | [Q2120186](https://www.wikidata.org/wiki/Q2120186) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|private mansion |
| Administrative area | Ghent |
| Inception | 1768 |
| Designations | beschermd monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, marker 6, road 124, water 2, building 419, waterway 4, zone 9, wall 2).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 10, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/426162743 historic=castle Q2120186 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 419 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.0516/3.72175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|private mansion; sitelinks=6; wikidata:Q2120186 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/hotel-d-hane-steenhuyse-q2120186.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
