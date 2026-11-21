# Château d'Olhain

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-olhain-q2628194` |
| Coordinates | 50.42417, 2.58333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.42417/2.58333)) |
| Wikidata | [Q2628194](https://www.wikidata.org/wiki/Q2628194) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fresnicourt-le-Dolmen |
| Designations | monument historique inscrit |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |
| OSM `website` | http://www.chateau-olhain.com |

## What the model contains

Tier **T1**, status `outline+walls`, 159 elements (outline 1, road 16, water 1, building 134, zone 2, waterway 2, wall 3).

Evidence: documented 0, mapped 159, inferred 0, derived 0; heights documented 0, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1353224515 historic=castle Q2628194 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 36 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.42417/2.58333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2628194 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 159 elements); data/traces/chateau-d-olhain-q2628194.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
