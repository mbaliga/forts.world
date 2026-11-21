# Porta Santa Lucia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-santa-lucia-q113432809` |
| Coordinates | 45.55299, 11.55186 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.55299/11.55186)) |
| Wikidata | [Q113432809](https://www.wikidata.org/wiki/Q113432809) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vicenza |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 4, road 122, waterway 2, water 1, wall 1, building 510, zone 1).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 6, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138734354 historic=castle 526 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 510 mapped (trace size budget); the rest of the town is not drawn
- origin moved 528 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.55299/11.55186) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q113432809 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/porta-santa-lucia-q113432809.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
