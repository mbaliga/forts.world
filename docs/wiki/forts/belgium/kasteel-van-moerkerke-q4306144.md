# Kasteel van Moerkerke

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasteel-van-moerkerke-q4306144` |
| Coordinates | 51.24478, 3.34075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.24478/3.34075)) |
| Wikidata | [Q4306144](https://www.wikidata.org/wiki/Q4306144) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Damme |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, road 49, waterway 2, building 396, wall 1, zone 3, water 2).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/230689256 historic=castle Q4306144 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 396 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.24478/3.34075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q4306144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/kasteel-van-moerkerke-q4306144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
