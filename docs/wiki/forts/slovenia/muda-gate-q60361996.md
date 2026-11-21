# Muda Gate

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muda-gate-q60361996` |
| Coordinates | 45.54484, 13.73007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.54484/13.73007)) |
| Wikidata | [Q60361996](https://www.wikidata.org/wiki/Q60361996) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | City Municipality of Koper |
| Designations | monument of local significance |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 1, road 232, building 633, wall 54, zone 11, retaining-wall 3).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 7, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13783029 historic=building Q3384547 185 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 633 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 232 mapped (trace size budget); minor lanes are not drawn
- origin moved 186 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.54484/13.73007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q60361996 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/muda-gate-q60361996.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
