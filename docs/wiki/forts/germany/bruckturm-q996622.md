# Brückturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bruckturm-q996622` |
| Coordinates | 49.0212, 12.0971 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0212/12.0971)) |
| Wikidata | [Q996622](https://www.wikidata.org/wiki/Q996622) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Regensburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 14, waterway 6, road 124, building 241, zone 11, wall 15, water 1, retaining-wall 3).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 47, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93576145 historic=yes Q996622 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 241 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0212/12.0971) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=3; wikidata:Q996622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/bruckturm-q996622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
