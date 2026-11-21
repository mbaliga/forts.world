# Merchiston Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `merchiston-tower-q1921452` |
| Coordinates | 55.9333, -3.21391 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.9333/-3.21391)) |
| Wikidata | [Q1921452](https://www.wikidata.org/wiki/Q1921452) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | City of Edinburgh |
| Inception | 1454 |
| Designations | category A listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |
| OSM `description` | Birth place of John Napier (Inventor of logarithms) |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, road 76, building 512, zone 18, wall 222).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 8, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/324049962 historic=castle Q1921452 4 m from ledger point
- pruned to the outline plus 150 m: 829 -> 363 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 202 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.9333/-3.21391) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1921452 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/merchiston-tower-q1921452.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
