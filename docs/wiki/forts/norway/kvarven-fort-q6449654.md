# Kvarven Fort

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kvarven-fort-q6449654` |
| Coordinates | 60.39661, 5.24098 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.39661/5.24098)) |
| Wikidata | [Q6449654](https://www.wikidata.org/wiki/Q6449654) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Bergen Municipality |
| Inception | 1895 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 119 elements (outline 1, marker 1, coastline 1, road 65, waterway 1, building 23, cliff 3, retaining-wall 21, zone 1, water 2).

Evidence: documented 0, mapped 119, inferred 0, derived 2; heights documented 0, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/10892982 historic=ruins Q6449654 53 m from ledger point
- origin moved 52 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":18,"medianInside":0.2,"medianOutside":76}
- sea-1: DEM check ok {"cells":141,"medianInside":0,"medianOutside":87.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.39661/5.24098) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=5; wikidata:Q6449654 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 119 elements); data/traces/kvarven-fort-q6449654.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
