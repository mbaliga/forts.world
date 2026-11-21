# Schloss Greinburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-greinburg-q2241286` |
| Coordinates | 48.2264, 14.8531 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.2264/14.8531)) |
| Wikidata | [Q2241286](https://www.wikidata.org/wiki/Q2241286) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Grein |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-greinburg.at/ |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, marker 2, road 107, building 82, wall 8, zone 1, waterway 2).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 2, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1762894 historic=castle Q2241286 21 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.2264/14.8531) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2241286 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/schloss-greinburg-q2241286.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
