# Rigomagus

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rigomagus-q3431966` |
| Coordinates | 50.5796, 7.22736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.5796/7.22736)) |
| Wikidata | [Q3431966](https://www.wikidata.org/wiki/Q3431966) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|castellum\|archaeological site |
| Administrative area | Rhineland-Palatinate |
| Designations | part of UNESCO World Heritage Site\|Kulturdenkmal |
| UNESCO WHC id | 1631-102 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 288 elements (marker 11, road 139, building 309, waterway 1, zone 4, wall 6, retaining-wall 7).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 15, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 309 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.5796/7.22736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|castellum\|archaeological site; sitelinks=3; wikidata:Q3431966 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 288 elements); data/traces/rigomagus-q3431966.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
