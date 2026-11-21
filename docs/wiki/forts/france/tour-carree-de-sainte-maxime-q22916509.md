# Tour carrée de Sainte-Maxime

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-carree-de-sainte-maxime-q22916509` |
| Coordinates | 43.30707, 6.64118 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.30707/6.64118)) |
| Wikidata | [Q22916509](https://www.wikidata.org/wiki/Q22916509) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Sainte-Maxime |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 279 elements (marker 2, road 186, coastline 1, building 392, retaining-wall 2, water 4).

Evidence: documented 0, mapped 279, inferred 0, derived 4; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 392 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 186 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":38,"medianInside":0.6,"medianOutside":6.8}
- sea-1: DEM check ok {"cells":73,"medianInside":0.2,"medianOutside":7.8}
- sea-2: DEM check ok {"cells":389,"medianInside":5.1,"medianOutside":11.7}
- sea-3: DEM check ok {"cells":21,"medianInside":0,"medianOutside":6.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.30707/6.64118) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22916509 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 279 elements); data/traces/tour-carree-de-sainte-maxime-q22916509.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
