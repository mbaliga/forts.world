# Barriera Principe Umberto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barriera-principe-umberto-q3635184` |
| Coordinates | 45.4779, 9.19658 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.4779/9.19658)) |
| Wikidata | [Q3635184](https://www.wikidata.org/wiki/Q3635184) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Inception | 1860 |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 4, road 440, zone 21, building 102, wall 23, waterway 3, water 1).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 58, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406630744 historic=building Q17638799 107 m from ledger point
- roads capped: kept the 150 longest of 440 mapped (trace size budget); minor lanes are not drawn
- origin moved 106 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.4779/9.19658) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q3635184 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/barriera-principe-umberto-q3635184.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
