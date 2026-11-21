# City walls of Radom

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-radom-q28675629` |
| Coordinates | 51.40219, 21.14183 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.40219/21.14183)) |
| Wikidata | [Q28675629](https://www.wikidata.org/wiki/Q28675629) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Radom |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, marker 21, road 288, building 209, zone 144, wall 48, waterway 9, retaining-wall 1).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 44, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/716756850 historic=ruins 249 m from ledger point
- pruned to the outline plus 150 m: 721 -> 359 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 107 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 145 mapped (trace size budget); minor lanes are not drawn
- origin moved 251 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.40219/21.14183) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q28675629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/city-walls-of-radom-q28675629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
