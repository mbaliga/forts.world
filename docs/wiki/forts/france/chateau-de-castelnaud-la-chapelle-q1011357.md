# Château de Castelnaud-la-Chapelle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-castelnaud-la-chapelle-q1011357` |
| Coordinates | 44.81583, 1.14889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.81583/1.14889)) |
| Wikidata | [Q1011357](https://www.wikidata.org/wiki/Q1011357) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|military museum |
| Administrative area | Castelnaud-la-Chapelle |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://castelnaud.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, marker 4, waterway 2, road 105, building 93, zone 8, wall 9, retaining-wall 1).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 18, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/293819631 historic=castle Q1011357 51 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- 29 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.81583/1.14889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|military museum; sitelinks=20; wikidata:Q1011357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 223 elements); data/traces/chateau-de-castelnaud-la-chapelle-q1011357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
