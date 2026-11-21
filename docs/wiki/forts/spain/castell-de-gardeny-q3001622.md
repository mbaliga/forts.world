# Castell de Gardeny

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-gardeny-q3001622` |
| Coordinates | 41.6086, 0.615 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.6086/0.615)) |
| Wikidata | [Q3001622](https://www.wikidata.org/wiki/Q3001622) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lleida |
| Inception | 1200 |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, road 105, wall 10, building 78, retaining-wall 2).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 1, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/711068041 historic=castle Q3001622 15 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.6086/0.615) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q3001622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/castell-de-gardeny-q3001622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
