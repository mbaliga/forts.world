# Hexenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hexenturm-q47532386` |
| Coordinates | 50.68231, 8.30519 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.68231/8.30519)) |
| Wikidata | [Q47532386](https://www.wikidata.org/wiki/Q47532386) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Herborn |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 17, road 289, building 410, waterway 2, wall 21, retaining-wall 8, zone 3).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 43, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145465786 historic=yes Q47532386 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 410 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 289 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.68231/8.30519) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q47532386 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/hexenturm-q47532386.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
