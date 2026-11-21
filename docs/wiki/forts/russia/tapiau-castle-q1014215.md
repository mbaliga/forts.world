# Tapiau castle

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tapiau-castle-q1014215` |
| Coordinates | 54.64496, 21.07384 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.64496/21.07384)) |
| Wikidata | [Q1014215](https://www.wikidata.org/wiki/Q1014215) (CC0) |
| Wikidata class | castle |
| Types | Ordensburg\|architectural landmark |
| Administrative area | Gvardeysk |
| Inception | 1265 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 127 elements (outline 1, marker 1, waterway 5, road 28, building 83, water 2, wall 1, zone 5).

Evidence: documented 0, mapped 127, inferred 0, derived 0; heights documented 65, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/84818610 historic=castle 37 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.64496/21.07384) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Ordensburg\|architectural landmark; sitelinks=4; wikidata:Q1014215 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 127 elements); data/traces/tapiau-castle-q1014215.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
