# Fort McCarthy

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mccarthy-q16267969` |
| Coordinates | 5.10797, -1.24438 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.10797/-1.24438)) |
| Wikidata | [Q16267969](https://www.wikidata.org/wiki/Q16267969) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Central Region |
| Inception | 1822 |
| Designations | Ghana’s material cultural heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 144 elements (outline 1, road 22, building 486, zone 1).

Evidence: documented 0, mapped 144, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/538515296 historic=castle Q55611926 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 486 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.10797/-1.24438) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q16267969 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 144 elements); data/traces/fort-mccarthy-q16267969.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
