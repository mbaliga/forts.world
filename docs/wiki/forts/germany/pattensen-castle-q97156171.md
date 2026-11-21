# Pattensen castle

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pattensen-castle-q97156171` |
| Coordinates | 52.26316, 9.76365 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.26316/9.76365)) |
| Wikidata | [Q97156171](https://www.wikidata.org/wiki/Q97156171) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Pattensen |
| Designations | architectural heritage monument in Lower Saxony |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 279 elements (road 151, zone 3, building 324, waterway 2, retaining-wall 1, wall 3).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 1, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 324 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.26316/9.76365) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=2; wikidata:Q97156171 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 279 elements); data/traces/pattensen-castle-q97156171.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
