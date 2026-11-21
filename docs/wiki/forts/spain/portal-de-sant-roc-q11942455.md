# Portal de Sant Roc

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portal-de-sant-roc-q11942455` |
| Coordinates | 39.88944, 4.2625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.88944/4.2625)) |
| Wikidata | [Q11942455](https://www.wikidata.org/wiki/Q11942455) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Maó |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 260 elements (marker 4, road 111, building 901, coastline 1, water 3, wall 20, cliff 1).

Evidence: documented 0, mapped 260, inferred 0, derived 2; heights documented 122, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 901 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":1,"medianInside":-0.8,"medianOutside":42}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":42}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.88944/4.2625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q11942455 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 260 elements); data/traces/portal-de-sant-roc-q11942455.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
