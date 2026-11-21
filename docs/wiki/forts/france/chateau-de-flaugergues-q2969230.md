# Château de Flaugergues

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-flaugergues-q2969230` |
| Coordinates | 43.61014, 3.91928 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.61014/3.91928)) |
| Wikidata | [Q2969230](https://www.wikidata.org/wiki/Q2969230) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Montpellier |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.flaugergues.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, road 92, building 84, zone 11, wall 1).

Evidence: documented 0, mapped 189, inferred 0, derived 0; heights documented 71, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7677567 historic=castle Q2969230 8 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.61014/3.91928) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=5; wikidata:Q2969230 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/chateau-de-flaugergues-q2969230.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
