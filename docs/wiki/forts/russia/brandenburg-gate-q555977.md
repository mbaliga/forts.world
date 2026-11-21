# Brandenburg Gate

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brandenburg-gate-q555977` |
| Coordinates | 54.69722, 20.49472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.69722/20.49472)) |
| Wikidata | [Q555977](https://www.wikidata.org/wiki/Q555977) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural landmark |
| Administrative area | Kaliningrad |
| Inception | 1862 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 13 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 175 elements (outline 1, building 19, road 129, water 2, zone 22, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 175, inferred 0, derived 0; heights documented 4, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/617211601 historic=monument 579 m from ledger point
- origin moved 580 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.69722/20.49472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural landmark; sitelinks=13; wikidata:Q555977 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 175 elements); data/traces/brandenburg-gate-q555977.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
