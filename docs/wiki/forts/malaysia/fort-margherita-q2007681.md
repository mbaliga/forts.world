# Fort Margherita

> Malaysia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-margherita-q2007681` |
| Coordinates | 1.56056, 110.34944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/1.56056/110.34944)) |
| Wikidata | [Q2007681](https://www.wikidata.org/wiki/Q2007681) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kuching |
| Inception | 1879 |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `castle_type` | fortification |
| OSM `website` | https://www.brookegallery.org/ |

## What the model contains

Tier **T1**, status `outline-only`, 47 elements (outline 1, road 42, waterway 1, building 3).

Evidence: documented 0, mapped 47, inferred 0, derived 0; heights documented 1, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12489078 historic=fort Q2007681 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/1.56056/110.34944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=9; wikidata:Q2007681 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 47 elements); data/traces/fort-margherita-q2007681.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malaysia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
