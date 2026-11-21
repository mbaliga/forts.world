# Ranzenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ranzenburg-q1753680` |
| Coordinates | 48.1314, 9.4696 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1314/9.4696)) |
| Wikidata | [Q1753680](https://www.wikidata.org/wiki/Q1753680) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Riedlingen |
| Inception | 1200 |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 113 elements (outline 1, road 23, building 82, waterway 3, wall 2, zone 2).

Evidence: documented 0, mapped 113, inferred 0, derived 0; heights documented 0, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/252887258 historic=building 701 m from ledger point
- origin moved 701 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1314/9.4696) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q1753680 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 113 elements); data/traces/ranzenburg-q1753680.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
