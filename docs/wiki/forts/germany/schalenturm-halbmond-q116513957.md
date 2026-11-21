# Schalenturm 'Halbmond'

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schalenturm-halbmond-q116513957` |
| Coordinates | 50.20355, 9.19348 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.20355/9.19348)) |
| Wikidata | [Q116513957](https://www.wikidata.org/wiki/Q116513957) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Gelnhausen |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 1, road 111, building 306, wall 21, waterway 1, retaining-wall 11).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 6, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145334107 historic=citywalls Q116513951 549 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 306 mapped (trace size budget); the rest of the town is not drawn
- origin moved 549 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.20355/9.19348) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=0; wikidata:Q116513957 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/schalenturm-halbmond-q116513957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
