# Znojmo Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `znojmo-castle-q8073144` |
| Coordinates | 48.85564, 16.04254 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.85564/16.04254)) |
| Wikidata | [Q8073144](https://www.wikidata.org/wiki/Q8073144) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Znojmo |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 6, road 113, waterway 2, building 74, wall 34, zone 8, retaining-wall 16, cliff 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 35, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/71804411 historic=castle Q8073144 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.85564/16.04254) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q8073144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/znojmo-castle-q8073144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
