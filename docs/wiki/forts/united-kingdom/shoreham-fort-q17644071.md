# Shoreham Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shoreham-fort-q17644071` |
| Coordinates | 50.8274, -0.25005 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8274/-0.25005)) |
| Wikidata | [Q17644071](https://www.wikidata.org/wiki/Q17644071) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Adur |
| Inception | 1857 |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, waterway 1, road 40, wall 12, building 79, coastline 4, retaining-wall 1, water 3).

Evidence: documented 0, mapped 141, inferred 0, derived 3; heights documented 15, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31525422 historic=fort Q17644071 2 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":32,"medianInside":-1,"medianOutside":2.8}
- sea-1: DEM check ok {"cells":180,"medianInside":-1.1,"medianOutside":5.4}
- sea-2: DEM check failed {"cells":440,"medianInside":1.7,"medianOutside":1.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8274/-0.25005) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q17644071 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/shoreham-fort-q17644071.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
