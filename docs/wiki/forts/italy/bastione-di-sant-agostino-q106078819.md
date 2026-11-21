# Bastione di Sant'Agostino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastione-di-sant-agostino-q106078819` |
| Coordinates | 45.04549, 9.68949 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.04549/9.68949)) |
| Wikidata | [Q106078819](https://www.wikidata.org/wiki/Q106078819) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Piacenza |
| Inception | 1450 |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, road 112, wall 14, building 297, zone 5).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 1, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184136464 historic=ruins 252 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 297 mapped (trace size budget); the rest of the town is not drawn
- origin moved 251 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.04549/9.68949) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q106078819 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/bastione-di-sant-agostino-q106078819.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
