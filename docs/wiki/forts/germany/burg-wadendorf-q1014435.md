# Burg Wadendorf

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-wadendorf-q1014435` |
| Coordinates | 49.89745, 11.32721 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.89745/11.32721)) |
| Wikidata | [Q1014435](https://www.wikidata.org/wiki/Q1014435) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Plankenfels |
| Inception | 1453 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 94 elements (outline 1, road 17, waterway 5, zone 6, water 1, building 64).

Evidence: documented 0, mapped 94, inferred 0, derived 0; heights documented 0, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/520350853 historic=(none; chosen by its Wikidata id) Q1014435 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.89745/11.32721) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=2; wikidata:Q1014435 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 95 elements); data/traces/burg-wadendorf-q1014435.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 94 elements; outline osm:way/520350853 historic=(none; chosen by its Wikidata id) Q1014435 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
