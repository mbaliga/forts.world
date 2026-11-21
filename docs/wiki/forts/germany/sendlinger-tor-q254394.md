# Sendlinger Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sendlinger-tor-q254394` |
| Coordinates | 48.134, 11.5676 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.134/11.5676)) |
| Wikidata | [Q254394](https://www.wikidata.org/wiki/Q254394) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|gate tower |
| Administrative area | Munich |
| Inception | 1308 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 16 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 5, road 209, building 279, zone 3, waterway 1, water 1, wall 4).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 52, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93216466 historic=yes Q1495473 311 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 209 mapped (trace size budget); minor lanes are not drawn
- origin moved 310 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.134/11.5676) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|gate tower; sitelinks=16; wikidata:Q254394 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/sendlinger-tor-q254394.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
