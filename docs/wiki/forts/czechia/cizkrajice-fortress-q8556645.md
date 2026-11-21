# Čížkrajice Fortress

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cizkrajice-fortress-q8556645` |
| Coordinates | 48.8065, 14.6357 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8065/14.6357)) |
| Wikidata | [Q8556645](https://www.wikidata.org/wiki/Q8556645) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 115 elements (outline 1, marker 2, zone 5, water 5, waterway 7, road 20, building 75).

Evidence: documented 0, mapped 115, inferred 0, derived 0; heights documented 38, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/242874721 historic=(none; chosen by its Wikidata id) Q8556645 10 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8065/14.6357) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=2; wikidata:Q8556645 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 113 elements); data/traces/cizkrajice-fortress-q8556645.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 115 elements; outline osm:way/242874721 historic=(none; chosen by its Wikidata id) Q8556645 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
