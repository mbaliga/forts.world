# Balkerne Gate

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `balkerne-gate-q15964714` |
| Coordinates | 51.8897, 0.89389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8897/0.89389)) |
| Wikidata | [Q15964714](https://www.wikidata.org/wiki/Q15964714) (CC0) |
| Wikidata class | ruin |
| Types | arch\|city gate\|ruins |
| Administrative area | Colchester |
| Inception | 0100 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 3, road 164, building 375, wall 16, waterway 1, zone 3).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 1, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/526252430 historic=ruins Q15964714 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 375 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8897/0.89389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; arch\|city gate\|ruins; sitelinks=6; wikidata:Q15964714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/balkerne-gate-q15964714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
