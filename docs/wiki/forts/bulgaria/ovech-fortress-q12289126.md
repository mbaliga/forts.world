# Ovech Fortress

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ovech-fortress-q12289126` |
| Coordinates | 43.17541, 27.44802 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.17541/27.44802)) |
| Wikidata | [Q12289126](https://www.wikidata.org/wiki/Q12289126) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Provadia |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, road 91, waterway 2, building 399, zone 8, retaining-wall 8, cliff 7, wall 3).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 1, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20657977 historic=ruins Q12289126 283 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 399 mapped (trace size budget); the rest of the town is not drawn
- origin moved 288 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.17541/27.44802) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q12289126 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/ovech-fortress-q12289126.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
