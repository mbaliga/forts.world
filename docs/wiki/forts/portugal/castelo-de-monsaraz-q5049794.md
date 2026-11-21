# Castelo de Monsaraz

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-monsaraz-q5049794` |
| Coordinates | 38.44318, -7.38069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.44318/-7.38069)) |
| Wikidata | [Q5049794](https://www.wikidata.org/wiki/Q5049794) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Monsaraz |
| Inception | 1320 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 4, road 109, building 263, wall 82, zone 1, retaining-wall 4).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 4, inferred 0, unknown 203.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135069846 historic=castle Q5049794 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 263 mapped (trace size budget); the rest of the town is not drawn
- origin moved 26 m from the ledger point to the outline centroid
- 41 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.44318/-7.38069) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=7; wikidata:Q5049794 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/castelo-de-monsaraz-q5049794.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
