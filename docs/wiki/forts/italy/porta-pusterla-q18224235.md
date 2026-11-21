# Porta Pusterla

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-pusterla-q18224235` |
| Coordinates | 45.1564, 10.7911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.1564/10.7911)) |
| Wikidata | [Q18224235](https://www.wikidata.org/wiki/Q18224235) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Mantua |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 1, road 180, building 470, water 1, wall 31, zone 8, retaining-wall 1).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 3, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/888466999 historic=building Q112673415 432 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 470 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 180 mapped (trace size budget); minor lanes are not drawn
- origin moved 431 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.1564/10.7911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q18224235 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/porta-pusterla-q18224235.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
