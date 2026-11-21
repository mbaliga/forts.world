# Nobistor

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nobistor-q1480053` |
| Coordinates | 53.55, 9.95611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.55/9.95611)) |
| Wikidata | [Q1480053](https://www.wikidata.org/wiki/Q1480053) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|odonym |
| Administrative area | Hamburg-Mitte |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 303 elements (marker 18, road 293, building 168, retaining-wall 6, zone 6, wall 3).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 74, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 168 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 293 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.55/9.95611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|odonym; sitelinks=2; wikidata:Q1480053 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 303 elements); data/traces/nobistor-q1480053.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
