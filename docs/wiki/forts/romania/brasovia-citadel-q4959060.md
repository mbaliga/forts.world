# Brașovia Citadel

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brasovia-citadel-q4959060` |
| Coordinates | 45.63304, 25.59198 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.63304/25.59198)) |
| Wikidata | [Q4959060](https://www.wikidata.org/wiki/Q4959060) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|built structure |
| Administrative area | Brașov County |
| Designations | Historic Monument |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 150 elements (outline 1, marker 1, road 37, wall 3, building 106, zone 2).

Evidence: documented 0, mapped 150, inferred 0, derived 0; heights documented 3, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37576374 historic=fort Q1316258 495 m from ledger point
- origin moved 496 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.63304/25.59198) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|built structure; sitelinks=4; wikidata:Q4959060 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 150 elements); data/traces/brasovia-citadel-q4959060.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
