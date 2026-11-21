# Palacio de los Orozco

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-los-orozco-q120167214` |
| Coordinates | 38.00952, -3.37112 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.00952/-3.37112)) |
| Wikidata | [Q120167214](https://www.wikidata.org/wiki/Q120167214) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Úbeda |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, road 131, building 512, zone 39, retaining-wall 10, wall 271).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 60, inferred 0, unknown 166.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10974605 historic=castle Q120167214 3 m from ledger point
- pruned to the outline plus 150 m: 964 -> 530 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 277 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.00952/-3.37112) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=1; wikidata:Q120167214 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/palacio-de-los-orozco-q120167214.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
