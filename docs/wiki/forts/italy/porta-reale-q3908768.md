# Porta Reale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-reale-q3908768` |
| Coordinates | 36.89007, 15.07377 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.89007/15.07377)) |
| Wikidata | [Q3908768](https://www.wikidata.org/wiki/Q3908768) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Noto |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, marker 3, road 155, building 570, retaining-wall 38, wall 117, waterway 1, zone 2, cliff 1).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/301728238 historic=building 244 m from ledger point
- pruned to the outline plus 150 m: 888 -> 424 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 253 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 87 mapped (trace size budget); minor lanes are not drawn
- origin moved 244 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.89007/15.07377) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q3908768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/porta-reale-q3908768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
