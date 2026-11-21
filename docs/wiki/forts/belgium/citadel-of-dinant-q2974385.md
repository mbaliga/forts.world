# Citadel of Dinant

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-dinant-q2974385` |
| Coordinates | 50.2617, 4.91339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.2617/4.91339)) |
| Wikidata | [Q2974385](https://www.wikidata.org/wiki/Q2974385) (CC0) |
| Wikidata class | fort |
| Types | citadel\|military museum |
| Administrative area | Dinant |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 12, road 140, wall 22, zone 16, cliff 3, building 529, water 1, retaining-wall 4, waterway 2).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 0, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1432379 historic=castle Q2974385 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 529 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.2617/4.91339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|military museum; sitelinks=6; wikidata:Q2974385 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/citadel-of-dinant-q2974385.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
