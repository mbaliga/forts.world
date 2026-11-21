# Torre de les Hores

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-les-hores-q104759608` |
| Coordinates | 41.71694, 2.93257 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.71694/2.93257)) |
| Wikidata | [Q104759608](https://www.wikidata.org/wiki/Q104759608) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Tossa de Mar |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 2, road 141, retaining-wall 5, building 117, water 2, cliff 2, wall 2, coastline 6, zone 4, waterway 1).

Evidence: documented 0, mapped 284, inferred 0, derived 1; heights documented 1, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/387032814 historic=citywalls 66 m from ledger point
- origin moved 66 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":204,"medianInside":0,"medianOutside":14}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 59 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.71694/2.93257) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q104759608 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/torre-de-les-hores-q104759608.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
