# Wachturm Westtor 2 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-westtor-2-in-nurnberg-q98630237` |
| Coordinates | 49.45392, 11.07053 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45392/11.07053)) |
| Wikidata | [Q98630237](https://www.wikidata.org/wiki/Q98630237) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 4, road 256, waterway 5, zone 12, water 2, building 184, wall 28, retaining-wall 4).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 82, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/221031050 historic=citywalls 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 184 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 256 mapped (trace size budget); minor lanes are not drawn
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45392/11.07053) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98630237 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/wachturm-westtor-2-in-nurnberg-q98630237.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
