# Tredegar Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tredegar-fort-q20584714` |
| Coordinates | 51.5762, -3.02668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5762/-3.02668)) |
| Wikidata | [Q20584714](https://www.wikidata.org/wiki/Q20584714) (CC0) |
| Wikidata class | fort |
| Types | contour fort |
| Administrative area | Gaer |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 287 elements (outline 1, road 135, zone 24, water 1, waterway 6, building 603).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26901737 historic=archaeological_site 244 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 603 mapped (trace size budget); the rest of the town is not drawn
- origin moved 240 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5762/-3.02668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; contour fort; sitelinks=5; wikidata:Q20584714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 287 elements); data/traces/tredegar-fort-q20584714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
