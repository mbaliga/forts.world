# Beguinenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beguinenturm-q814398` |
| Coordinates | 50.7768, 6.07344 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7768/6.07344)) |
| Wikidata | [Q814398](https://www.wikidata.org/wiki/Q814398) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Aachen |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 2, road 150, zone 17, building 335, wall 16, waterway 3, retaining-wall 1).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 6, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106375412 historic=building 211 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 335 mapped (trace size budget); the rest of the town is not drawn
- origin moved 211 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7768/6.07344) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q814398 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/beguinenturm-q814398.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
