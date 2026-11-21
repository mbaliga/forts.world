# Landerneau Gate

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `landerneau-gate-q113406683` |
| Coordinates | 48.38938, -4.48742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.38938/-4.48742)) |
| Wikidata | [Q113406683](https://www.wikidata.org/wiki/Q113406683) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Brest |
| Inception | 1871 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 298 elements (marker 1, road 382, water 1, wall 3, building 220, zone 23).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 58, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 382 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.38938/-4.48742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q113406683 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 298 elements); data/traces/landerneau-gate-q113406683.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
