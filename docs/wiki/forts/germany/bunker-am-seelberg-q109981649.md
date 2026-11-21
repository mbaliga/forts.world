# Bunker am Seelberg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-am-seelberg-q109981649` |
| Coordinates | 52.38803, 9.85197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.38803/9.85197)) |
| Wikidata | [Q109981649](https://www.wikidata.org/wiki/Q109981649) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|high-rise bunker |
| Administrative area | Hanover |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 280 elements (marker 1, road 176, building 342, wall 7, zone 2).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 88, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 342 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 176 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.38803/9.85197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|high-rise bunker; sitelinks=2; wikidata:Q109981649 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 280 elements); data/traces/bunker-am-seelberg-q109981649.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
