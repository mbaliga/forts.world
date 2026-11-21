# Fort de l'Est

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-l-est-q3078285` |
| Coordinates | 48.93056, 2.37222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.93056/2.37222)) |
| Wikidata | [Q3078285](https://www.wikidata.org/wiki/Q3078285) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint-Denis |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 333 elements (outline 1, road 281, building 277, retaining-wall 2, zone 60).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2103290 historic=castle Q3078285 38 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 277 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 281 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.93056/2.37222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078285 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 333 elements); data/traces/fort-de-l-est-q3078285.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
