# Golden Gate

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `golden-gate-q1427503` |
| Coordinates | 50.44833, 30.51306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.44833/30.51306)) |
| Wikidata | [Q1427503](https://www.wikidata.org/wiki/Q1427503) (CC0) |
| Wikidata class | fort |
| Types | museum\|gate\|fortification\|architectural heritage monument |
| Administrative area | Kyiv |
| Inception | 1018 |
| Designations | architectural heritage monument\|architectural monument of national significance of Ukraine |
| Wikipedia language editions | 39 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 28, building 112, road 212, zone 46, retaining-wall 5, wall 6).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 60, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27830107 historic=building 226 m from ledger point
- roads capped: kept the 150 longest of 212 mapped (trace size budget); minor lanes are not drawn
- origin moved 230 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.44833/30.51306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|gate\|fortification\|architectural heritage monument; sitelinks=39; wikidata:Q1427503 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/golden-gate-q1427503.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
