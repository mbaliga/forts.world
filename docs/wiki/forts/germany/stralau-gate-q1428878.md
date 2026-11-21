# Stralau Gate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stralau-gate-q1428878` |
| Coordinates | 52.5027, 13.4471 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.5027/13.4471)) |
| Wikidata | [Q1428878](https://www.wikidata.org/wiki/Q1428878) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Friedrichshain-Kreuzberg |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | yes |
| OSM `description` | erhaltener Abschnitt der Berliner Mauer |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 368 elements (outline 1, marker 3, road 276, building 56, wall 5, waterway 2, zone 19, retaining-wall 5).

Evidence: documented 0, mapped 368, inferred 0, derived 0; heights documented 40, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/448158193 historic=citywalls 78 m from ledger point
- origin moved 80 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.5027/13.4471) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=1; wikidata:Q1428878 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 368 elements); data/traces/stralau-gate-q1428878.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
