# Kinburn

> Ukraine · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kinburn-q2467458` |
| Coordinates | 46.56111, 31.52417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.56111/31.52417)) |
| Wikidata | [Q2467458](https://www.wikidata.org/wiki/Q2467458) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ochakiv |
| Wikipedia language editions | 11 |

## What the model contains

Tier **T1**, status `location-only`, 7 elements (coastline 2, road 2, building 1, water 2).

Evidence: documented 0, mapped 7, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":176,"medianInside":0.3,"medianOutside":0.3}
- sea-1: DEM check ok {"cells":80,"medianInside":0.1,"medianOutside":0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.56111/31.52417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=11; wikidata:Q2467458 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/kinburn-q2467458.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
