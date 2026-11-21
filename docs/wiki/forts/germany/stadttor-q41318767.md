# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q41318767` |
| Coordinates | 50.01666, 10.28196 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.01666/10.28196)) |
| Wikidata | [Q41318767](https://www.wikidata.org/wiki/Q41318767) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Gochsheim |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 195 elements (outline 1, road 72, building 338, wall 2).

Evidence: documented 0, mapped 195, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225802077 historic=building Q41318762 249 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 338 mapped (trace size budget); the rest of the town is not drawn
- origin moved 251 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.01666/10.28196) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q41318767 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 195 elements); data/traces/stadttor-q41318767.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
