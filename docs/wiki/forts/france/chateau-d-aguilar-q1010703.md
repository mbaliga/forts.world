# Château d'Aguilar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-aguilar-q1010703` |
| Coordinates | 42.89056, 2.74694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.89056/2.74694)) |
| Wikidata | [Q1010703](https://www.wikidata.org/wiki/Q1010703) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tuchan |
| Designations | part of UNESCO World Heritage Site\|monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, road 26, wall 6, building 7, zone 2).

Evidence: documented 0, mapped 43, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/150410744 historic=castle Q1010703 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.89056/2.74694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q1010703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 43 elements); data/traces/chateau-d-aguilar-q1010703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
