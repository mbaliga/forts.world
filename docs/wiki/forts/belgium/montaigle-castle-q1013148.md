# Montaigle Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `montaigle-castle-q1013148` |
| Coordinates | 50.29325, 4.8157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.29325/4.8157)) |
| Wikidata | [Q1013148](https://www.wikidata.org/wiki/Q1013148) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|ruins\|château |
| Administrative area | Onhaye |
| Inception | C3;C1 |
| Designations | Exceptional heritage property of Wallonia\|protected heritage property in Wallonia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `description` | Château visitable |
| OSM `website` | https://chateau-fort-de-montaigle.be/ |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, marker 1, road 35, zone 18, water 2, waterway 4, building 18, cliff 6, wall 7).

Evidence: documented 0, mapped 92, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112567260 historic=castle Q1013148 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.29325/4.8157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|ruins\|château; sitelinks=5; wikidata:Q1013148 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/montaigle-castle-q1013148.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
