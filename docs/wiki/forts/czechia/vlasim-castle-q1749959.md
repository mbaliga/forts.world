# Vlašim Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vlasim-castle-q1749959` |
| Coordinates | 49.70722, 14.89528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.70722/14.89528)) |
| Wikidata | [Q1749959](https://www.wikidata.org/wiki/Q1749959) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|museum building |
| Inception | 1400 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 6 |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 11, road 95, waterway 3, building 144, zone 8, water 3, retaining-wall 9, wall 4).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 67, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/263660586 historic=(none; chosen by its Wikidata id) Q1749959 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.70722/14.89528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|museum building; sitelinks=6; wikidata:Q1749959 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 283 elements); data/traces/vlasim-castle-q1749959.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 278 elements; outline osm:way/263660586 historic=(none; chosen by its Wikidata id) Q1749959 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
