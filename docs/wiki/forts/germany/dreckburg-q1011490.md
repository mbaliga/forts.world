# Dreckburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dreckburg-q1011490` |
| Coordinates | 51.6746, 8.62197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.6746/8.62197)) |
| Wikidata | [Q1011490](https://www.wikidata.org/wiki/Q1011490) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor house |
| Administrative area | Salzkotten |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `website` | http://www.dreckburg.de |

## What the model contains

Tier **T1**, status `outline-only`, 210 elements (outline 1, road 90, building 106, waterway 5, zone 7, water 1).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 6, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/75238149 historic=castle Q1011490 9 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.6746/8.62197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor house; sitelinks=2; wikidata:Q1011490 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 210 elements); data/traces/dreckburg-q1011490.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
