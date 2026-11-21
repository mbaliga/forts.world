# City Walls of Crevillent

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-crevillent-q97360899` |
| Coordinates | 38.25019, -0.80976 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.25019/-0.80976)) |
| Wikidata | [Q97360899](https://www.wikidata.org/wiki/Q97360899) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Crevillent |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 263 elements (road 138, building 780, zone 3, waterway 1, wall 1).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 780 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.25019/-0.80976) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q97360899 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 263 elements); data/traces/city-walls-of-crevillent-q97360899.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
