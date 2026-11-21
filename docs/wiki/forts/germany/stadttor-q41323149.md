# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q41323149` |
| Coordinates | 50.03148, 10.50959 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.03148/10.50959)) |
| Wikidata | [Q41323149](https://www.wikidata.org/wiki/Q41323149) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Haßfurt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 5, road 177, building 356, zone 10, waterway 3, wall 26, retaining-wall 1).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 38, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/917823185 historic=yes 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 356 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 177 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.03148/10.50959) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q41323149 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/stadttor-q41323149.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
