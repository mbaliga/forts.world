# Prudnik Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prudnik-castle-q65063750` |
| Coordinates | 50.32296, 17.57839 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.32296/17.57839)) |
| Wikidata | [Q65063750](https://www.wikidata.org/wiki/Q65063750) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Prudnik |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 8, road 182, building 245, waterway 1, wall 11, zone 48).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 31, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/982767303 historic=yes 304 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 245 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 304 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.32296/17.57839) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q65063750 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/prudnik-castle-q65063750.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
