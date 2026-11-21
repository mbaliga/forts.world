# Porta Sant'Agnese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-sant-agnese-q107827308` |
| Coordinates | 45.77301, 12.83763 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.77301/12.83763)) |
| Wikidata | [Q107827308](https://www.wikidata.org/wiki/Q107827308) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Portogruaro |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, road 159, water 3, waterway 6, building 183, zone 44, wall 40, retaining-wall 7).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 1, inferred 0, unknown 166.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/625955938 historic=monument 170 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 183 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 170 m from the ledger point to the centre of the mapped site
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.77301/12.83763) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q107827308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/porta-sant-agnese-q107827308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
