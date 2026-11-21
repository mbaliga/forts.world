# Walls of Ciudad Rodrigo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-ciudad-rodrigo-q126910177` |
| Coordinates | 40.59961, -6.53414 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.59961/-6.53414)) |
| Wikidata | [Q126910177](https://www.wikidata.org/wiki/Q126910177) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ciudad Rodrigo |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 5, road 137, wall 26, waterway 1, building 165, zone 2).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 164, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/419348781 historic=citywalls 68 m from ledger point
- origin moved 65 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.59961/-6.53414) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q126910177 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/walls-of-ciudad-rodrigo-q126910177.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
