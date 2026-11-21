# Baħar iċ-Ċagħaq Redoubt

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ba-ar-ic-cag-aq-redoubt-q20635382` |
| Coordinates | 35.93986, 14.45581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.93986/14.45581)) |
| Wikidata | [Q20635382](https://www.wikidata.org/wiki/Q20635382) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Naxxar |
| Inception | 1715 |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 21 elements (outline 1, road 15, coastline 1, building 1, water 3).

Evidence: documented 0, mapped 21, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406036898 historic=ruins Q20949697 604 m from ledger point
- origin moved 606 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":67,"medianInside":0,"medianOutside":4.3}
- sea-1: DEM check ok {"cells":1,"medianInside":-0.1,"medianOutside":3.7}
- sea-2: DEM check ok {"cells":27,"medianInside":0.1,"medianOutside":3.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.93986/14.45581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=3; wikidata:Q20635382 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 21 elements); data/traces/ba-ar-ic-cag-aq-redoubt-q20635382.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
