# Masnedø Fort

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `masned-fort-q12326362` |
| Coordinates | 54.98695, 11.88192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.98695/11.88192)) |
| Wikidata | [Q12326362](https://www.wikidata.org/wiki/Q12326362) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Vordingborg Municipality |
| Inception | 1915 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 84 elements (outline 1, coastline 1, road 31, zone 4, building 43, retaining-wall 2, cliff 1, water 1).

Evidence: documented 0, mapped 84, inferred 0, derived 1; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/373174751 historic=fort Q12326362 40 m from ledger point
- origin moved 47 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":191,"medianInside":-2,"medianOutside":1.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.98695/11.88192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q12326362 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 84 elements); data/traces/masned-fort-q12326362.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
