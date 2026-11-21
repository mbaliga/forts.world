# Fort Nassau

> Ghana · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-nassau-q504406` |
| Coordinates | 5.13333, -1.2 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.13333/-1.2)) |
| Wikidata | [Q504406](https://www.wikidata.org/wiki/Q504406) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Central Region |
| Inception | 1612 |
| Designations | Ghana’s material cultural heritage |
| Wikipedia language editions | 12 |

## What the model contains

Tier **T1**, status `location-only`, 134 elements (road 11, coastline 2, building 599, water 1).

Evidence: documented 0, mapped 134, inferred 0, derived 1; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 599 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":21,"medianInside":3.8,"medianOutside":11.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.13333/-1.2) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=12; wikidata:Q504406 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 134 elements); data/traces/fort-nassau-q504406.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
