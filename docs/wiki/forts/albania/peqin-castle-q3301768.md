# Peqin Castle

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peqin-castle-q3301768` |
| Coordinates | 41.0448, 19.7498 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.0448/19.7498)) |
| Wikidata | [Q3301768](https://www.wikidata.org/wiki/Q3301768) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 79 elements (outline 1, marker 1, road 45, building 26, waterway 2, wall 3).

Evidence: documented 0, mapped 79, inferred 0, derived 0; heights documented 1, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/260968352 historic=castle Q3301768 11 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.0448/19.7498) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q3301768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 79 elements); data/traces/peqin-castle-q3301768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
