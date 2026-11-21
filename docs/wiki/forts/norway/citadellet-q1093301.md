# Citadellet

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadellet-q1093301` |
| Coordinates | 59.42836, 10.4845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.42836/10.4845)) |
| Wikidata | [Q1093301](https://www.wikidata.org/wiki/Q1093301) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Horten Municipality |
| Inception | 1848 |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 53 elements (coastline 2, road 18, building 29, water 4).

Evidence: documented 0, mapped 53, inferred 0, derived 4; heights documented 0, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":33,"medianInside":0,"medianOutside":3.4}
- sea-1: DEM check failed {"cells":15,"medianInside":3.8,"medianOutside":3.1}
- sea-2: DEM check ok {"cells":14,"medianInside":0,"medianOutside":3.3}
- sea-3: DEM check ok {"cells":2,"medianInside":2,"medianOutside":3.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.42836/10.4845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q1093301 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 53 elements); data/traces/citadellet-q1093301.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
