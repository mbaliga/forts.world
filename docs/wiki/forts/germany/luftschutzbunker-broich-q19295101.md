# Luftschutzbunker (Broich)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `luftschutzbunker-broich-q19295101` |
| Coordinates | 51.19878, 6.43378 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.19878/6.43378)) |
| Wikidata | [Q19295101](https://www.wikidata.org/wiki/Q19295101) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Mönchengladbach |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, road 129, building 271, zone 8, water 1, wall 2).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 2, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30975708 historic=yes Q19294953 145 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 271 mapped (trace size budget); the rest of the town is not drawn
- origin moved 145 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.19878/6.43378) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q19295101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/luftschutzbunker-broich-q19295101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
