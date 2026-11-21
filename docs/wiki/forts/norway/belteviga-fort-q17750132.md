# Belteviga Fort

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belteviga-fort-q17750132` |
| Coordinates | 58.06365, 7.98306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.06365/7.98306)) |
| Wikidata | [Q17750132](https://www.wikidata.org/wiki/Q17750132) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Kristiansand Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 37 elements (outline 1, road 15, coastline 7, water 7, waterway 2, building 5).

Evidence: documented 0, mapped 37, inferred 0, derived 4; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/399701958 historic=ruins 530 m from ledger point
- island ring (10571 m2) cut out of sea-0
- island ring (2775 m2) cut out of sea-0
- island ring (1140 m2) cut out of sea-0
- origin moved 529 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":359,"medianInside":0,"medianOutside":2.8}
- sea-1: DEM check ok {"cells":388,"medianInside":0.1,"medianOutside":3.3}
- sea-2: DEM check ok {"cells":398,"medianInside":0.1,"medianOutside":2.9}
- sea-3: DEM check ok {"cells":276,"medianInside":0,"medianOutside":4.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.06365/7.98306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=2; wikidata:Q17750132 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 37 elements); data/traces/belteviga-fort-q17750132.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
