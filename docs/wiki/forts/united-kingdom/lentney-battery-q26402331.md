# Lentney Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lentney-battery-q26402331` |
| Coordinates | 50.32508, -4.11828 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.32508/-4.11828)) |
| Wikidata | [Q26402331](https://www.wikidata.org/wiki/Q26402331) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Wembury |
| Inception | 1905 |
| Designations | Grade II listed building |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, road 13, coastline 1, building 10, waterway 1, retaining-wall 2, zone 2, water 2).

Evidence: documented 0, mapped 32, inferred 0, derived 2; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/859964809 historic=fort 389 m from ledger point
- origin moved 389 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":2,"medianOutside":43.8}
- sea-1: DEM check ok {"cells":2,"medianInside":2.8,"medianOutside":43.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.32508/-4.11828) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q26402331 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/lentney-battery-q26402331.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
