# Castello di Terra

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-terra-q16538178` |
| Coordinates | 38.01926, 12.51442 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.01926/12.51442)) |
| Wikidata | [Q16538178](https://www.wikidata.org/wiki/Q16538178) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Trapani |
| Inception | 1186 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, marker 1, road 73, building 30, retaining-wall 1, coastline 1, wall 2, water 1).

Evidence: documented 0, mapped 110, inferred 0, derived 1; heights documented 1, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1317853239 historic=fort Q16538178 21 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":135,"medianInside":0,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.01926/12.51442) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q16538178 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/castello-di-terra-q16538178.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
