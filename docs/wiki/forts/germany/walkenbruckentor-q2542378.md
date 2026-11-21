# Walkenbrückentor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walkenbruckentor-q2542378` |
| Coordinates | 51.9471, 7.17248 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9471/7.17248)) |
| Wikidata | [Q2542378](https://www.wikidata.org/wiki/Q2542378) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|prison\|local museum |
| Administrative area | Coesfeld |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 389 elements (outline 1, marker 5, road 144, waterway 22, building 198, zone 5, retaining-wall 6, water 6, wall 2).

Evidence: documented 0, mapped 389, inferred 0, derived 0; heights documented 2, inferred 0, unknown 204.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27528507 historic=city_gate Q2542378 15 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9471/7.17248) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|prison\|local museum; sitelinks=2; wikidata:Q2542378 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 326 elements); data/traces/walkenbruckentor-q2542378.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 389 elements; outline osm:way/27528507 historic=city_gate Q2542378 15 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
