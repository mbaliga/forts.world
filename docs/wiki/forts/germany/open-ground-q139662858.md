# Open Ground

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `open-ground-q139662858` |
| Coordinates | 51.25608, 7.14967 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.25608/7.14967)) |
| Wikidata | [Q139662858](https://www.wikidata.org/wiki/Q139662858) (CC0) |
| Wikidata class | fortification |
| Types | deep bunker\|music club |
| Administrative area | Wuppertal |
| Inception | 1940 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 11, road 231, building 252, water 2, waterway 6, zone 1, retaining-wall 5, wall 4).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 20, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132681227 historic=yes Q1737014 229 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 252 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 229 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.25608/7.14967) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; deep bunker\|music club; sitelinks=2; wikidata:Q139662858 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/open-ground-q139662858.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
