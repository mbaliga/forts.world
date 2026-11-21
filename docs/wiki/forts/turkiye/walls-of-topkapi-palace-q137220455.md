# Walls of Topkapi Palace

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-topkapi-palace-q137220455` |
| Coordinates | 41.00936, 28.98057 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.00936/28.98057)) |
| Wikidata | [Q137220455](https://www.wikidata.org/wiki/Q137220455) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Istanbul |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 12, road 418, building 596, wall 48, zone 29, water 7, retaining-wall 6, coastline 1).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 15, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11316749 historic=citywalls Q137220455 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 596 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 418 mapped (trace size budget); minor lanes are not drawn
- origin moved 73 m from the ledger point to the outline centroid
- 90 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.00936/28.98057) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q137220455 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/walls-of-topkapi-palace-q137220455.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
