# Ramparts of Redon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-redon-q98804813` |
| Coordinates | 47.64966, -2.08313 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.64966/-2.08313)) |
| Wikidata | [Q98804813](https://www.wikidata.org/wiki/Q98804813) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Redon |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 4, road 163, building 372, water 3, waterway 3, zone 2, wall 4, retaining-wall 3).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 4, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8035241 historic=yes Q334214 92 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 372 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 163 mapped (trace size budget); minor lanes are not drawn
- origin moved 53 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.64966/-2.08313) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q98804813 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/ramparts-of-redon-q98804813.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
