# Skopje Fortress

> North Macedonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skopje-fortress-q1262367` |
| Coordinates | 42, 21.43444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42/21.43444)) |
| Wikidata | [Q1262367](https://www.wikidata.org/wiki/Q1262367) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|fortification |
| Administrative area | Centar Municipality |
| Designations | Heritage Site in North Macedonia |
| Wikipedia language editions | 28 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 6, road 223, waterway 1, building 178, wall 25, zone 55, water 1, cliff 2).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 2, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/474873958 historic=castle Q1262367 124 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 178 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- origin moved 122 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42/21.43444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|fortification; sitelinks=28; wikidata:Q1262367 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/skopje-fortress-q1262367.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/north-macedonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
