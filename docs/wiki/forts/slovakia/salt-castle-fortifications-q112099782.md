# Salt castle, fortifications

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `salt-castle-fortifications-q112099782` |
| Coordinates | 48.97489, 21.26794 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.97489/21.26794)) |
| Wikidata | [Q112099782](https://www.wikidata.org/wiki/Q112099782) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Prešov |
| Inception | 1700 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 2, road 88, zone 2, waterway 1, building 228, wall 4).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 0, inferred 0, unknown 233.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1204678355 historic=citywalls Q112099782 10 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.97489/21.26794) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q112099782 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/salt-castle-fortifications-q112099782.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
