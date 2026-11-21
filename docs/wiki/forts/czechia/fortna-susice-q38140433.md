# Fortna (Sušice)

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortna-susice-q38140433` |
| Coordinates | 49.23171, 13.52158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.23171/13.52158)) |
| Wikidata | [Q38140433](https://www.wikidata.org/wiki/Q38140433) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Sušice I |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 389 elements (outline 1, marker 41, road 202, waterway 4, building 242, wall 32, zone 39, retaining-wall 2).

Evidence: documented 0, mapped 389, inferred 0, derived 0; heights documented 81, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101701635 historic=(none; chosen by its Wikidata id) Q38140433 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 242 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.23171/13.52158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q38140433 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 388 elements); data/traces/fortna-susice-q38140433.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 389 elements; outline osm:way/101701635 historic=(none; chosen by its Wikidata id) Q38140433 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
