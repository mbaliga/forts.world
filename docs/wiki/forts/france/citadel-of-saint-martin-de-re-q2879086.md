# Citadel of Saint-Martin-de-Ré

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-saint-martin-de-re-q2879086` |
| Coordinates | 46.20485, -1.35884 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.20485/-1.35884)) |
| Wikidata | [Q2879086](https://www.wikidata.org/wiki/Q2879086) (CC0) |
| Wikidata class | fort |
| Types | citadel\|maison centrale\|bagno |
| Administrative area | Saint-Martin-de-Ré |
| Designations | part of UNESCO World Heritage Site\|classified historical monument |
| UNESCO WHC id | 1283-010 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |

## What the model contains

Tier **T1**, status `outline+walls`, 167 elements (outline 1, marker 5, road 55, coastline 1, retaining-wall 6, wall 17, building 80, water 2).

Evidence: documented 0, mapped 167, inferred 0, derived 1; heights documented 0, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35814333 historic=castle 9 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":206,"medianInside":0,"medianOutside":7.3}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.20485/-1.35884) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|maison centrale\|bagno; sitelinks=3; wikidata:Q2879086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 167 elements); data/traces/citadel-of-saint-martin-de-re-q2879086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
