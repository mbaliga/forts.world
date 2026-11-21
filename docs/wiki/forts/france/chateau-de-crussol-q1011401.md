# Château de Crussol

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-crussol-q1011401` |
| Coordinates | 44.93833, 4.8525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.93833/4.8525)) |
| Wikidata | [Q1011401](https://www.wikidata.org/wiki/Q1011401) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Saint-Péray |
| Designations | monument historique inscrit |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 5, road 75, building 2, wall 105, cliff 43, zone 3, waterway 2).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 0, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7063623 historic=castle Q1011401 91 m from ledger point
- origin moved 93 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.93833/4.8525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=7; wikidata:Q1011401 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/chateau-de-crussol-q1011401.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
