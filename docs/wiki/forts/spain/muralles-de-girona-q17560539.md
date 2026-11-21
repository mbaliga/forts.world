# Muralles de Girona

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralles-de-girona-q17560539` |
| Coordinates | 41.9849, 2.82882 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.9849/2.82882)) |
| Wikidata | [Q17560539](https://www.wikidata.org/wiki/Q17560539) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Girona |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 3, road 201, wall 14, building 63, retaining-wall 24, zone 3).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 2, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1019283 historic=citywalls 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.9849/2.82882) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=5; wikidata:Q17560539 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/muralles-de-girona-q17560539.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
