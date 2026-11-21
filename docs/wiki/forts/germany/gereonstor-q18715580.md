# Gereonstor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gereonstor-q18715580` |
| Coordinates | 50.94467, 6.94394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.94467/6.94394)) |
| Wikidata | [Q18715580](https://www.wikidata.org/wiki/Q18715580) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Cologne |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 16, road 195, building 365, water 1, wall 11, zone 5, retaining-wall 4).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 114, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/422164073 historic=citywalls Q108154793 288 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 365 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 195 mapped (trace size budget); minor lanes are not drawn
- origin moved 289 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.94467/6.94394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q18715580 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/gereonstor-q18715580.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
