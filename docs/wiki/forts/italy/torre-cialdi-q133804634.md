# Torre Cialdi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-cialdi-q133804634` |
| Coordinates | 42.25631, 11.75522 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.25631/11.75522)) |
| Wikidata | [Q133804634](https://www.wikidata.org/wiki/Q133804634) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Tarquinia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | sede della Società Tarquiniense d'Arte e Storia |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 3, road 220, building 282, zone 4, water 1, wall 21, retaining-wall 5, waterway 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 5, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/147051326 historic=castle 229 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 282 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 220 mapped (trace size budget); minor lanes are not drawn
- origin moved 229 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.25631/11.75522) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q133804634 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/torre-cialdi-q133804634.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
