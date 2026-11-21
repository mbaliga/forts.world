# Station Fort

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `station-fort-q113401273` |
| Coordinates | 45.44281, 12.31509 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.44281/12.31509)) |
| Wikidata | [Q113401273](https://www.wikidata.org/wiki/Q113401273) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Venice |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, marker 4, waterway 6, road 280, building 307, zone 25, wall 112, water 5, retaining-wall 2).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 30, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/556874509 historic=yes 457 m from ledger point
- pruned to the outline plus 150 m: 742 -> 400 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 165 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 137 mapped (trace size budget); minor lanes are not drawn
- origin moved 457 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.44281/12.31509) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=0; wikidata:Q113401273 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/station-fort-q113401273.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
