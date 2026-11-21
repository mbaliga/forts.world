# Asematunneli

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `asematunneli-q4356450` |
| Coordinates | 60.17028, 24.94139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.17028/24.94139)) |
| Wikidata | [Q4356450](https://www.wikidata.org/wiki/Q4356450) (CC0) |
| Wikidata class | fortification |
| Types | underground city\|shopping center\|tunnel |
| Administrative area | Helsinki |
| Inception | 1967 |
| Wikipedia language editions | 6 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 7, road 572, building 59, retaining-wall 2, zone 31, water 1, wall 2).

Evidence: documented 0, mapped 253, inferred 0, derived 0; heights documented 34, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28775218 historic=tomb 400 m from ledger point
- roads capped: kept the 150 longest of 572 mapped (trace size budget); minor lanes are not drawn
- origin moved 400 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.17028/24.94139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; underground city\|shopping center\|tunnel; sitelinks=6; wikidata:Q4356450 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/asematunneli-q4356450.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
