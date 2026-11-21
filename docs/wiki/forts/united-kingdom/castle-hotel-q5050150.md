# Castle Hotel

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-hotel-q5050150` |
| Coordinates | 51.01542, -3.10383 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.01542/-3.10383)) |
| Wikidata | [Q5050150](https://www.wikidata.org/wiki/Q5050150) (CC0) |
| Wikidata class | castle |
| Types | castle\|hotel |
| Administrative area | Taunton |
| Designations | Grade II listed building |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 347 elements (marker 1, road 254, waterway 3, building 279, wall 67, zone 5, water 1).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 63, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 254 mapped (trace size budget); minor lanes are not drawn
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.01542/-3.10383) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hotel; sitelinks=2; wikidata:Q5050150 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 347 elements); data/traces/castle-hotel-q5050150.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
