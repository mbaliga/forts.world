# Fortaleza de San Fernando

> Honduras · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-san-fernando-q1438892` |
| Coordinates | 15.7789, -88.04026 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.7789/-88.04026)) |
| Wikidata | [Q1438892](https://www.wikidata.org/wiki/Q1438892) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Omoa |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 48 elements (outline 1, coastline 1, road 19, building 26, water 1).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202554265 historic=castle Q1438892 8 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":7.4,"medianOutside":8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.7789/-88.04026) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=6; wikidata:Q1438892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 48 elements); data/traces/fortaleza-de-san-fernando-q1438892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/honduras.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
