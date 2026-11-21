# Trekroner Fort

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trekroner-fort-q1126084` |
| Coordinates | 55.70306, 12.61444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.70306/12.61444)) |
| Wikidata | [Q1126084](https://www.wikidata.org/wiki/Q1126084) (CC0) |
| Wikidata class | fort |
| Types | sea fort |
| Administrative area | Copenhagen Municipality |
| Designations | monument on Kulturstyrelsen register\|protected ancient monument in Denmark |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, building 3, road 3, coastline 2, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 2, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/305473012 historic=castle Q1126084 74 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 75 m from the ledger point to the outline centroid
- 7469 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.70306/12.61444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; sea fort; sitelinks=9; wikidata:Q1126084 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/trekroner-fort-q1126084.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
