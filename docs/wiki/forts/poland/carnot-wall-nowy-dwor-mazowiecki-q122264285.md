# Carnot wall, Nowy Dwór Mazowiecki

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carnot-wall-nowy-dwor-mazowiecki-q122264285` |
| Coordinates | 52.43837, 20.69226 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.43837/20.69226)) |
| Wikidata | [Q122264285](https://www.wikidata.org/wiki/Q122264285) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Nowy Dwór Mazowiecki |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `location-only`, 333 elements (marker 4, water 1, road 240, zone 35, wall 26, building 102, waterway 2, retaining-wall 13).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 24, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11083177 historic=fort Q47796 1072 m from ledger point
- site is a site relation of 37 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (15591 x 15392 m)
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.43837/20.69226) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=0; wikidata:Q122264285 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/carnot-wall-nowy-dwor-mazowiecki-q122264285.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
