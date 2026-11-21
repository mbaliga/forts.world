# Conci tower house

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `conci-tower-house-q111578063` |
| Coordinates | 46.0664, 11.12262 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.0664/11.12262)) |
| Wikidata | [Q111578063](https://www.wikidata.org/wiki/Q111578063) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Trento |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | http://museodiocesanotridentino.it |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 12, road 302, zone 9, building 405, wall 40, waterway 2).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 38, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24785843 historic=castle Q26997946 100 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 405 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 302 mapped (trace size budget); minor lanes are not drawn
- origin moved 101 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.0664/11.12262) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q111578063 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/conci-tower-house-q111578063.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
