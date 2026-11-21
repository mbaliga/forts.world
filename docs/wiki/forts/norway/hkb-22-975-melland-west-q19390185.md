# HKB 22./975 Melland-West

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hkb-22-975-melland-west-q19390185` |
| Coordinates | 63.66389, 8.30972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/63.66389/8.30972)) |
| Wikidata | [Q19390185](https://www.wikidata.org/wiki/Q19390185) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 117 elements (outline 1, marker 5, coastline 7, road 32, building 34, water 36, zone 2).

Evidence: documented 0, mapped 117, inferred 0, derived 4; heights documented 0, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1288541044 historic=yes 42 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":400,"medianInside":5.9,"medianOutside":4.8}
- sea-1: DEM check failed {"cells":393,"medianInside":5.9,"medianOutside":3.8}
- sea-2: DEM check ok {"cells":111,"medianInside":0,"medianOutside":7.8}
- sea-3: DEM check ok {"cells":8,"medianInside":0.3,"medianOutside":5.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/63.66389/8.30972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q19390185 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 117 elements); data/traces/hkb-22-975-melland-west-q19390185.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
