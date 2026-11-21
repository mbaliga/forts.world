# Burgstadel Rimbach

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgstadel-rimbach-q1015646` |
| Coordinates | 49.6227, 8.75769 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.6227/8.75769)) |
| Wikidata | [Q1015646](https://www.wikidata.org/wiki/Q1015646) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Rimbach |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 278 elements (road 163, building 358, wall 2, waterway 4, zone 2).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 4, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 358 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 163 mapped (trace size budget); minor lanes are not drawn
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.6227/8.75769) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1015646 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 278 elements); data/traces/burgstadel-rimbach-q1015646.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
