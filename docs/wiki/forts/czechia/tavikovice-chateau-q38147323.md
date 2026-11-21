# Tavíkovice Chateau

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tavikovice-chateau-q38147323` |
| Coordinates | 49.03284, 16.10744 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.03284/16.10744)) |
| Wikidata | [Q38147323](https://www.wikidata.org/wiki/Q38147323) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `description` | Ústav sociální péče |

## What the model contains

Tier **T1**, status `outline+walls`, 114 elements (outline 1, marker 1, road 23, building 84, waterway 3, water 1, wall 1).

Evidence: documented 0, mapped 114, inferred 0, derived 0; heights documented 59, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1084764 historic=castle Q38147323 4 m from ledger point
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.03284/16.10744) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q38147323 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 114 elements); data/traces/tavikovice-chateau-q38147323.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
