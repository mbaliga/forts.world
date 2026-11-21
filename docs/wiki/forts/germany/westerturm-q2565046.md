# Westerturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `westerturm-q2565046` |
| Coordinates | 51.5134, 10.256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5134/10.256)) |
| Wikidata | [Q2565046](https://www.wikidata.org/wiki/Q2565046) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Duderstadt |
| Designations | architectural heritage monument |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 6, road 131, zone 3, water 4, waterway 13, building 576, wall 9).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 29, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/702428915 historic=citywalls 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 576 mapped (trace size budget); the rest of the town is not drawn
- origin moved 34 m from the ledger point to the centre of the mapped site
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5134/10.256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=2; wikidata:Q2565046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/westerturm-q2565046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
