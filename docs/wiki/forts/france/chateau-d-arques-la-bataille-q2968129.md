# Château d'Arques-la-Bataille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-arques-la-bataille-q2968129` |
| Coordinates | 49.87724, 1.12705 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.87724/1.12705)) |
| Wikidata | [Q2968129](https://www.wikidata.org/wiki/Q2968129) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Arques-la-Bataille |
| Inception | 1200 |
| Designations | site naturel inscrit\|classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, road 24, waterway 1, building 230, wall 4).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 0, inferred 0, unknown 234.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8514361 historic=castle Q2968129 55 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.87724/1.12705) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2968129 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/chateau-d-arques-la-bataille-q2968129.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
