# Sutton Martello Tower

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sutton-martello-tower-q122847649` |
| Coordinates | 53.36935, -6.09603 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.36935/-6.09603)) |
| Wikidata | [Q122847649](https://www.wikidata.org/wiki/Q122847649) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | County Dublin |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 186 elements (outline 1, road 40, coastline 1, building 142, zone 1, water 1).

Evidence: documented 0, mapped 186, inferred 0, derived 1; heights documented 15, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13645726 historic=yes 1368 m from ledger point
- origin moved 917 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":21,"medianInside":6.2,"medianOutside":35}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.36935/-6.09603) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=1; wikidata:Q122847649 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 186 elements); data/traces/sutton-martello-tower-q122847649.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
