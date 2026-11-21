# Fetteresso Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fetteresso-castle-q1145710` |
| Coordinates | 56.9604, -2.26035 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.9604/-2.26035)) |
| Wikidata | [Q1145710](https://www.wikidata.org/wiki/Q1145710) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aberdeenshire |
| Designations | category B listed building |
| Wikipedia language editions | 6 |
| OSM `historic` | manor |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 29 elements (outline 1, road 14, waterway 2, zone 3, building 9).

Evidence: documented 0, mapped 29, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114845908 historic=manor Q1145710 10 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.9604/-2.26035) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q1145710 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 28 elements); data/traces/fetteresso-castle-q1145710.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 29 elements; outline osm:way/114845908 historic=manor Q1145710 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
