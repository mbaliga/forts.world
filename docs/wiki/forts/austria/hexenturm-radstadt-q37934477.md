# Hexenturm, Radstadt

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hexenturm-radstadt-q37934477` |
| Coordinates | 47.38378, 13.46139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.38378/13.46139)) |
| Wikidata | [Q37934477](https://www.wikidata.org/wiki/Q37934477) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Radstadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 1, road 91, waterway 2, building 196, wall 10, water 2, zone 6).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 0, inferred 0, unknown 206.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/71763412 historic=(none; chosen by its Wikidata id) Q37934477 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.38378/13.46139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q37934477 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 312 elements); data/traces/hexenturm-radstadt-q37934477.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 309 elements; outline osm:way/71763412 historic=(none; chosen by its Wikidata id) Q37934477 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
