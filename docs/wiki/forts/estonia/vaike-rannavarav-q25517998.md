# Väike Rannavärav

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vaike-rannavarav-q25517998` |
| Coordinates | 59.44139, 24.75028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.44139/24.75028)) |
| Wikidata | [Q25517998](https://www.wikidata.org/wiki/Q25517998) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Tallinn |
| Wikipedia language editions | 2 |
| OSM `historic` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 6, road 237, zone 43, building 113, retaining-wall 5, wall 32).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 78, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21628451 historic=city_wall 98 m from ledger point
- roads capped: kept the 150 longest of 237 mapped (trace size budget); minor lanes are not drawn
- origin moved 96 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.44139/24.75028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q25517998 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/vaike-rannavarav-q25517998.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
