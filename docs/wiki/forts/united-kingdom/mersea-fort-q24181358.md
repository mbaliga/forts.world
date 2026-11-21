# Mersea Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mersea-fort-q24181358` |
| Coordinates | 51.79674, 1.00343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.79674/1.00343)) |
| Wikidata | [Q24181358](https://www.wikidata.org/wiki/Q24181358) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | East Mersea |
| Inception | 1543 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, road 12, coastline 3, waterway 1, zone 1, water 4).

Evidence: documented 0, mapped 22, inferred 0, derived 4; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34702018 historic=ruins 292 m from ledger point
- origin moved 292 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":371,"medianInside":0.7,"medianOutside":0.7}
- sea-1: DEM check failed {"cells":33,"medianInside":2.4,"medianOutside":0.5}
- sea-2: DEM check ok {"cells":316,"medianInside":0.3,"medianOutside":1.9}
- sea-3: DEM check failed {"cells":394,"medianInside":0.8,"medianOutside":-2.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.79674/1.00343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q24181358 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/mersea-fort-q24181358.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
