# Porta San Fabiano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-fabiano-q126287846` |
| Coordinates | 43.88463, 11.09369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.88463/11.09369)) |
| Wikidata | [Q126287846](https://www.wikidata.org/wiki/Q126287846) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, marker 3, road 55, wall 14, zone 5, building 321, retaining-wall 4).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5876529 historic=building 74 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 321 mapped (trace size budget); the rest of the town is not drawn
- origin moved 77 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.88463/11.09369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q126287846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/porta-san-fabiano-q126287846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
