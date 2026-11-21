# Porta di Santa Maria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-di-santa-maria-q2104869` |
| Coordinates | 45.21661, 12.27758 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.21661/12.27758)) |
| Wikidata | [Q2104869](https://www.wikidata.org/wiki/Q2104869) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|building |
| Administrative area | Chioggia |
| Inception | 1300 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 6, waterway 7, road 190, water 4, building 526, wall 6, zone 7).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/185836886 historic=yes 50 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 526 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.21661/12.27758) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|building; sitelinks=5; wikidata:Q2104869 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/porta-di-santa-maria-q2104869.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
