# Donjon d'Amay

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-d-amay-q3036701` |
| Coordinates | 50.54584, 5.31738 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.54584/5.31738)) |
| Wikidata | [Q3036701](https://www.wikidata.org/wiki/Q3036701) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Amay |
| Designations | protected heritage property in Wallonia\|Exceptional heritage property of Wallonia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | manoir du XVIIIe siècle; remanié à la fin du XIXe siècle; en 2007 scindé en deux parties habitables |
| OSM `website` | https://bibliotheca.amay.be/pppw/facades-et-ornements/les-enseignes-en-pierre/fronton-du-chateau-de-stockem/ |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, marker 2, road 69, building 489, retaining-wall 2, wall 5, zone 3).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1413926976 historic=castle 281 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 489 mapped (trace size budget); the rest of the town is not drawn
- origin moved 281 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.54584/5.31738) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=3; wikidata:Q3036701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/donjon-d-amay-q3036701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
