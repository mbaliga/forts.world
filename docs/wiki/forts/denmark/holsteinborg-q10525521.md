# Holsteinborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `holsteinborg-q10525521` |
| Coordinates | 55.21454, 11.46423 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.21454/11.46423)) |
| Wikidata | [Q10525521](https://www.wikidata.org/wiki/Q10525521) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|manor house |
| Administrative area | Slagelse Municipality |
| Inception | 1357 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 51 elements (outline 1, road 22, zone 5, building 19, water 3, coastline 1).

Evidence: documented 0, mapped 51, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1649830 historic=castle Q10525521 10 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":4.5,"medianOutside":12.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.21454/11.46423) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|manor house; sitelinks=5; wikidata:Q10525521 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 51 elements); data/traces/holsteinborg-q10525521.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
