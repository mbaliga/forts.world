# Bastioncello

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastioncello-q113562791` |
| Coordinates | 37.56238, 15.16067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.56238/15.16067)) |
| Wikidata | [Q113562791](https://www.wikidata.org/wiki/Q113562791) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Aci Castello |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 222 elements (marker 2, road 77, zone 1, building 317, wall 15, coastline 1, retaining-wall 3, water 3).

Evidence: documented 0, mapped 222, inferred 0, derived 3; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 317 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":5,"medianInside":0,"medianOutside":16.6}
- sea-1: DEM check ok {"cells":51,"medianInside":0.2,"medianOutside":18.5}
- sea-2: DEM check failed {"cells":400,"medianInside":16.8,"medianOutside":0.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.56238/15.16067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113562791 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 222 elements); data/traces/bastioncello-q113562791.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
