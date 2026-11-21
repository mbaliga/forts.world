# Fort Moultrie

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-moultrie-q1438645` |
| Coordinates | 32.75939, -79.85779 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.75939/-79.85779)) |
| Wikidata | [Q1438645](https://www.wikidata.org/wiki/Q1438645) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Sullivan's Island |
| Wikipedia language editions | 11 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 135 elements (outline 1, marker 19, road 62, building 42, wall 5, coastline 1, water 2, waterway 1, zone 2).

Evidence: documented 0, mapped 135, inferred 0, derived 1; heights documented 0, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/922853119 historic=fort 39 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":59,"medianInside":0.9,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.75939/-79.85779) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=11; wikidata:Q1438645 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 135 elements); data/traces/fort-moultrie-q1438645.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
