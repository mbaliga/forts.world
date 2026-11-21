# Wachturm Stadtbefestigung in Friedberg (Bayern)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-stadtbefestigung-in-friedberg-bayern-q98723151` |
| Coordinates | 48.3538, 10.97759 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3538/10.97759)) |
| Wikidata | [Q98723151](https://www.wikidata.org/wiki/Q98723151) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Friedberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 3, road 167, building 369, wall 21, zone 17, retaining-wall 5, waterway 3).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 5, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/126533103 historic=citywalls 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 369 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3538/10.97759) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98723151 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/wachturm-stadtbefestigung-in-friedberg-bayern-q98723151.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
