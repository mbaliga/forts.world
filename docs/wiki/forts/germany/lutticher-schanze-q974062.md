# Lütticher Schanze

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lutticher-schanze-q974062` |
| Coordinates | 50.7697, 6.07333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7697/6.07333)) |
| Wikidata | [Q974062](https://www.wikidata.org/wiki/Q974062) (CC0) |
| Wikidata class | fortification |
| Types | zwinger |
| Administrative area | Aachen |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 5, road 213, building 359, wall 9, zone 8, retaining-wall 8, waterway 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 49, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114987944 historic=yes Q1606171 182 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 213 mapped (trace size budget); minor lanes are not drawn
- origin moved 182 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7697/6.07333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; zwinger; sitelinks=2; wikidata:Q974062 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/lutticher-schanze-q974062.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
