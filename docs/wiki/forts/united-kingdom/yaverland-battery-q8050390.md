# Yaverland Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yaverland-battery-q8050390` |
| Coordinates | 50.6638, -1.13068 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6638/-1.13068)) |
| Wikidata | [Q8050390](https://www.wikidata.org/wiki/Q8050390) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Sandown |
| Inception | 1861 |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `description` | Overgrown ruin |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 1, road 29, cliff 1, building 174, coastline 2, wall 3, water 1).

Evidence: documented 0, mapped 212, inferred 0, derived 1; heights documented 0, inferred 0, unknown 177.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/513511722 historic=ruins Q8050390 30 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":132,"medianInside":0.8,"medianOutside":23.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6638/-1.13068) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q8050390 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/yaverland-battery-q8050390.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
