# Wachturm Stadtbefestigung in Friedberg (Bayern)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-stadtbefestigung-in-friedberg-bayern-q98723142` |
| Coordinates | 48.3535, 10.9798 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3535/10.9798)) |
| Wikidata | [Q98723142](https://www.wikidata.org/wiki/Q98723142) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Friedberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 2, road 151, building 347, wall 20, zone 23, retaining-wall 2, waterway 2).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 7, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/125359115 historic=citywalls 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 347 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 130 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3535/10.9798) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98723142 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/wachturm-stadtbefestigung-in-friedberg-bayern-q98723142.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
