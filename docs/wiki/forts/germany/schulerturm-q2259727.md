# Schülerturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schulerturm-q2259727` |
| Coordinates | 51.1828, 14.426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1828/14.426)) |
| Wikidata | [Q2259727](https://www.wikidata.org/wiki/Q2259727) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Bautzen |
| Inception | 1450 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 10, road 133, building 364, wall 22, zone 5, retaining-wall 8).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 23, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/116969125 historic=yes Q2259727 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 364 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1828/14.426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=2; wikidata:Q2259727 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/schulerturm-q2259727.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
