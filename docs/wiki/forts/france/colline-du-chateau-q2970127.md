# Colline du Château

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `colline-du-chateau-q2970127` |
| Coordinates | 43.696, 7.27968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.696/7.27968)) |
| Wikidata | [Q2970127](https://www.wikidata.org/wiki/Q2970127) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Nice |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 15, road 215, building 419, coastline 1, waterway 1, water 3, zone 6, retaining-wall 4, wall 6).

Evidence: documented 0, mapped 307, inferred 0, derived 1; heights documented 109, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/137418631 historic=castle Q3361109 365 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 419 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 215 mapped (trace size budget); minor lanes are not drawn
- origin moved 364 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":14,"medianInside":1.8,"medianOutside":15.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.696/7.27968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=5; wikidata:Q2970127 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/colline-du-chateau-q2970127.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
