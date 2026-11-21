# Stadtturm (Buchen)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtturm-buchen-q17378634` |
| Coordinates | 49.52194, 9.32364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.52194/9.32364)) |
| Wikidata | [Q17378634](https://www.wikidata.org/wiki/Q17378634) (CC0) |
| Wikidata class | fortification |
| Types | tower\|gate tower |
| Administrative area | Buchen |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 11, road 256, building 321, zone 7, wall 8, waterway 7, retaining-wall 1).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 3, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/188721473 historic=building 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 321 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 256 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.52194/9.32364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|gate tower; sitelinks=2; wikidata:Q17378634 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/stadtturm-buchen-q17378634.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
