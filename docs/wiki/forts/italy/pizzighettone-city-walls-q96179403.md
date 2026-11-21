# Pizzighettone City Walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pizzighettone-city-walls-q96179403` |
| Coordinates | 45.18648, 9.78411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.18648/9.78411)) |
| Wikidata | [Q96179403](https://www.wikidata.org/wiki/Q96179403) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Pizzighettone |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 2, road 68, waterway 3, wall 2, building 200, zone 4).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 0, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/538683699 historic=citywalls 121 m from ledger point
- origin moved 123 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.18648/9.78411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q96179403 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/pizzighettone-city-walls-q96179403.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
