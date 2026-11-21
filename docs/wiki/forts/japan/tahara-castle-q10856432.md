# Tahara Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tahara-castle-q10856432` |
| Coordinates | 34.67, 137.26972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.67/137.26972)) |
| Wikidata | [Q10856432](https://www.wikidata.org/wiki/Q10856432) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Tahara |
| Inception | 1480 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `website` | https://www.taharamuseum.gr.jp/ |

## What the model contains

Tier **T1**, status `outline+walls`, 206 elements (outline 1, marker 2, road 73, waterway 1, zone 4, building 374, wall 2, retaining-wall 2, water 1).

Evidence: documented 0, mapped 206, inferred 0, derived 0; heights documented 4, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/61775624 historic=castle Q10856432 422 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 374 mapped (trace size budget); the rest of the town is not drawn
- origin moved 425 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.67/137.26972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=6; wikidata:Q10856432 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 206 elements); data/traces/tahara-castle-q10856432.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
