# City walls of Cambrai

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-cambrai-q88496458` |
| Coordinates | 50.17583, 3.23472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.17583/3.23472)) |
| Wikidata | [Q88496458](https://www.wikidata.org/wiki/Q88496458) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Cambrai |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 2, road 126, zone 16, building 501, wall 16).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/199616637 historic=castle 233 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 501 mapped (trace size budget); the rest of the town is not drawn
- origin moved 234 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.17583/3.23472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q88496458 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/city-walls-of-cambrai-q88496458.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
