# Edirne Gate

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `edirne-gate-q135479137` |
| Coordinates | 41.03018, 28.93542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.03018/28.93542)) |
| Wikidata | [Q135479137](https://www.wikidata.org/wiki/Q135479137) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Karagümrük |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, road 74, zone 4, building 368, wall 3).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32394781 historic=citywalls 879 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 368 mapped (trace size budget); the rest of the town is not drawn
- origin moved 881 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.03018/28.93542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q135479137 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/edirne-gate-q135479137.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
