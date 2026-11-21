# Fort Charles

> St. Kitts & Nevis · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-charles-q5470906` |
| Coordinates | 17.13285, -62.63328 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.13285/-62.63328)) |
| Wikidata | [Q5470906](https://www.wikidata.org/wiki/Q5470906) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, marker 1, road 1, coastline 2, zone 1, building 14, waterway 1, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60260592 historic=fort Q5470906 94 m from ledger point
- origin moved 91 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":399,"medianInside":0.8,"medianOutside":8}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.13285/-62.63328) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5470906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/fort-charles-q5470906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/st-kitts-nevis.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
