# Leśnica Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lesnica-castle-q16619009` |
| Coordinates | 51.1464, 16.8706 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1464/16.8706)) |
| Wikidata | [Q16619009](https://www.wikidata.org/wiki/Q16619009) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Wrocław |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Zamek leśnicki znajduje się na Europejskim Szlaku Zamków i Pałaców, który ma skupiać zamki i pałace dolnośląskie |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 18, road 252, building 152, water 2, zone 11, wall 13, waterway 6).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 31, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101650884 historic=castle Q16619009 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 252 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1464/16.8706) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q16619009 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/lesnica-castle-q16619009.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
