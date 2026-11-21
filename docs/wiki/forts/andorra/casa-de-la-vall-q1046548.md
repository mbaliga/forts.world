# Casa de la Vall

> Andorra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-de-la-vall-q1046548` |
| Coordinates | 42.50661, 1.52051 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.50661/1.52051)) |
| Wikidata | [Q1046548](https://www.wikidata.org/wiki/Q1046548) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|manor house |
| Administrative area | Andorra la Vella |
| Inception | 1580 |
| Designations | bé d'interès cultural |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.casadelavall.ad/ |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 5, road 236, building 95, waterway 3, water 2, cliff 3, zone 59, wall 24).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 5, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/512803160 historic=castle Q1046548 4 m from ledger point
- roads capped: kept the 150 longest of 236 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.50661/1.52051) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|manor house; sitelinks=21; wikidata:Q1046548 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/casa-de-la-vall-q1046548.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/andorra.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
