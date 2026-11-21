# Château de Laval

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-laval-q1012883` |
| Coordinates | 48.06872, -0.77119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.06872/-0.77119)) |
| Wikidata | [Q1012883](https://www.wikidata.org/wiki/Q1012883) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Laval |
| Designations | classified historical monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 14, road 194, building 553, wall 18, waterway 9, water 3, retaining-wall 2, zone 9).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 20, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/67783340 historic=castle Q22962387 38 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 553 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn
- origin moved 38 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.06872/-0.77119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q1012883 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/chateau-de-laval-q1012883.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
