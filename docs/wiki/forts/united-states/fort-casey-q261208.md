# Fort Casey

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-casey-q261208` |
| Coordinates | 48.16444, -122.67806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.16444/-122.67806)) |
| Wikidata | [Q261208](https://www.wikidata.org/wiki/Q261208) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Island County |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 46 elements (outline 1, coastline 2, road 22, building 16, retaining-wall 2, cliff 2, water 1).

Evidence: documented 0, mapped 46, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/837521273 historic=yes 429 m from ledger point
- origin moved 430 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":179,"medianInside":0.2,"medianOutside":7.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.16444/-122.67806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q261208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 46 elements); data/traces/fort-casey-q261208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
