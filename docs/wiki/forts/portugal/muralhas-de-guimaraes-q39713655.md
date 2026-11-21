# Muralhas de Guimarães

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralhas-de-guimaraes-q39713655` |
| Coordinates | 41.44359, -8.29157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.44359/-8.29157)) |
| Wikidata | [Q39713655](https://www.wikidata.org/wiki/Q39713655) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|cultural heritage |
| Administrative area | Oliveira, São Paio e São Sebastião |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 6, road 303, building 250, wall 23, waterway 6, water 1, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 34, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19901679 historic=citywalls 119 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 250 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.44359/-8.29157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|cultural heritage; sitelinks=1; wikidata:Q39713655 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/muralhas-de-guimaraes-q39713655.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
