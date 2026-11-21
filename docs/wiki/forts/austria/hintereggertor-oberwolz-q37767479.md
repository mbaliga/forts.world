# Hintereggertor Oberwölz

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hintereggertor-oberwolz-q37767479` |
| Coordinates | 47.20326, 14.28034 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.20326/14.28034)) |
| Wikidata | [Q37767479](https://www.wikidata.org/wiki/Q37767479) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Oberwölz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 2, road 80, building 253, wall 5, zone 12, waterway 4, retaining-wall 1).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 1, inferred 0, unknown 258.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/209043642 historic=(none; chosen by its Wikidata id) Q37767479 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.20326/14.28034) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q37767479 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 359 elements); data/traces/hintereggertor-oberwolz-q37767479.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 358 elements; outline osm:way/209043642 historic=(none; chosen by its Wikidata id) Q37767479 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
