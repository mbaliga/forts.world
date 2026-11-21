# Coastal Defense Battery 10b

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coastal-defense-battery-10b-q116739409` |
| Coordinates | 59.59298, 24.5025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.59298/24.5025)) |
| Wikidata | [Q116739409](https://www.wikidata.org/wiki/Q116739409) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Viimsi Rural Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, coastline 1, road 5, building 1, water 1).

Evidence: documented 0, mapped 9, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/224961242 historic=fort 26 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":25.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.59298/24.5025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=1; wikidata:Q116739409 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/coastal-defense-battery-10b-q116739409.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
