# Flörsheimer Warte

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `florsheimer-warte-q96233698` |
| Coordinates | 50.01991, 8.40364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.01991/8.40364)) |
| Wikidata | [Q96233698](https://www.wikidata.org/wiki/Q96233698) (CC0) |
| Wikidata class | fortification |
| Types | medieval watchtower |
| Administrative area | Flörsheim am Main |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, road 25, building 4, zone 12, wall 1).

Evidence: documented 0, mapped 43, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123006084 historic=(none; chosen by its Wikidata id) Q96233698 0 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.01991/8.40364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; medieval watchtower; sitelinks=2; wikidata:Q96233698 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 43 elements); data/traces/florsheimer-warte-q96233698.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 43 elements; outline osm:way/123006084 historic=(none; chosen by its Wikidata id) Q96233698 0 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
