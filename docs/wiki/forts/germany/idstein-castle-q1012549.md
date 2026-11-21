# Idstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `idstein-castle-q1012549` |
| Coordinates | 50.2219, 8.26861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.2219/8.26861)) |
| Wikidata | [Q1012549](https://www.wikidata.org/wiki/Q1012549) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Idstein |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 7, road 255, building 299, water 1, waterway 5, zone 3, wall 13, retaining-wall 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 5, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/40403684 historic=castle 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 299 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 255 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.2219/8.26861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1012549 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/idstein-castle-q1012549.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
