# Olizy Casemates

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `olizy-casemates-q114972319` |
| Coordinates | 49.61898, 6.13632 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.61898/6.13632)) |
| Wikidata | [Q114972319](https://www.wikidata.org/wiki/Q114972319) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Luxembourg |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 1, road 151, building 147, retaining-wall 22, wall 19, water 3, zone 12, cliff 21, waterway 3).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 52, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52345116 historic=fort Q13102621 346 m from ledger point
- origin moved 346 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.61898/6.13632) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q114972319 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/olizy-casemates-q114972319.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
