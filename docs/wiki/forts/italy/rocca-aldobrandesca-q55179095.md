# Rocca aldobrandesca

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-aldobrandesca-q55179095` |
| Coordinates | 42.84936, 11.69241 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.84936/11.69241)) |
| Wikidata | [Q55179095](https://www.wikidata.org/wiki/Q55179095) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Piancastagnaio |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 1, road 172, building 225, water 3, wall 8, cliff 2, zone 4, retaining-wall 5).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 96, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/424294526 historic=castle Q55179095 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 225 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.84936/11.69241) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=3; wikidata:Q55179095 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/rocca-aldobrandesca-q55179095.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
