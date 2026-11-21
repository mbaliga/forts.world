# Porta Romana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-romana-q108495109` |
| Coordinates | 42.39785, 12.86036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.39785/12.86036)) |
| Wikidata | [Q108495109](https://www.wikidata.org/wiki/Q108495109) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rieti |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 3, road 205, waterway 3, water 1, building 230, wall 28, zone 19, retaining-wall 11).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 0, inferred 0, unknown 159.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/546693520 historic=monastery Q25171030 369 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 205 mapped (trace size budget); minor lanes are not drawn
- origin moved 369 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.39785/12.86036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q108495109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/porta-romana-q108495109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
