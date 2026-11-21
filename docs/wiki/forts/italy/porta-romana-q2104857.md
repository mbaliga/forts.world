# Porta Romana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-romana-q2104857` |
| Coordinates | 43.31322, 11.33956 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31322/11.33956)) |
| Wikidata | [Q2104857](https://www.wikidata.org/wiki/Q2104857) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Siena |
| Inception | 1327 |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, road 254, building 214, wall 50, retaining-wall 32, zone 28, water 2, waterway 9).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 1, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17449509 historic=citywalls 233 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 214 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 254 mapped (trace size budget); minor lanes are not drawn
- origin moved 228 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31322/11.33956) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=7; wikidata:Q2104857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/porta-romana-q2104857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
