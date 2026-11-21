# Castle of Atienza

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-atienza-q612857` |
| Coordinates | 41.20086, -2.87444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.20086/-2.87444)) |
| Wikidata | [Q612857](https://www.wikidata.org/wiki/Q612857) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Atienza |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |
| OSM `website` | https://atienza.biz/monumentos_ver/el-castillo/ver/1 |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, marker 2, wall 13, building 40, road 29, water 2, cliff 1).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 1, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197749811 historic=castle Q612857 72 m from ledger point
- origin moved 74 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.20086/-2.87444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=5; wikidata:Q612857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/castle-of-atienza-q612857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
