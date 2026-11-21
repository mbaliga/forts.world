# Maison des Princes de Monaco

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maison-des-princes-de-monaco-q3145904` |
| Coordinates | 44.97997, 2.62429 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.97997/2.62429)) |
| Wikidata | [Q3145904](https://www.wikidata.org/wiki/Q3145904) (CC0) |
| Wikidata class | castle |
| Types | castle\|private mansion |
| Administrative area | Vic-sur-Cère |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 238 elements (marker 5, zone 2, road 103, waterway 8, building 431).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 431 mapped (trace size budget); the rest of the town is not drawn
- 697 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.97997/2.62429) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|private mansion; sitelinks=2; wikidata:Q3145904 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 238 elements); data/traces/maison-des-princes-de-monaco-q3145904.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
