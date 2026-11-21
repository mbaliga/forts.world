# Petit-Wasigenstein

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petit-wasigenstein-q108761817` |
| Coordinates | 49.04788, 7.70143 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.04788/7.70143)) |
| Wikidata | [Q108761817](https://www.wikidata.org/wiki/Q108761817) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Niedersteinbach |
| Inception | 1299 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 64 elements (outline 1, road 41, waterway 5, water 3, building 1, zone 5, cliff 8).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/295970508 historic=castle Q1014505 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.04788/7.70143) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q108761817 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 64 elements); data/traces/petit-wasigenstein-q108761817.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
