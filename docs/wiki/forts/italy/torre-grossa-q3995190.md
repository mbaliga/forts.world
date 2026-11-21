# Torre Grossa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-grossa-q3995190` |
| Coordinates | 43.46763, 11.0429 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.46763/11.0429)) |
| Wikidata | [Q3995190](https://www.wikidata.org/wiki/Q3995190) (CC0) |
| Wikidata class | fortification |
| Types | Tuscan tower house |
| Administrative area | San Gimignano |
| Wikipedia language editions | 9 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 3, road 168, zone 3, building 124, wall 21, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 3, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1202967382 historic=citywalls 140 m from ledger point
- origin moved 140 m from the ledger point to the outline centroid
- 73 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.46763/11.0429) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Tuscan tower house; sitelinks=9; wikidata:Q3995190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/torre-grossa-q3995190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
