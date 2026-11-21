# defensive walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-q66818430` |
| Coordinates | 43.31519, 13.67997 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31519/13.67997)) |
| Wikidata | [Q66818430](https://www.wikidata.org/wiki/Q66818430) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Civitanova Marche |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, road 162, building 257, retaining-wall 15, zone 2, wall 30).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 0, inferred 0, unknown 165.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1459831435 historic=building 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 257 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 162 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31519/13.67997) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q66818430 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/defensive-walls-q66818430.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
