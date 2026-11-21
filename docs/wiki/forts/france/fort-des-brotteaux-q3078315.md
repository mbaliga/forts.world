# Fort des Brotteaux

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-des-brotteaux-q3078315` |
| Coordinates | 45.7674, 4.86057 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7674/4.86057)) |
| Wikidata | [Q3078315](https://www.wikidata.org/wiki/Q3078315) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Lyon |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 307 elements (marker 2, road 376, building 121, retaining-wall 2, zone 19, waterway 9, water 5).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 67, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 121 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 376 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7674/4.86057) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078315 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 307 elements); data/traces/fort-des-brotteaux-q3078315.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
