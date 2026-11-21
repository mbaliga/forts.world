# Fortrose

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortrose-q1010212` |
| Coordinates | 57.5815, -4.13237 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.5815/-4.13237)) |
| Wikidata | [Q1010212](https://www.wikidata.org/wiki/Q1010212) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Highland |
| Inception | 1444 |
| Wikipedia language editions | 17 |
| OSM `historic` | ruins |
| OSM `website` | https://www.historicenvironment.scot/visit-a-place/places/fortrose-cathedral/ |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 2, road 61, building 211, coastline 1, zone 2, wall 1, water 1).

Evidence: documented 0, mapped 280, inferred 0, derived 1; heights documented 17, inferred 0, unknown 195.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/315886509 historic=ruins Q2687812 134 m from ledger point
- origin moved 136 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":32,"medianInside":9.8,"medianOutside":25.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.5815/-4.13237) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=17; wikidata:Q1010212 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/fortrose-q1010212.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
