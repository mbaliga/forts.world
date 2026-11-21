# Vysoká brána

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vysoka-brana-q16963194` |
| Coordinates | 50.10587, 13.73188 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.10587/13.73188)) |
| Wikidata | [Q16963194](https://www.wikidata.org/wiki/Q16963194) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|gate tower |
| Administrative area | Rakovník I |
| Inception | 1600 |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 10, road 232, building 471, wall 27, waterway 1, zone 41, retaining-wall 7).

Evidence: documented 0, mapped 357, inferred 0, derived 0; heights documented 59, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1592829 historic=city_gate Q16963194 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 471 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 232 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.10587/13.73188) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|gate tower; sitelinks=2; wikidata:Q16963194 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 356 elements); data/traces/vysoka-brana-q16963194.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 357 elements; outline osm:relation/1592829 historic=city_gate Q16963194 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
