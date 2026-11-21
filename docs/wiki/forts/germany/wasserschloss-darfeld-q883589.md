# Wasserschloss Darfeld

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserschloss-darfeld-q883589` |
| Coordinates | 52.02074, 7.26173 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.02074/7.26173)) |
| Wikidata | [Q883589](https://www.wikidata.org/wiki/Q883589) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Rosendahl |
| Inception | 1612 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-darfeld.de/index.html |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, marker 1, road 25, zone 9, water 1, building 10, waterway 3, wall 1).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/38483728 historic=castle Q883589 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.02074/7.26173) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=7; wikidata:Q883589 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/wasserschloss-darfeld-q883589.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
