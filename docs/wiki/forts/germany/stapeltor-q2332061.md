# Stapeltor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stapeltor-q2332061` |
| Coordinates | 51.4372, 6.76667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4372/6.76667)) |
| Wikidata | [Q2332061](https://www.wikidata.org/wiki/Q2332061) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|archaeological site |
| Administrative area | Duisburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 12, road 185, building 222, wall 36, zone 31, water 1, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 55, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/773807543 historic=archaeological_site 126 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 222 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 185 mapped (trace size budget); minor lanes are not drawn
- origin moved 128 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4372/6.76667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|archaeological site; sitelinks=1; wikidata:Q2332061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/stapeltor-q2332061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
