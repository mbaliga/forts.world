# Jagdschloss Niederwald

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jagdschloss-niederwald-q1678363` |
| Coordinates | 49.98561, 7.88269 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.98561/7.88269)) |
| Wikidata | [Q1678363](https://www.wikidata.org/wiki/Q1678363) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|hunting lodge |
| Administrative area | Rüdesheim am Rhein |
| Inception | 1929 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 2 |
| OSM `website` | https://www.niederwald.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 64 elements (outline 1, marker 1, road 47, building 7, zone 8).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/198033054 historic=(none; chosen by its Wikidata id) Q1678363 14 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.98561/7.88269) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|hunting lodge; sitelinks=2; wikidata:Q1678363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 64 elements); data/traces/jagdschloss-niederwald-q1678363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 64 elements; outline osm:way/198033054 historic=(none; chosen by its Wikidata id) Q1678363 14 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
