# Walls of Prague Old Town

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-prague-old-town-q30104244` |
| Coordinates | 50.08219, 14.41654 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08219/14.41654)) |
| Wikidata | [Q30104244](https://www.wikidata.org/wiki/Q30104244) (CC0) |
| Wikidata class | fort |
| Types | fortification\|city walls |
| Administrative area | Old Town |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 39, road 226, waterway 1, building 187, wall 4, zone 2).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 97, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27853501 historic=castle Q7842384 111 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 187 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 111 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08219/14.41654) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|city walls; sitelinks=1; wikidata:Q30104244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/walls-of-prague-old-town-q30104244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
