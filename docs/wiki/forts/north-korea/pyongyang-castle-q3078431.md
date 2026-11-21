# Pyongyang Castle

> North Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pyongyang-castle-q3078431` |
| Coordinates | 39.0235, 125.757 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.0235/125.757)) |
| Wikidata | [Q3078431](https://www.wikidata.org/wiki/Q3078431) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Administrative area | Pyongyang |
| Wikipedia language editions | 9 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 168 elements (outline 1, marker 3, road 67, building 15, zone 74, water 2, wall 6).

Evidence: documented 0, mapped 168, inferred 0, derived 0; heights documented 6, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31647011 historic=monument Q321697 859 m from ledger point
- origin moved 866 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.0235/125.757) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=9; wikidata:Q3078431 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 168 elements); data/traces/pyongyang-castle-q3078431.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/north-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
