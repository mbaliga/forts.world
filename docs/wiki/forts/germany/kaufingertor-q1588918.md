# Kaufingertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kaufingertor-q1588918` |
| Coordinates | 48.1381, 11.5719 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1381/11.5719)) |
| Wikidata | [Q1588918](https://www.wikidata.org/wiki/Q1588918) (CC0) |
| Wikidata class | fort |
| Types | gate tower\|fortified tower |
| Administrative area | Altstadt-Lehel |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 3, road 295, zone 13, building 101, waterway 3, wall 2, retaining-wall 2).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 66, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/52740 historic=castle Q872048 548 m from ledger point
- roads capped: kept the 150 longest of 295 mapped (trace size budget); minor lanes are not drawn
- origin moved 548 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1381/11.5719) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; gate tower\|fortified tower; sitelinks=3; wikidata:Q1588918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/kaufingertor-q1588918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
