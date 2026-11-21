# air-raid shelter in the Fuggerei

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `air-raid-shelter-in-the-fuggerei-q130324313` |
| Coordinates | 48.36898, 10.90367 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.36898/10.90367)) |
| Wikidata | [Q130324313](https://www.wikidata.org/wiki/Q130324313) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Augsburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, road 199, water 3, building 267, waterway 3, zone 19, wall 20, retaining-wall 3).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 57, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72511158 historic=castle 411 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 267 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn
- origin moved 411 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.36898/10.90367) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q130324313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/air-raid-shelter-in-the-fuggerei-q130324313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
