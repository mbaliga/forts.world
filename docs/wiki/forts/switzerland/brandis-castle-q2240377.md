# Brandis Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brandis-castle-q2240377` |
| Coordinates | 47.00639, 9.53086 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.00639/9.53086)) |
| Wikidata | [Q2240377](https://www.wikidata.org/wiki/Q2240377) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Maienfeld |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `description` | Wohnbauten und ihre Nebenanlagen / Burgen |
| OSM `website` | https://www.schlossmaienfeld.ch |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 1, road 139, zone 3, building 248, waterway 2, wall 9).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 6, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1298659024 historic=castle Q2240377 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 248 mapped (trace size budget); the rest of the town is not drawn
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.00639/9.53086) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q2240377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/brandis-castle-q2240377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
