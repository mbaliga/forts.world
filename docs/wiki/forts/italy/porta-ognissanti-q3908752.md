# Porta Ognissanti

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-ognissanti-q3908752` |
| Coordinates | 45.40964, 11.89266 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.40964/11.89266)) |
| Wikidata | [Q3908752](https://www.wikidata.org/wiki/Q3908752) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Padua |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | monument |
| OSM `description` | access steps of the historic fluvial port of Padova |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 1, road 153, waterway 1, wall 2, building 170, water 1, zone 2).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 27, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1570940411 historic=monument 58 m from ledger point
- origin moved 56 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.40964/11.89266) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q3908752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/porta-ognissanti-q3908752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
