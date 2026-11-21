# Festung Heldrungen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `festung-heldrungen-q1408892` |
| Coordinates | 51.2989, 11.2189 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2989/11.2189)) |
| Wikidata | [Q1408892](https://www.wikidata.org/wiki/Q1408892) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Heldrungen |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.wasserburg-heldrungen.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 2, road 107, building 528, water 1, zone 9, waterway 9, retaining-wall 7, wall 5).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 16, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/159297242 historic=castle Q1408892 57 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 528 mapped (trace size budget); the rest of the town is not drawn
- origin moved 57 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2989/11.2189) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q1408892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/festung-heldrungen-q1408892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
