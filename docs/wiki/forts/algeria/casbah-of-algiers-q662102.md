# Casbah of Algiers

> Algeria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casbah-of-algiers-q662102` |
| Coordinates | 36.78333, 3.06028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.78333/3.06028)) |
| Wikidata | [Q662102](https://www.wikidata.org/wiki/Q662102) (CC0) |
| Wikidata class | castle |
| Types | urban area\|kasbah\|medina quarter |
| Administrative area | Casbah |
| Designations | Cultural heritage monuments in Algeria\|World Heritage Site |
| UNESCO WHC id | 565 |
| Wikipedia language editions | 44 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 7, road 335, building 418, coastline 1, zone 32, wall 18, retaining-wall 7).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 0, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20325219 historic=castle 220 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 418 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 335 mapped (trace size budget); minor lanes are not drawn
- origin moved 219 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.78333/3.06028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; urban area\|kasbah\|medina quarter; sitelinks=44; wikidata:Q662102 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/casbah-of-algiers-q662102.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/algeria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
