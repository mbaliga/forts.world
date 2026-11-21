# Muiderslot

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muiderslot-q2426916` |
| Coordinates | 52.33437, 5.07131 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.33437/5.07131)) |
| Wikidata | [Q2426916](https://www.wikidata.org/wiki/Q2426916) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|water castle |
| Administrative area | Gooise Meren |
| Inception | 1280 |
| Designations | Rijksmonument |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | medieval fortified castle |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, road 125, water 7, building 35, zone 13, waterway 5, wall 10, retaining-wall 4).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 2, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3711947 historic=castle Q2426916 5 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.33437/5.07131) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|water castle; sitelinks=21; wikidata:Q2426916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/muiderslot-q2426916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
