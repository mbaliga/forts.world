# Fort Carrapateira

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-carrapateira-q10283707` |
| Coordinates | 37.18457, -8.8952 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.18457/-8.8952)) |
| Wikidata | [Q10283707](https://www.wikidata.org/wiki/Q10283707) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Carrapateira, Aljezur |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `fortification_type` | hill_fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 1, waterway 3, road 84, wall 35, building 252, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 1, inferred 0, unknown 288.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167876398 historic=fort 3 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.18457/-8.8952) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q10283707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/fort-carrapateira-q10283707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
