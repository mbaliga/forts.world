# Tour Rosen

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-rosen-q3533166` |
| Coordinates | 50.6244, 5.56914 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6244/5.56914)) |
| Wikidata | [Q3533166](https://www.wikidata.org/wiki/Q3533166) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | Liège |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 1, road 276, building 333, water 4, zone 7, waterway 1, wall 37, retaining-wall 1).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 24, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225216409 historic=building Q3533166 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6244/5.56914) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=2; wikidata:Q3533166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/tour-rosen-q3533166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
