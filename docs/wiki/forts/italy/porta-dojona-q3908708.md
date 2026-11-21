# Porta Dojona

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-dojona-q3908708` |
| Coordinates | 46.13952, 12.21789 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.13952/12.21789)) |
| Wikidata | [Q3908708](https://www.wikidata.org/wiki/Q3908708) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Belluno |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 1, road 207, building 281, water 1, waterway 2, retaining-wall 3, zone 12, wall 7).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 0, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/912397177 historic=building 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.13952/12.21789) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3908708 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/porta-dojona-q3908708.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
