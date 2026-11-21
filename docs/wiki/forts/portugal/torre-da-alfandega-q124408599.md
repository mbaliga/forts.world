# Torre da Alfândega

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-da-alfandega-q124408599` |
| Coordinates | 41.44136, -8.29501 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.44136/-8.29501)) |
| Wikidata | [Q124408599](https://www.wikidata.org/wiki/Q124408599) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Guimarães |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 6, road 302, building 247, waterway 6, water 1, wall 22, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 33, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/150780884 historic=citywalls 395 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 247 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 302 mapped (trace size budget); minor lanes are not drawn
- origin moved 400 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.44136/-8.29501) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q124408599 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/torre-da-alfandega-q124408599.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
