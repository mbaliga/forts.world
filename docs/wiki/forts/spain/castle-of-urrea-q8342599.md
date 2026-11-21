# Castle of Urrea

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-urrea-q8342599` |
| Coordinates | 40.13934, -0.27927 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.13934/-0.27927)) |
| Wikidata | [Q8342599](https://www.wikidata.org/wiki/Q8342599) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lucena del Cid |
| Designations | Property of Local Relevance\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `description` | Muralla de la guerra carlina |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, marker 1, road 150, zone 1, building 69, waterway 2, wall 1, retaining-wall 2).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 0, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1194942868 historic=citywalls 197 m from ledger point
- origin moved 197 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.13934/-0.27927) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q8342599 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/castle-of-urrea-q8342599.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
