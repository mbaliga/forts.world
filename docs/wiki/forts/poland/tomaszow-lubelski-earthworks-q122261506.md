# Tomaszów Lubelski Earthworks

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tomaszow-lubelski-earthworks-q122261506` |
| Coordinates | 50.45334, 23.41924 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.45334/23.41924)) |
| Wikidata | [Q122261506](https://www.wikidata.org/wiki/Q122261506) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Tomaszów Lubelski |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 327 elements (outline 1, marker 3, road 208, building 190, zone 44, waterway 9).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 7, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/179416807 historic=yes Q24578172 261 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 190 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 208 mapped (trace size budget); minor lanes are not drawn
- origin moved 262 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.45334/23.41924) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q122261506 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 327 elements); data/traces/tomaszow-lubelski-earthworks-q122261506.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
