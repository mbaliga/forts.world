# Spremberger Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spremberger-turm-q2313575` |
| Coordinates | 51.7577, 14.3334 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7577/14.3334)) |
| Wikidata | [Q2313575](https://www.wikidata.org/wiki/Q2313575) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Cottbus |
| Designations | architectural heritage monument |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `website` | https://www.cottbus.de/gaeste/wissenswertes/altstadtrundgang/spremberger_turm,255011183.html |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 5, road 356, building 189, zone 25, wall 29, water 1, retaining-wall 1).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 55, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/215246305 historic=yes Q2313575 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 189 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 356 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7577/14.3334) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q2313575 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/spremberger-turm-q2313575.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
