# Obertorturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `obertorturm-q47529032` |
| Coordinates | 50.29828, 8.27157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.29828/8.27157)) |
| Wikidata | [Q47529032](https://www.wikidata.org/wiki/Q47529032) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Bad Camberg |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 8, waterway 1, road 122, building 287, wall 9, water 5).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 1, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/420293915 historic=yes Q14538460 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 287 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.29828/8.27157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q47529032 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/obertorturm-q47529032.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
