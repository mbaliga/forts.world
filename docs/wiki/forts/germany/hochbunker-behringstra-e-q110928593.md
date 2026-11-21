# Hochbunker Behringstraße

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochbunker-behringstra-e-q110928593` |
| Coordinates | 53.5543, 9.92051 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.5543/9.92051)) |
| Wikidata | [Q110928593](https://www.wikidata.org/wiki/Q110928593) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|high-rise bunker |
| Administrative area | Hamburg |
| Inception | 1942 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 276 elements (marker 2, road 235, building 204, zone 1, wall 3).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 92, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 204 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.5543/9.92051) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|high-rise bunker; sitelinks=1; wikidata:Q110928593 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 276 elements); data/traces/hochbunker-behringstra-e-q110928593.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
