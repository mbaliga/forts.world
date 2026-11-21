# Obere Burg

> Liechtenstein · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `obere-burg-q7074727` |
| Coordinates | 47.2329, 9.5542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2329/9.5542)) |
| Wikidata | [Q7074727](https://www.wikidata.org/wiki/Q7074727) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins |
| Administrative area | Schellenberg |
| Designations | cultural heritage monument in Liechtenstein |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 158 elements (outline 1, road 77, cliff 3, wall 17, building 51, zone 9).

Evidence: documented 0, mapped 158, inferred 0, derived 0; heights documented 0, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39003399 historic=castle Q7074727 9 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2329/9.5542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins; sitelinks=7; wikidata:Q7074727 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 158 elements); data/traces/obere-burg-q7074727.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/liechtenstein.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
