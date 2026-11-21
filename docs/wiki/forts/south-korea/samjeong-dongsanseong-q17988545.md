# Samjeong Dongsanseong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `samjeong-dongsanseong-q17988545` |
| Coordinates | 36.32222, 127.46778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.32222/127.46778)) |
| Wikidata | [Q17988545](https://www.wikidata.org/wiki/Q17988545) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Designations | Monuments of Daejeon Metropolitan City |
| Wikipedia language editions | 1 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 9 elements (outline 1, road 7).

Evidence: documented 0, mapped 9, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1500211770 historic=(none; chosen by its Wikidata id) Q17988545 116 m from ledger point
- origin moved 120 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.32222/127.46778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=1; wikidata:Q17988545 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/samjeong-dongsanseong-q17988545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 9 elements; outline osm:way/1500211770 historic=(none; chosen by its Wikidata id) Q17988545 116 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
