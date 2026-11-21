# fortifications of Hennebont

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-hennebont-q3424610` |
| Coordinates | 47.8055, -3.27846 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8055/-3.27846)) |
| Wikidata | [Q3424610](https://www.wikidata.org/wiki/Q3424610) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Hennebont |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, road 70, building 203, waterway 1, zone 7, coastline 1, water 2, wall 1, retaining-wall 2).

Evidence: documented 0, mapped 288, inferred 0, derived 1; heights documented 0, inferred 0, unknown 206.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/71248406 historic=castle 341 m from ledger point
- origin moved 341 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":5,"medianInside":2.5,"medianOutside":25.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8055/-3.27846) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3424610 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/fortifications-of-hennebont-q3424610.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
