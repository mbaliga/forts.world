# Castle of San Luis de Bocachica

> Colombia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-luis-de-bocachica-q8342540` |
| Coordinates | 10.31931, -75.5812 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.31931/-75.5812)) |
| Wikidata | [Q8342540](https://www.wikidata.org/wiki/Q8342540) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cartagena |
| Designations | National Monuments of Colombia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, wall 4, waterway 1, road 7, zone 1, building 14, coastline 2, water 1).

Evidence: documented 0, mapped 31, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101809402 historic=castle 14 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":284,"medianInside":0.8,"medianOutside":5.4}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.31931/-75.5812) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q8342540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 31 elements); data/traces/castle-of-san-luis-de-bocachica-q8342540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/colombia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
