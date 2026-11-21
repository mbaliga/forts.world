# Château de Trémazan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-tremazan-q1014314` |
| Coordinates | 48.55083, -4.71222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.55083/-4.71222)) |
| Wikidata | [Q1014314](https://www.wikidata.org/wiki/Q1014314) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Landunvez |
| Designations | monument historique inscrit |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 84 elements (outline 1, zone 1, building 52, road 23, coastline 1, water 1, waterway 3, wall 2).

Evidence: documented 0, mapped 84, inferred 0, derived 0; heights documented 0, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106576831 historic=castle Q1014314 18 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.55083/-4.71222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q1014314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 84 elements); data/traces/chateau-de-tremazan-q1014314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
