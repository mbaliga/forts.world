# City walls of Sousse

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-sousse-q42762329` |
| Coordinates | 35.82534, 10.6349 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.82534/10.6349)) |
| Wikidata | [Q42762329](https://www.wikidata.org/wiki/Q42762329) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Sousse |
| Inception | 0859 |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 1, road 125, building 269, zone 8, wall 80, water 1, retaining-wall 1).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 0, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18070999 historic=castle 341 m from ledger point
- present-day buildings capped: kept the 25 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 120 longest of 125 mapped (trace size budget); minor lanes are not drawn
- origin moved 339 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.82534/10.6349) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q42762329 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 486 elements); data/traces/city-walls-of-sousse-q42762329.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
