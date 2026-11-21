# Schloss Wasserburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-wasserburg-q2243973` |
| Coordinates | 48.24963, 15.7051 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.24963/15.7051)) |
| Wikidata | [Q2243973](https://www.wikidata.org/wiki/Q2243973) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | St. Pölten |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Wasserschloss, exklusiv für Veranstaltungen zu mieten |
| OSM `website` | https://www.schloss-wasserburg.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 101 elements (outline 1, road 31, waterway 5, water 1, zone 5, building 57, wall 1).

Evidence: documented 0, mapped 101, inferred 0, derived 0; heights documented 0, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/65094 historic=castle Q2243973 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.24963/15.7051) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2243973 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 101 elements); data/traces/schloss-wasserburg-q2243973.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
