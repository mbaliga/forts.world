# Schönhof castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schonhof-castle-q2259282` |
| Coordinates | 50.1239, 8.63444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1239/8.63444)) |
| Wikidata | [Q2259282](https://www.wikidata.org/wiki/Q2259282) (CC0) |
| Wikidata class | castle |
| Types | Lowland Castle |
| Administrative area | Frankfurt-Innenstadt II |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 3, road 433, building 195, zone 8, wall 16, waterway 2).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 49, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29979570 historic=(none; chosen by its Wikidata id) Q2259282 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 433 mapped (trace size budget); minor lanes are not drawn
- origin moved 35 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1239/8.63444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Lowland Castle; sitelinks=1; wikidata:Q2259282 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 309 elements); data/traces/schonhof-castle-q2259282.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 300 elements; outline osm:way/29979570 historic=(none; chosen by its Wikidata id) Q2259282 34 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
