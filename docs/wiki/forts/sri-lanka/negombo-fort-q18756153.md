# Negombo Fort

> Sri Lanka · Negombo · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `negombo-fort-q18756153` |
| Coordinates | 7.208333, 79.830556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/7.208333/79.830556)) |
| Wikidata | [Q18756153](https://www.wikidata.org/wiki/Q18756153) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Negombo |
| Inception | 1672 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 7 |
| Programme catalogue | confidence medium, significance rank 3285; sources wikidata:Q18756153 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 171 elements (outline 1, marker 1, coastline 4, road 41, building 369, water 4).

Evidence: documented 0, mapped 171, inferred 0, derived 4; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/196057979 historic=archaeological_site 116 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 369 mapped (trace size budget); the rest of the town is not drawn
- origin moved 120 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2813,"medianInside":5.6,"medianOutside":6.6}
- sea-1: DEM check ok {"cells":298,"medianInside":1.6,"medianOutside":6}
- sea-2: DEM check ok {"cells":6,"medianInside":3.1,"medianOutside":5.7}
- sea-3: DEM check ok {"cells":687,"medianInside":5,"medianOutside":5.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/7.208333/79.830556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=3285; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 171 elements); data/traces/negombo-fort-q18756153.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
