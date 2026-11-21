# Itami Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `itami-castle-q2968288` |
| Coordinates | 34.78129, 135.42089 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.78129/135.42089)) |
| Wikidata | [Q2968288](https://www.wikidata.org/wiki/Q2968288) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Itami |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 8 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 4, road 99, building 287, zone 6, wall 4, water 2, waterway 1).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 6, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/751775228 historic=yes Q11511105 343 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 287 mapped (trace size budget); the rest of the town is not drawn
- origin moved 340 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.78129/135.42089) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=8; wikidata:Q2968288 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/itami-castle-q2968288.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
