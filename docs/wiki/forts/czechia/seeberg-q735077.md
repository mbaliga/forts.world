# Seeberg

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `seeberg-q735077` |
| Coordinates | 50.1319, 12.2823 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1319/12.2823)) |
| Wikidata | [Q735077](https://www.wikidata.org/wiki/Q735077) (CC0) |
| Wikidata class | castle |
| Types | castle\|hillfort |
| Administrative area | Ostroh |
| Inception | 1200 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `website` | https://www.hrad-seeberg.cz/cz/o-hradu/ |

## What the model contains

Tier **T1**, status `outline-only`, 98 elements (outline 1, marker 4, road 21, water 2, zone 10, waterway 6, building 54).

Evidence: documented 0, mapped 98, inferred 0, derived 0; heights documented 23, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112504726 historic=castle Q735077 23 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1319/12.2823) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hillfort; sitelinks=6; wikidata:Q735077 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 98 elements); data/traces/seeberg-q735077.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
