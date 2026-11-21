# Norderwall Otterndorf

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `norderwall-otterndorf-q129849284` |
| Coordinates | 53.80864, 8.90259 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.80864/8.90259)) |
| Wikidata | [Q129849284](https://www.wikidata.org/wiki/Q129849284) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Otterndorf |
| Designations | cultural heritage monument in Lower Saxony |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 294 elements (road 183, waterway 6, building 315, water 1, zone 15, wall 2).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 17, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 315 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.80864/8.90259) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q129849284 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 294 elements); data/traces/norderwall-otterndorf-q129849284.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
