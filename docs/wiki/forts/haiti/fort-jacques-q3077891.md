# Fort Jacques

> Haiti · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-jacques-q3077891` |
| Coordinates | 18.47443, -72.27053 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.47443/-72.27053)) |
| Wikidata | [Q3077891](https://www.wikidata.org/wiki/Q3077891) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pétion-Ville |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, road 16, wall 1, building 31).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1734522 historic=castle 3 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.47443/-72.27053) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3077891 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/fort-jacques-q3077891.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/haiti.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
