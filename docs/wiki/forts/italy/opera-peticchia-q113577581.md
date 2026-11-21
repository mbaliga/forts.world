# Opera Peticchia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `opera-peticchia-q113577581` |
| Coordinates | 41.22003, 9.42625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.22003/9.42625)) |
| Wikidata | [Q113577581](https://www.wikidata.org/wiki/Q113577581) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, coastline 1, building 22, road 8, wall 4, zone 1, water 2).

Evidence: documented 0, mapped 39, inferred 0, derived 2; heights documented 3, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/277777322 historic=fort Q113577561 613 m from ledger point
- origin moved 614 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":6,"medianInside":0,"medianOutside":14.3}
- sea-1: DEM check ok {"cells":13,"medianInside":-0.3,"medianOutside":14.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.22003/9.42625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113577581 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/opera-peticchia-q113577581.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
