# Tower of Alverge

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-alverge-q22951179` |
| Coordinates | 45.26874, 1.77392 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.26874/1.77392)) |
| Wikidata | [Q22951179](https://www.wikidata.org/wiki/Q22951179) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Tulle |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 5, road 114, building 353, water 1, waterway 3, zone 2, wall 3).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64241966 historic=yes 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 353 mapped (trace size budget); the rest of the town is not drawn
- origin moved 56 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.26874/1.77392) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22951179 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/tower-of-alverge-q22951179.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
