# Angerja Castle

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `angerja-castle-q12359231` |
| Coordinates | 59.17526, 24.85585 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.17526/24.85585)) |
| Wikidata | [Q12359231](https://www.wikidata.org/wiki/Q12359231) (CC0) |
| Wikidata class | castle |
| Types | vassal castle |
| Administrative area | Kohila Rural Municipality |
| Designations | architectural monument |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, road 7, zone 3, building 22, waterway 1, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 0; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1346380252 historic=(none; chosen by its Wikidata id) Q12359231 9 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.17526/24.85585) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; vassal castle; sitelinks=3; wikidata:Q12359231 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 35 elements); data/traces/angerja-castle-q12359231.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 35 elements; outline osm:way/1346380252 historic=(none; chosen by its Wikidata id) Q12359231 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
