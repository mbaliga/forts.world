# Château de Mauvezin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-mauvezin-q2969865` |
| Coordinates | 43.11861, 0.27639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.11861/0.27639)) |
| Wikidata | [Q2969865](https://www.wikidata.org/wiki/Q2969865) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mauvezin |
| Inception | 1401 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `website` | https://www.chateaudemauvezin.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, road 16, wall 1, zone 9, building 9).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1493465444 historic=castle Q2969865 22 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.11861/0.27639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q2969865 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/chateau-de-mauvezin-q2969865.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
