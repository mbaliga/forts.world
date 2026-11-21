# Fortified city of Peschiera del Garda

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortified-city-of-peschiera-del-garda-q26258009` |
| Coordinates | 45.4409, 10.6941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.4409/10.6941)) |
| Wikidata | [Q26258009](https://www.wikidata.org/wiki/Q26258009) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Peschiera del Garda |
| Designations | part of UNESCO World Heritage Site\|Italian national heritage |
| UNESCO WHC id | 1533-002 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |
| OSM `description` | Fortified city of Peschiera del Garda |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 11, road 401, waterway 21, water 5, building 191, zone 34, wall 18, retaining-wall 3).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 7, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1551791471 historic=castle Q26258009 248 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 191 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 401 mapped (trace size budget); minor lanes are not drawn
- origin moved 247 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.4409/10.6941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q26258009 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/fortified-city-of-peschiera-del-garda-q26258009.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
