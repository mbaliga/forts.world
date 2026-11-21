# Unhyeongung

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `unhyeongung-q490392` |
| Coordinates | 37.57618, 126.98712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.57618/126.98712)) |
| Wikidata | [Q490392](https://www.wikidata.org/wiki/Q490392) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|historic house museum |
| Administrative area | Jongno District |
| Designations | Historic sites of South Korea |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 6, road 130, building 346, zone 9, waterway 1, wall 4).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 6, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/771236312 historic=castle Q490392 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 346 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.57618/126.98712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|historic house museum; sitelinks=10; wikidata:Q490392 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/unhyeongung-q490392.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
