# Miestodržiteľský palác

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `miestodrzitelsky-palac-q4177820` |
| Coordinates | 48.14378, 17.1079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14378/17.1079)) |
| Wikidata | [Q4177820](https://www.wikidata.org/wiki/Q4177820) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Bratislava |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 41, road 261, building 167, zone 15, wall 4, retaining-wall 1).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 62, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/207101 historic=castle Q4177820 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 167 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 261 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14378/17.1079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=4; wikidata:Q4177820 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/miestodrzitelsky-palac-q4177820.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
