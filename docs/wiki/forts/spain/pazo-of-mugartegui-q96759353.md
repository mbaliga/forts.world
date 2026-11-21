# Pazo of Mugartegui

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pazo-of-mugartegui-q96759353` |
| Coordinates | 42.43371, -8.64342 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.43371/-8.64342)) |
| Wikidata | [Q96759353](https://www.wikidata.org/wiki/Q96759353) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|pazo |
| Administrative area | Pontevedra |
| Inception | 1771 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 9, coastline 3, road 192, waterway 1, building 449, wall 5, zone 1, water 2).

Evidence: documented 0, mapped 292, inferred 0, derived 2; heights documented 60, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/714590175 historic=castle Q96759353 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 449 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":394,"medianInside":10.1,"medianOutside":2.8}
- sea-1: DEM check ok {"cells":70,"medianInside":0.1,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.43371/-8.64342) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|pazo; sitelinks=7; wikidata:Q96759353 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/pazo-of-mugartegui-q96759353.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
