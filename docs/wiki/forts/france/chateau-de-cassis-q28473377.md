# Château de Cassis

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-cassis-q28473377` |
| Coordinates | 43.21241, 5.53929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.21241/5.53929)) |
| Wikidata | [Q28473377](https://www.wikidata.org/wiki/Q28473377) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cassis |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 348 elements (marker 3, road 122, coastline 2, building 206, cliff 2, wall 5, water 4, zone 3, waterway 1).

Evidence: documented 0, mapped 348, inferred 0, derived 2; heights documented 25, inferred 0, unknown 186.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":11,"medianInside":0.2,"medianOutside":12.9}
- sea-1: DEM check ok {"cells":97,"medianInside":0,"medianOutside":18.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.21241/5.53929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q28473377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 348 elements); data/traces/chateau-de-cassis-q28473377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
