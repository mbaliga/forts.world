# Duroliponte

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duroliponte-q1267442` |
| Coordinates | 52.2125, 0.11417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2125/0.11417)) |
| Wikidata | [Q1267442](https://www.wikidata.org/wiki/Q1267442) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|Roman colony\|Roman city\|ancient Roman structure |
| Administrative area | Roman Britain |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | motte |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 3, road 231, building 259, zone 31, wall 53, water 2, waterway 1).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 53, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1036787497 historic=archaeological_site Q5025375 66 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 259 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 64 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2125/0.11417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|Roman colony\|Roman city\|ancient Roman structure; sitelinks=5; wikidata:Q1267442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/duroliponte-q1267442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
