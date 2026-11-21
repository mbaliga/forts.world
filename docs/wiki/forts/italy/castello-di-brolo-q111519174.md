# Castello di Brolo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-brolo-q111519174` |
| Coordinates | 38.15813, 14.82573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.15813/14.82573)) |
| Wikidata | [Q111519174](https://www.wikidata.org/wiki/Q111519174) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Brolo |
| Inception | 0900 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, coastline 1, road 106, wall 299, cliff 1, retaining-wall 38, building 405, waterway 1, water 1).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 0, inferred 0, unknown 256.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/392976779 historic=castle Q111519174 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 853 -> 524 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.15813/14.82573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q111519174 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/castello-di-brolo-q111519174.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
