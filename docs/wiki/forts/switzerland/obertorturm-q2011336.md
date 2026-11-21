# Obertorturm

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `obertorturm-q2011336` |
| Coordinates | 47.6967, 8.63178 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6967/8.63178)) |
| Wikidata | [Q2011336](https://www.wikidata.org/wiki/Q2011336) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Schaffhausen |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | wall |
| OSM `website` | https://www.munot.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, road 150, waterway 3, wall 8, zone 3, building 146, retaining-wall 4).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 40, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4812268 historic=castle Q680695 606 m from ledger point
- origin moved 607 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6967/8.63178) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=2; wikidata:Q2011336 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/obertorturm-q2011336.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
