# Fort Campbell

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-campbell-q19688283` |
| Coordinates | 35.96375, 14.39047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.96375/14.39047)) |
| Wikidata | [Q19688283](https://www.wikidata.org/wiki/Q19688283) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Mellieħa |
| Inception | 1937 |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `description` | De Redin Tower |

## What the model contains

Tier **T1**, status `outline+walls`, 12 elements (outline 1, road 3, cliff 1, coastline 1, wall 2, zone 1, building 1, water 2).

Evidence: documented 0, mapped 12, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406046390 historic=ruins 659 m from ledger point
- origin moved 659 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":9,"medianInside":0.6,"medianOutside":24.8}
- sea-1: DEM check ok {"cells":44,"medianInside":0.4,"medianOutside":29.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.96375/14.39047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q19688283 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 12 elements); data/traces/fort-campbell-q19688283.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
