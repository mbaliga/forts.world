# Rocca di Montestaffoli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-di-montestaffoli-q3939481` |
| Coordinates | 43.46782, 11.04139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.46782/11.04139)) |
| Wikidata | [Q3939481](https://www.wikidata.org/wiki/Q3939481) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | San Gimignano |
| Inception | 1353 |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 3, road 168, zone 3, building 124, wall 21, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 3, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1202967382 historic=citywalls 17 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site
- 77 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.46782/11.04139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q3939481 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/rocca-di-montestaffoli-q3939481.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
