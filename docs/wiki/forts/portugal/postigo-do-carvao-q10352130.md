# Postigo do Carvão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `postigo-do-carvao-q10352130` |
| Coordinates | 41.14041, -8.61343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14041/-8.61343)) |
| Wikidata | [Q10352130](https://www.wikidata.org/wiki/Q10352130) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 7, road 336, building 332, retaining-wall 42, wall 41, zone 5, water 1, cliff 3, waterway 4).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 63, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/210355090 historic=citywalls 39 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 332 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 336 mapped (trace size budget); minor lanes are not drawn
- origin moved 39 m from the ledger point to the outline centroid
- 51 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14041/-8.61343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q10352130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/postigo-do-carvao-q10352130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
