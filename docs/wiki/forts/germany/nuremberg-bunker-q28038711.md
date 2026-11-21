# Nuremberg Bunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nuremberg-bunker-q28038711` |
| Coordinates | 49.45815, 11.08463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45815/11.08463)) |
| Wikidata | [Q28038711](https://www.wikidata.org/wiki/Q28038711) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|rock cellar |
| Administrative area | Nuremberg |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 3, road 223, zone 5, wall 23, building 201, retaining-wall 1, water 1).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 72, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31862065 historic=castle Q2459075 70 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 201 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- origin moved 71 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45815/11.08463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|rock cellar; sitelinks=2; wikidata:Q28038711 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/nuremberg-bunker-q28038711.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
