# Maraş Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maras-castle-q6044520` |
| Coordinates | 37.58639, 36.92583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.58639/36.92583)) |
| Wikidata | [Q6044520](https://www.wikidata.org/wiki/Q6044520) (CC0) |
| Wikidata class | fort |
| Types | building\|fortress |
| Administrative area | Kahramanmaraş Province |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 2, road 126, building 735, wall 1, zone 1).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183209238 historic=castle Q6044520 73 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 735 mapped (trace size budget); the rest of the town is not drawn
- origin moved 82 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.58639/36.92583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; building\|fortress; sitelinks=3; wikidata:Q6044520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/maras-castle-q6044520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
