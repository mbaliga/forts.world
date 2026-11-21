# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q41382839` |
| Coordinates | 49.72578, 9.999 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.72578/9.999)) |
| Wikidata | [Q41382839](https://www.wikidata.org/wiki/Q41382839) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Eibelstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 377 elements (outline 1, marker 1, road 81, waterway 2, wall 7, building 279, zone 6).

Evidence: documented 0, mapped 377, inferred 0, derived 0; heights documented 5, inferred 0, unknown 281.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384305119 historic=city_gate Q41382839 0 m from ledger point
- 410 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.72578/9.999) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q41382839 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 377 elements); data/traces/stadttor-q41382839.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 377 elements; outline osm:way/384305119 historic=city_gate Q41382839 0 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
