# Château du Wineck

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-wineck-q1014628` |
| Coordinates | 48.10924, 7.27814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.10924/7.27814)) |
| Wikidata | [Q1014628](https://www.wikidata.org/wiki/Q1014628) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Katzenthal |
| Inception | 1200 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 173 elements (outline 1, road 25, building 142, wall 1, waterway 2, zone 2).

Evidence: documented 0, mapped 173, inferred 0, derived 0; heights documented 0, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1299449559 historic=castle Q1014628 7 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.10924/7.27814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1014628 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 173 elements); data/traces/chateau-du-wineck-q1014628.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
