# Menshikov battery

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `menshikov-battery-q4079338` |
| Coordinates | 59.98167, 29.7575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.98167/29.7575)) |
| Wikidata | [Q4079338](https://www.wikidata.org/wiki/Q4079338) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kronstadt |
| Wikipedia language editions | 2 |
| OSM `historic` | fortification |
| OSM `fortification_type` | battery |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, coastline 5, water 2).

Evidence: documented 0, mapped 8, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/359372164 historic=fortification 36 m from ledger point
- origin moved 35 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":380,"medianInside":2,"medianOutside":1.5}
- sea-1: DEM check failed {"cells":400,"medianInside":2,"medianOutside":1.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.98167/29.7575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q4079338 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 8 elements); data/traces/menshikov-battery-q4079338.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
