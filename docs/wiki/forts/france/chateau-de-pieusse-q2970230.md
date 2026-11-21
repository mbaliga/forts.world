# Château de Pieusse

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-pieusse-q2970230` |
| Coordinates | 43.08056, 2.23236 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.08056/2.23236)) |
| Wikidata | [Q2970230](https://www.wikidata.org/wiki/Q2970230) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Pieusse |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 168 elements (outline 1, marker 1, road 43, waterway 2, wall 1, building 380).

Evidence: documented 0, mapped 168, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/66308993 historic=castle Q2970230 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 380 mapped (trace size budget); the rest of the town is not drawn
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.08056/2.23236) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=5; wikidata:Q2970230 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 168 elements); data/traces/chateau-de-pieusse-q2970230.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
