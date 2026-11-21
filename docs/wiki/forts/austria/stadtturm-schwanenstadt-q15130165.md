# Stadtturm Schwanenstadt

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtturm-schwanenstadt-q15130165` |
| Coordinates | 48.05426, 13.77259 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.05426/13.77259)) |
| Wikidata | [Q15130165](https://www.wikidata.org/wiki/Q15130165) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate\|city tower |
| Administrative area | Schwanenstadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 348 elements (outline 1, marker 1, road 112, building 225, waterway 6, zone 3).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 9, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/137552363 historic=(none; chosen by its Wikidata id) Q15130165 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.05426/13.77259) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate\|city tower; sitelinks=2; wikidata:Q15130165 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 347 elements); data/traces/stadtturm-schwanenstadt-q15130165.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 348 elements; outline osm:way/137552363 historic=(none; chosen by its Wikidata id) Q15130165 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
