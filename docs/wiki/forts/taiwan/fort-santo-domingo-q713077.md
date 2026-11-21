# Fort Santo Domingo

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-santo-domingo-q713077` |
| Coordinates | 25.175, 121.433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.175/121.433)) |
| Wikidata | [Q713077](https://www.wikidata.org/wiki/Q713077) (CC0) |
| Wikidata class | fort |
| Types | fort\|historic site |
| Administrative area | Tamsui District |
| Inception | 1644 |
| Designations | country-level monument |
| Wikipedia language editions | 12 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 83 elements (outline 1, waterway 3, road 32, building 35, wall 5, water 1, zone 6).

Evidence: documented 0, mapped 83, inferred 0, derived 0; heights documented 3, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3986680 historic=fort Q713077 43 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.175/121.433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|historic site; sitelinks=12; wikidata:Q713077 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 83 elements); data/traces/fort-santo-domingo-q713077.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
