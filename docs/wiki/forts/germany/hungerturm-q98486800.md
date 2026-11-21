# Hungerturm

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hungerturm-q98486800` |
| Coordinates | 49.55306, 10.06753 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.55306/10.06753)) |
| Wikidata | [Q98486800](https://www.wikidata.org/wiki/Q98486800) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Aub |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 219 elements (marker 17, road 55, zone 6, building 356, wall 16, waterway 2, retaining-wall 3).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 0, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 356 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.55306/10.06753) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q98486800 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 219 elements); data/traces/hungerturm-q98486800.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
