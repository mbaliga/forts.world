# Istana Kampong Glam

> Singapore · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `istana-kampong-glam-q1674820` |
| Coordinates | 1.30267, 103.85995 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/1.30267/103.85995)) |
| Wikidata | [Q1674820](https://www.wikidata.org/wiki/Q1674820) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Kampong Glam |
| Inception | 1843 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, road 321, building 622, waterway 1, water 1, wall 2, zone 2).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 3, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30527029 historic=castle Q1674820 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 622 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 321 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/1.30267/103.85995) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=7; wikidata:Q1674820 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/istana-kampong-glam-q1674820.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/singapore.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
