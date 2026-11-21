# Ottoburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ottoburg-q24053223` |
| Coordinates | 47.26849, 11.39197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.26849/11.39197)) |
| Wikidata | [Q24053223](https://www.wikidata.org/wiki/Q24053223) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower house |
| Administrative area | Innsbruck |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 11, road 267, building 298, water 2, waterway 1, zone 3, wall 5, retaining-wall 2).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 71, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60003419 historic=yes Q24053223 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 298 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.26849/11.39197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower house; sitelinks=2; wikidata:Q24053223 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/ottoburg-q24053223.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
