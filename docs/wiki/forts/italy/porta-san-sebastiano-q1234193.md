# Porta San Sebastiano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-sebastiano-q1234193` |
| Coordinates | 41.8735, 12.50181 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.8735/12.50181)) |
| Wikidata | [Q1234193](https://www.wikidata.org/wiki/Q1234193) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Municipio I |
| Wikipedia language editions | 20 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 2, road 313, building 147, zone 6, wall 21).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 9, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/732751928 historic=citywalls 658 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 147 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 313 mapped (trace size budget); minor lanes are not drawn
- origin moved 661 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.8735/12.50181) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=20; wikidata:Q1234193 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/porta-san-sebastiano-q1234193.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
