# Koninklijke Schouwburg

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `koninklijke-schouwburg-q2040000` |
| Coordinates | 52.08188, 4.3159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.08188/4.3159)) |
| Wikidata | [Q2040000](https://www.wikidata.org/wiki/Q2040000) (CC0) |
| Wikidata class | castle |
| Types | castle\|theatre building |
| Administrative area | The Hague |
| Inception | 1804 |
| Designations | Rijksmonument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 10, road 183, building 186, wall 5, zone 14, water 3, waterway 4, retaining-wall 2).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 23, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3576907 historic=castle Q2040000 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 186 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.08188/4.3159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|theatre building; sitelinks=4; wikidata:Q2040000 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/koninklijke-schouwburg-q2040000.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
