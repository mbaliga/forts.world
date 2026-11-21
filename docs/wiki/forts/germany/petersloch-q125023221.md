# Petersloch

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petersloch-q125023221` |
| Coordinates | 48.34253, 7.87222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.34253/7.87222)) |
| Wikidata | [Q125023221](https://www.wikidata.org/wiki/Q125023221) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Lahr/Schwarzwald |
| Inception | 1500 |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 30, road 250, building 326, waterway 6, wall 10, retaining-wall 17, zone 8, water 2).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 13, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/578019548 historic=citywalls 373 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 250 mapped (trace size budget); minor lanes are not drawn
- origin moved 373 m from the ledger point to the centre of the mapped site
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.34253/7.87222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q125023221 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/petersloch-q125023221.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
