# Catete Palace

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `catete-palace-q1142766` |
| Coordinates | -22.92589, -43.17619 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-22.92589/-43.17619)) |
| Wikidata | [Q1142766](https://www.wikidata.org/wiki/Q1142766) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|historic building |
| Administrative area | Rio de Janeiro |
| Inception | 1867 |
| Designations | heritage asset listed by IPHAN |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 4, road 66, wall 2, building 229, waterway 1, water 2).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 118, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30789236 historic=castle Q1142766 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-22.92589/-43.17619) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|historic building; sitelinks=9; wikidata:Q1142766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/catete-palace-q1142766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
