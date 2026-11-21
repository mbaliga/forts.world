# Burg Altpernstein

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-altpernstein-q261253` |
| Coordinates | 47.885, 14.1567 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.885/14.1567)) |
| Wikidata | [Q261253](https://www.wikidata.org/wiki/Q261253) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Micheldorf in Oberösterreich |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://ww.burgaltpernstein.at |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, marker 1, road 42, building 15, zone 5, cliff 2, wall 1).

Evidence: documented 0, mapped 67, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6120131 historic=castle Q261253 20 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.885/14.1567) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q261253 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/burg-altpernstein-q261253.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
