# Gemalter Turm (Ravensburg)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gemalter-turm-ravensburg-q34342344` |
| Coordinates | 47.78501, 9.61069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.78501/9.61069)) |
| Wikidata | [Q34342344](https://www.wikidata.org/wiki/Q34342344) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Ravensburg |
| Inception | 1400 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 1, road 127, building 293, wall 3, waterway 1, zone 1, water 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 25, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143090582 historic=yes Q34342344 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 293 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.78501/9.61069) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q34342344 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/gemalter-turm-ravensburg-q34342344.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
