# Temple Bar Gate

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `temple-bar-gate-q1256932` |
| Coordinates | 51.5143, -0.09955 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5143/-0.09955)) |
| Wikidata | [Q1256932](https://www.wikidata.org/wiki/Q1256932) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | City of London |
| Designations | Grade I listed building |
| Wikipedia language editions | 7 |
| OSM `historic` | city_gate |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, marker 16, road 528, building 127, wall 43, zone 17, retaining-wall 3, water 2).

Evidence: documented 0, mapped 154, inferred 0, derived 0; heights documented 39, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/100684524 historic=city_gate Q1256932 5 m from ledger point
- pruned to the outline plus 150 m: 737 -> 307 elements
- roads capped: kept the 80 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5143/-0.09955) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=7; wikidata:Q1256932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 366 elements); data/traces/temple-bar-gate-q1256932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 154 elements; outline osm:way/100684524 historic=city_gate Q1256932 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
