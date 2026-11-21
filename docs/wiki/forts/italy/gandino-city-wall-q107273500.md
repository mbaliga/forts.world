# Gandino City Wall

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gandino-city-wall-q107273500` |
| Coordinates | 45.81207, 9.90268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.81207/9.90268)) |
| Wikidata | [Q107273500](https://www.wikidata.org/wiki/Q107273500) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Gandino |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 2, road 123, building 333, zone 31, wall 96, waterway 1, retaining-wall 22).

Evidence: documented 0, mapped 396, inferred 0, derived 0; heights documented 0, inferred 0, unknown 238.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1452818396 historic=palace 91 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- origin moved 91 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.81207/9.90268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q107273500 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/gandino-city-wall-q107273500.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
