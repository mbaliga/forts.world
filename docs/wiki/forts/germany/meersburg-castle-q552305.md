# Meersburg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `meersburg-castle-q552305` |
| Coordinates | 47.6939, 9.27052 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6939/9.27052)) |
| Wikidata | [Q552305](https://www.wikidata.org/wiki/Q552305) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Meersburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `description` | Schloßmuseum |
| OSM `website` | https://www.burg-meersburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 6, road 204, building 246, retaining-wall 26, wall 11, zone 2, water 1).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 16, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/696326051 historic=castle Q552305 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 246 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6939/9.27052) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=13; wikidata:Q552305 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/meersburg-castle-q552305.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
