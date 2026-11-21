# Kaiserpfalz Duisburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kaiserpfalz-duisburg-q1721712` |
| Coordinates | 51.4358, 6.76016 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4358/6.76016)) |
| Wikidata | [Q1721712](https://www.wikidata.org/wiki/Q1721712) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Duisburg |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 13, road 326, wall 27, building 166, water 1, zone 53, waterway 1, retaining-wall 5).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 47, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237332019 historic=archaeological_site 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 326 mapped (trace size budget); minor lanes are not drawn
- origin moved 40 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4358/6.76016) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q1721712 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/kaiserpfalz-duisburg-q1721712.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
