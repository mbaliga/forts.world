# Alcázar of Toledo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcazar-of-toledo-q1326589` |
| Coordinates | 39.858, -4.0205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.858/-4.0205)) |
| Wikidata | [Q1326589](https://www.wikidata.org/wiki/Q1326589) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|library\|museum building |
| Administrative area | Toledo |
| Designations | bien de interés cultural |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 2, road 228, building 261, retaining-wall 19, wall 25, waterway 1).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 116, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83998985 historic=castle Q1326589 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 261 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 228 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.858/-4.0205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|library\|museum building; sitelinks=29; wikidata:Q1326589 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/alcazar-of-toledo-q1326589.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
