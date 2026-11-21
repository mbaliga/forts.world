# Crown fortress Olomouc

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `crown-fortress-olomouc-q12030252` |
| Coordinates | 49.5925, 17.25833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5925/17.25833)) |
| Wikidata | [Q12030252](https://www.wikidata.org/wiki/Q12030252) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Olomouc |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `description` | zemní val |

## What the model contains

Tier **T1**, status `outline+walls`, 390 elements (outline 1, marker 2, road 319, building 106, wall 40, zone 79, waterway 2, retaining-wall 6, water 4).

Evidence: documented 0, mapped 390, inferred 0, derived 0; heights documented 56, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/511083547 historic=fort 48 m from ledger point
- roads capped: kept the 150 longest of 319 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5925/17.25833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q12030252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 390 elements); data/traces/crown-fortress-olomouc-q12030252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
