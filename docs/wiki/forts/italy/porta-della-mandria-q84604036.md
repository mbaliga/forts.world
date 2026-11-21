# Porta della Mandria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-della-mandria-q84604036` |
| Coordinates | 43.84492, 13.01292 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.84492/13.01292)) |
| Wikidata | [Q84604036](https://www.wikidata.org/wiki/Q84604036) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Fano |
| Inception | -0219 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 1, road 235, wall 37, building 405, retaining-wall 3, waterway 3, water 1).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 97, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8443519 historic=castle Q29689664 244 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 405 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 244 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.84492/13.01292) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q84604036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/porta-della-mandria-q84604036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
