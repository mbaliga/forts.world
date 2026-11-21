# Mosede Fort

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mosede-fort-q6915594` |
| Coordinates | 55.56399, 12.27477 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.56399/12.27477)) |
| Wikidata | [Q6915594](https://www.wikidata.org/wiki/Q6915594) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Greve Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `website` | https://www.danmark1914-18.dk/Mosede%20Fort.aspx |

## What the model contains

Tier **T1**, status `outline-only`, 127 elements (outline 1, road 57, building 65, zone 2, coastline 1, water 1).

Evidence: documented 0, mapped 127, inferred 0, derived 1; heights documented 1, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/425763096 historic=fort Q6915594 38 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":186,"medianInside":-1,"medianOutside":6.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.56399/12.27477) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=4; wikidata:Q6915594 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 127 elements); data/traces/mosede-fort-q6915594.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
