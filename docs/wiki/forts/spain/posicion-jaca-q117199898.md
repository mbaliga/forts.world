# Posición Jaca

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `posicion-jaca-q117199898` |
| Coordinates | 40.45697, -3.59554 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.45697/-3.59554)) |
| Wikidata | [Q117199898](https://www.wikidata.org/wiki/Q117199898) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Madrid |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 222 elements (outline 1, marker 4, road 144, wall 7, building 58, waterway 1, water 5, zone 2).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 0, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33721644 historic=castle Q53099051 32 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.45697/-3.59554) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q117199898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 222 elements); data/traces/posicion-jaca-q117199898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
