# Bunker Töpferweg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-topferweg-q1009580` |
| Coordinates | 53.8591, 10.6694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.8591/10.6694)) |
| Wikidata | [Q1009580](https://www.wikidata.org/wiki/Q1009580) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|high-rise bunker |
| Administrative area | Lübeck |
| Inception | 1941 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 256 elements (marker 2, road 128, building 344, zone 5, wall 1).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 45, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.8591/10.6694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|high-rise bunker; sitelinks=2; wikidata:Q1009580 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 256 elements); data/traces/bunker-topferweg-q1009580.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
