# Ergan kystfort

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ergan-kystfort-q17769743` |
| Coordinates | 62.90836, 6.90521 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/62.90836/6.90521)) |
| Wikidata | [Q17769743](https://www.wikidata.org/wiki/Q17769743) (CC0) |
| Wikidata class | fort |
| Types | museum\|fort |
| Administrative area | Hustadvika Municipality |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 207 elements (marker 4, road 62, coastline 5, water 7, building 123, cliff 1, waterway 5).

Evidence: documented 0, mapped 207, inferred 0, derived 5; heights documented 3, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":2,"medianInside":0.1,"medianOutside":7.8}
- sea-1: DEM check ok {"cells":1,"medianInside":0.7,"medianOutside":7.8}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":7.8}
- sea-3: DEM check ok {"cells":15,"medianInside":0,"medianOutside":8.2}
- sea-4: DEM check ok {"cells":3,"medianInside":0,"medianOutside":7.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/62.90836/6.90521) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fort; sitelinks=3; wikidata:Q17769743 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 207 elements); data/traces/ergan-kystfort-q17769743.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
