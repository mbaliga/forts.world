# Stadsgraven

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadsgraven-q3365200` |
| Coordinates | 55.67339, 12.60659 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.67339/12.60659)) |
| Wikidata | [Q3365200](https://www.wikidata.org/wiki/Q3365200) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Copenhagen Municipality |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, road 9, building 3, water 5, coastline 2).

Evidence: documented 0, mapped 20, inferred 0, derived 3; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6881978 historic=yes Q5618528 800 m from ledger point
- origin moved 903 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":173,"medianInside":2.7,"medianOutside":2.8}
- sea-1: DEM check failed {"cells":4,"medianInside":2.8,"medianOutside":2.8}
- sea-2: DEM check ok {"cells":342,"medianInside":2.8,"medianOutside":4.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.67339/12.60659) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=6; wikidata:Q3365200 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/stadsgraven-q3365200.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
