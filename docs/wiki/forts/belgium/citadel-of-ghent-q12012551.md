# Citadel of Ghent

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-ghent-q12012551` |
| Coordinates | 51.03722, 3.72167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.03722/3.72167)) |
| Wikidata | [Q12012551](https://www.wikidata.org/wiki/Q12012551) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Ghent |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 3, road 296, water 11, building 164, zone 73, waterway 4, wall 12, retaining-wall 2).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 1, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/210984965 historic=building 151 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 164 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 296 mapped (trace size budget); minor lanes are not drawn
- origin moved 151 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.03722/3.72167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q12012551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/citadel-of-ghent-q12012551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
