# Fort Severn

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-severn-q5472013` |
| Coordinates | 38.9818, -76.4812 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.9818/-76.4812)) |
| Wikidata | [Q5472013](https://www.wikidata.org/wiki/Q5472013) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Annapolis |
| Inception | 1808 |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 392 elements (outline 1, marker 3, road 124, coastline 3, building 257, waterway 2, wall 1, water 1).

Evidence: documented 0, mapped 392, inferred 0, derived 1; heights documented 98, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89384962 historic=building Q4965853 591 m from ledger point
- origin moved 591 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":0.3,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.9818/-76.4812) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q5472013 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/fort-severn-q5472013.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
