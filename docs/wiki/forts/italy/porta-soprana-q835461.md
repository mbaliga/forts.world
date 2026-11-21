# Porta Soprana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-soprana-q835461` |
| Coordinates | 44.40557, 8.93447 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.40557/8.93447)) |
| Wikidata | [Q835461](https://www.wikidata.org/wiki/Q835461) (CC0) |
| Wikidata class | fort |
| Types | fortification\|historical park museum |
| Administrative area | Genoa |
| Designations | Italian national heritage |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 373 elements (outline 1, marker 69, road 328, building 285, wall 13, zone 6, coastline 1, water 3, retaining-wall 9, waterway 1).

Evidence: documented 0, mapped 373, inferred 0, derived 0; heights documented 14, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28244674 historic=castle Q3889511 236 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 285 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 328 mapped (trace size budget); minor lanes are not drawn
- origin moved 234 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.40557/8.93447) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|historical park museum; sitelinks=10; wikidata:Q835461 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 373 elements); data/traces/porta-soprana-q835461.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
