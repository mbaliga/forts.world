# Choszczno City Walls

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `choszczno-city-walls-q33236673` |
| Coordinates | 53.16673, 15.42237 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.16673/15.42237)) |
| Wikidata | [Q33236673](https://www.wikidata.org/wiki/Q33236673) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Choszczno |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 276 elements (marker 1, water 1, road 249, wall 15, building 253, zone 113, retaining-wall 6).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 44, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 60 nearest the outline centre of 253 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 249 mapped (trace size budget); minor lanes are not drawn
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.16673/15.42237) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q33236673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 276 elements); data/traces/choszczno-city-walls-q33236673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
