# Menkemaborg

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `menkemaborg-q2665541` |
| Coordinates | 53.40493, 6.68389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.40493/6.68389)) |
| Wikidata | [Q2665541](https://www.wikidata.org/wiki/Q2665541) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building\|borg |
| Administrative area | Eemsmond |
| Inception | 1614 |
| Designations | Rijksmonument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.menkemaborg.nl |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, road 75, zone 44, water 8, waterway 8, building 7, wall 2).

Evidence: documented 0, mapped 145, inferred 0, derived 0; heights documented 2, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/278296097 historic=castle Q2665541 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.40493/6.68389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building\|borg; sitelinks=6; wikidata:Q2665541 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/menkemaborg-q2665541.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
