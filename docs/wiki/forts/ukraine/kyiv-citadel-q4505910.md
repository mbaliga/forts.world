# Kyiv citadel

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kyiv-citadel-q4505910` |
| Coordinates | 50.43333, 30.55556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.43333/30.55556)) |
| Wikidata | [Q4505910](https://www.wikidata.org/wiki/Q4505910) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Kyiv |
| Designations | architectural monument of national significance of Ukraine |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 367 elements (outline 1, marker 23, road 455, building 206, wall 37, retaining-wall 7, zone 27, water 1, waterway 1).

Evidence: documented 0, mapped 367, inferred 0, derived 0; heights documented 79, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/634352861 historic=castle 164 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 206 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 455 mapped (trace size budget); minor lanes are not drawn
- origin moved 165 m from the ledger point to the centre of the mapped site
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.43333/30.55556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q4505910 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 367 elements); data/traces/kyiv-citadel-q4505910.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
