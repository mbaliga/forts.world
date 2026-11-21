# Gasa Dzong

> Bhutan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gasa-dzong-q4134036` |
| Coordinates | 27.90378, 89.72756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.90378/89.72756)) |
| Wikidata | [Q4134036](https://www.wikidata.org/wiki/Q4134036) (CC0) |
| Wikidata class | fortification |
| Types | dzong in Tibet |
| Administrative area | Bhutan |
| Wikipedia language editions | 11 |

## What the model contains

Tier **T1**, status `outline-only`, 53 elements (outline 1, marker 1, road 6, building 41, zone 3, water 1).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 1, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/314180861 historic=(none; chosen by its Wikidata id) Q4134036 17 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.90378/89.72756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; dzong in Tibet; sitelinks=11; wikidata:Q4134036; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 52 elements); data/traces/gasa-dzong-q4134036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 53 elements; outline osm:way/314180861 historic=(none; chosen by its Wikidata id) Q4134036 17 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bhutan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
