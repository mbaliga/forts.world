# Chateau St. Louis

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-st-louis-q2599707` |
| Coordinates | 46.81177, -71.20432 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.81177/-71.20432)) |
| Wikidata | [Q2599707](https://www.wikidata.org/wiki/Q2599707) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|château |
| Administrative area | La Cité-Limoilou |
| Designations | national historic site of Canada |
| Wikipedia language editions | 9 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 34, road 279, building 158, zone 8, wall 8, waterway 1, water 1, cliff 1).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 11, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/392319994 historic=citywalls 164 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 158 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 163 m from the ledger point to the outline centroid
- 24 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.81177/-71.20432) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|château; sitelinks=9; wikidata:Q2599707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/chateau-st-louis-q2599707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
