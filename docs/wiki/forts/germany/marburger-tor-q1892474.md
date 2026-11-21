# Marburger Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marburger-tor-q1892474` |
| Coordinates | 50.8764, 8.02917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8764/8.02917)) |
| Wikidata | [Q1892474](https://www.wikidata.org/wiki/Q1892474) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate |
| Administrative area | Siegen |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 8 |
| OSM `description` | Marburger Pforte |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 12, road 176, zone 11, wall 15, building 285, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 13, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/249176499 historic=castle 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 285 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 176 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8764/8.02917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate; sitelinks=1; wikidata:Q1892474 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/marburger-tor-q1892474.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
