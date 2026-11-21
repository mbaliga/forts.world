# Fortress of Tartu

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-tartu-q20530512` |
| Coordinates | 58.38375, 26.72236 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.38375/26.72236)) |
| Wikidata | [Q20530512](https://www.wikidata.org/wiki/Q20530512) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Tartu City |
| Designations | architectural monument |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 390 elements (outline 1, waterway 1, road 272, zone 115, building 429, water 1, wall 2).

Evidence: documented 0, mapped 390, inferred 0, derived 0; heights documented 73, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30231778 historic=ruins 448 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 429 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 272 mapped (trace size budget); minor lanes are not drawn
- origin moved 448 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.38375/26.72236) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q20530512 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 390 elements); data/traces/fortress-of-tartu-q20530512.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
