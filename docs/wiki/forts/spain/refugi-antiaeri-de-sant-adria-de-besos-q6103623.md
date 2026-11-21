# Refugi antiaeri de Sant Adrià de Besòs

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `refugi-antiaeri-de-sant-adria-de-besos-q6103623` |
| Coordinates | 41.42818, 2.22345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.42818/2.22345)) |
| Wikidata | [Q6103623](https://www.wikidata.org/wiki/Q6103623) (CC0) |
| Wikidata class | fortification |
| Types | building\|air-raid shelter |
| Administrative area | Sant Adrià de Besòs |
| Inception | 1938 |
| Designations | Cultural Asset of Local Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 5, road 189, waterway 1, building 294, zone 22, wall 11, retaining-wall 2).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 123, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1025720536 historic=monument 80 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 294 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 189 mapped (trace size budget); minor lanes are not drawn
- origin moved 80 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.42818/2.22345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; building\|air-raid shelter; sitelinks=3; wikidata:Q6103623 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/refugi-antiaeri-de-sant-adria-de-besos-q6103623.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
