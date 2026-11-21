# Schloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-q1534027` |
| Coordinates | 50.1867, 11.8476 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1867/11.8476)) |
| Wikidata | [Q1534027](https://www.wikidata.org/wiki/Q1534027) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Weißdorf |
| Inception | 1364 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 116 elements (outline 1, road 26, waterway 1, zone 8, building 80).

Evidence: documented 0, mapped 116, inferred 0, derived 0; heights documented 1, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220256038 historic=(none; chosen by its Wikidata id) Q1534027 13 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1867/11.8476) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q1534027 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 126 elements); data/traces/schloss-q1534027.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 116 elements; outline osm:way/220256038 historic=(none; chosen by its Wikidata id) Q1534027 13 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
