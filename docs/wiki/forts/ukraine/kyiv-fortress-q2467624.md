# Kyiv Fortress

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kyiv-fortress-q2467624` |
| Coordinates | 50.43126, 30.53036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.43126/30.53036)) |
| Wikidata | [Q2467624](https://www.wikidata.org/wiki/Q2467624) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|architectural heritage monument |
| Administrative area | Kyiv |
| Designations | architectural heritage monument |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 13, road 351, building 143, cliff 3, wall 3, retaining-wall 2, zone 4, waterway 2).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 82, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/283246326 historic=castle Q2467624 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 351 mapped (trace size budget); minor lanes are not drawn
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.43126/30.53036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|architectural heritage monument; sitelinks=18; wikidata:Q2467624 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/kyiv-fortress-q2467624.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
