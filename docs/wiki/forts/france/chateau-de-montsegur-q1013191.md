# Château de Montségur

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-montsegur-q1013191` |
| Coordinates | 42.87556, 1.8325 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.87556/1.8325)) |
| Wikidata | [Q1013191](https://www.wikidata.org/wiki/Q1013191) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Montségur |
| Inception | 1204 |
| Designations | part of UNESCO World Heritage Site\|classified historical monument |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, marker 1, zone 2, road 13, building 4, cliff 6, waterway 2, wall 7).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 3, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/256965534 historic=castle Q1013191 18 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.87556/1.8325) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=22; wikidata:Q1013191 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/chateau-de-montsegur-q1013191.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
