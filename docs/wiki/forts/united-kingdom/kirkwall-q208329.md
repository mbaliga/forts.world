# Kirkwall

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kirkwall-q208329` |
| Coordinates | 58.98111, -2.96 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.98111/-2.96)) |
| Wikidata | [Q208329](https://www.wikidata.org/wiki/Q208329) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Orkney Islands |
| Wikipedia language editions | 58 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 4, road 144, building 361, zone 14, wall 79).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 0, inferred 0, unknown 199.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/396085688 historic=yes Q4917434 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 361 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.98111/-2.96) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=58; wikidata:Q208329 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/kirkwall-q208329.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
