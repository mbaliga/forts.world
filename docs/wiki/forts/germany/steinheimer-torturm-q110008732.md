# Steinheimer Torturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steinheimer-torturm-q110008732` |
| Coordinates | 50.04639, 8.97445 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.04639/8.97445)) |
| Wikidata | [Q110008732](https://www.wikidata.org/wiki/Q110008732) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Seligenstadt |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 40, road 135, building 508, zone 15, wall 18, waterway 1).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 11, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193614753 historic=building 109 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 508 mapped (trace size budget); the rest of the town is not drawn
- origin moved 110 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.04639/8.97445) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q110008732 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/steinheimer-torturm-q110008732.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
