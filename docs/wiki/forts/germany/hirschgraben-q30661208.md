# Hirschgraben

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hirschgraben-q30661208` |
| Coordinates | 49.32277, 8.43025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.32277/8.43025)) |
| Wikidata | [Q30661208](https://www.wikidata.org/wiki/Q30661208) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Speyer |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, road 96, zone 3, waterway 1, wall 11, building 611, retaining-wall 2).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 0, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/589701443 historic=citywalls 548 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 611 mapped (trace size budget); the rest of the town is not drawn
- origin moved 547 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.32277/8.43025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=1; wikidata:Q30661208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/hirschgraben-q30661208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
