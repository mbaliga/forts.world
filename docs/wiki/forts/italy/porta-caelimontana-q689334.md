# Porta Caelimontana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-caelimontana-q689334` |
| Coordinates | 41.8856, 12.4952 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.8856/12.4952)) |
| Wikidata | [Q689334](https://www.wikidata.org/wiki/Q689334) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Inception | 0010 |
| Wikipedia language editions | 17 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 3, road 138, building 60, wall 22, zone 10, retaining-wall 2).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 5, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135618677 historic=archaeological_site Q3457868 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.8856/12.4952) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=17; wikidata:Q689334 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/porta-caelimontana-q689334.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
