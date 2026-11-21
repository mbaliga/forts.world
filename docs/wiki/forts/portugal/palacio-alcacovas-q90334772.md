# Palácio Alcáçovas

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-alcacovas-q90334772` |
| Coordinates | 38.71276, -9.15141 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71276/-9.15141)) |
| Wikidata | [Q90334772](https://www.wikidata.org/wiki/Q90334772) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Misericórdia |
| Designations | Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 7, road 150, building 433, wall 17, retaining-wall 14, zone 1).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 22, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/476159373 historic=castle Q90334772 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 433 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71276/-9.15141) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q90334772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/palacio-alcacovas-q90334772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
