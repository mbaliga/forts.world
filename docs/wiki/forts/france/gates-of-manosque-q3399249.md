# Gates of Manosque

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gates-of-manosque-q3399249` |
| Coordinates | 43.8317, 5.78401 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.8317/5.78401)) |
| Wikidata | [Q3399249](https://www.wikidata.org/wiki/Q3399249) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Manosque |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, road 225, building 173, zone 4, waterway 5, wall 8).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 10, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89324221 historic=castle 334 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 173 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 225 mapped (trace size budget); minor lanes are not drawn
- origin moved 334 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.8317/5.78401) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q3399249 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/gates-of-manosque-q3399249.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
