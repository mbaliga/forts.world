# Więzienna Tower in Kołobrzeg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wiezienna-tower-in-ko-obrzeg-q11687516` |
| Coordinates | 54.1769, 15.5721 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.1769/15.5721)) |
| Wikidata | [Q11687516](https://www.wikidata.org/wiki/Q11687516) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Kołobrzeg |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, marker 2, road 411, waterway 2, water 1, building 194, wall 10, zone 130, retaining-wall 4).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 62, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/693626485 historic=ruins Q11687516 10 m from ledger point
- pruned to the outline plus 150 m: 755 -> 391 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 103 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 218 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.1769/15.5721) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q11687516 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 210 elements); data/traces/wiezienna-tower-in-ko-obrzeg-q11687516.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
