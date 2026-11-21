# Seltenleer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `seltenleer-q131676301` |
| Coordinates | 49.41009, 8.71484 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.41009/8.71484)) |
| Wikidata | [Q131676301](https://www.wikidata.org/wiki/Q131676301) (CC0) |
| Wikidata class | ruin |
| Types | fortified tower\|prison tower\|tower ruin |
| Administrative area | Heidelberg |
| Inception | 1530 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 9, road 279, building 104, retaining-wall 30, zone 31, wall 42, water 2, waterway 5).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 71, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18506467 historic=yes Q131676301 1 m from ledger point
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.41009/8.71484) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortified tower\|prison tower\|tower ruin; sitelinks=1; wikidata:Q131676301 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/seltenleer-q131676301.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
