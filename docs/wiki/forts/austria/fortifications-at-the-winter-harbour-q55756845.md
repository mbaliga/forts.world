# Fortifications At The Winter Harbour

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-at-the-winter-harbour-q55756845` |
| Coordinates | 48.32021, 14.30529 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.32021/14.30529)) |
| Wikidata | [Q55756845](https://www.wikidata.org/wiki/Q55756845) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Linz |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, water 3, zone 75, road 298, building 85, waterway 2, wall 9, retaining-wall 15).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 21, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106755177 historic=(none; chosen by its Wikidata id) Q55756845 31 m from ledger point
- roads capped: kept the 150 longest of 298 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.32021/14.30529) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q55756845 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 381 elements); data/traces/fortifications-at-the-winter-harbour-q55756845.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 340 elements; outline osm:way/106755177 historic=(none; chosen by its Wikidata id) Q55756845 31 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
