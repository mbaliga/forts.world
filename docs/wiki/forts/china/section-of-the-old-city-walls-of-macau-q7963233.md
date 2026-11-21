# Section of the Old City Walls of Macau

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `section-of-the-old-city-walls-of-macau-q7963233` |
| Coordinates | 22.19773, 113.54061 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.19773/113.54061)) |
| Wikidata | [Q7963233](https://www.wikidata.org/wiki/Q7963233) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|cultural heritage |
| Administrative area | Macau |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 2, road 303, building 776, zone 6, coastline 1, wall 13, cliff 2, water 2).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 95, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46510080 historic=fort Q838085 189 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 776 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn
- origin moved 192 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.19773/113.54061) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|cultural heritage; sitelinks=6; wikidata:Q7963233 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/section-of-the-old-city-walls-of-macau-q7963233.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
