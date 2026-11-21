# Bouchard Père & Fils

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bouchard-pere-fils-q2968487` |
| Coordinates | 47.02387, 4.84258 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.02387/4.84258)) |
| Wikidata | [Q2968487](https://www.wikidata.org/wiki/Q2968487) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Beaune |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, road 76, building 354, wall 31).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 4, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/117529269 historic=castle Q2968487 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.02387/4.84258) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=3; wikidata:Q2968487 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/bouchard-pere-fils-q2968487.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
