# Heresy tower

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `heresy-tower-q123734529` |
| Coordinates | 47.37537, 8.54526 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.37537/8.54526)) |
| Wikidata | [Q123734529](https://www.wikidata.org/wiki/Q123734529) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Zurich |
| Inception | 1314 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | Sichtbarer Teil des Bunkers (Frischluftzufuhr), 10 Etagen; 2010 deklassiert und geräumt |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, road 559, building 287, wall 8, retaining-wall 39, zone 9, water 2).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 37, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/480646338 historic=yes 103 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 287 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 559 mapped (trace size budget); minor lanes are not drawn
- origin moved 103 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.37537/8.54526) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q123734529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/heresy-tower-q123734529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
