# Mirabella Fortress

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mirabella-fortress-q6872302` |
| Coordinates | 43.44489, 16.6935 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.44489/16.6935)) |
| Wikidata | [Q6872302](https://www.wikidata.org/wiki/Q6872302) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Omiš |
| Inception | 1300 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 2, road 125, building 275, zone 2, water 1, waterway 1, cliff 1, wall 4).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 2, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70217401 historic=castle Q6872302 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.44489/16.6935) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=7; wikidata:Q6872302 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/mirabella-fortress-q6872302.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
