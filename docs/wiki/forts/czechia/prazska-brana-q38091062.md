# Pražská brána

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prazska-brana-q38091062` |
| Coordinates | 50.10364, 13.73439 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.10364/13.73439)) |
| Wikidata | [Q38091062](https://www.wikidata.org/wiki/Q38091062) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|gate tower |
| Administrative area | Rakovník |
| Inception | 1516 |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 11, road 188, building 383, water 1, wall 6, waterway 1, zone 36, retaining-wall 3).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 67, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114116015 historic=city_gate Q38091062 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 383 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.10364/13.73439) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|gate tower; sitelinks=2; wikidata:Q38091062 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 327 elements); data/traces/prazska-brana-q38091062.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 329 elements; outline osm:way/114116015 historic=city_gate Q38091062 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
