# Gurnard's Head

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gurnard-s-head-q5620199` |
| Coordinates | 50.19161, -5.59922 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.19161/-5.59922)) |
| Wikidata | [Q5620199](https://www.wikidata.org/wiki/Q5620199) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | Zennor |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 52 elements (outline 1, waterway 5, road 34, zone 4, cliff 2, coastline 3, water 3).

Evidence: documented 0, mapped 52, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1303035553 historic=ruins 517 m from ledger point
- origin moved 517 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":399,"medianInside":1.6,"medianOutside":-2}
- sea-1: DEM check ok {"cells":209,"medianInside":-2.1,"medianOutside":49}
- sea-2: DEM check failed {"cells":400,"medianInside":1.6,"medianOutside":-2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.19161/-5.59922) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=4; wikidata:Q5620199 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 52 elements); data/traces/gurnard-s-head-q5620199.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
