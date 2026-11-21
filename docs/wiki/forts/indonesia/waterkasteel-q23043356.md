# Waterkasteel

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `waterkasteel-q23043356` |
| Coordinates | -6.1162, 106.8066 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-6.1162/106.8066)) |
| Wikidata | [Q23043356](https://www.wikidata.org/wiki/Q23043356) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Batavia |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 70 elements (outline 1, road 11, building 53, coastline 1, waterway 3, water 1).

Evidence: documented 0, mapped 70, inferred 0, derived 1; heights documented 0, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1444315259 historic=ruins 570 m from ledger point
- origin moved 571 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":199,"medianInside":1.1,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-6.1162/106.8066) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q23043356 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 70 elements); data/traces/waterkasteel-q23043356.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
