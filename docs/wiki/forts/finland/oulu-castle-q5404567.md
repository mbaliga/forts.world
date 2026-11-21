# Oulu Castle

> Finland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oulu-castle-q5404567` |
| Coordinates | 65.01722, 25.46722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/65.01722/25.46722)) |
| Wikidata | [Q5404567](https://www.wikidata.org/wiki/Q5404567) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Oulu |
| Inception | 1590 |
| Wikipedia language editions | 7 |

## What the model contains

Tier **T1**, status `location-only`, 233 elements (marker 3, road 168, coastline 9, building 5, waterway 4, zone 37, water 3, wall 4).

Evidence: documented 0, mapped 233, inferred 0, derived 2; heights documented 2, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":391,"medianInside":20,"medianOutside":21.5}
- sea-1: DEM check failed {"cells":169,"medianInside":17.4,"medianOutside":21.6}
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/65.01722/25.46722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q5404567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 233 elements); data/traces/oulu-castle-q5404567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
