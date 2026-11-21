# Tour du Père-Labat

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-du-pere-labat-q15953420` |
| Coordinates | 16.01307, -61.74655 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.01307/-61.74655)) |
| Wikidata | [Q15953420](https://www.wikidata.org/wiki/Q15953420) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Baillif |
| Inception | C18 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 336 elements (marker 4, water 4, road 46, coastline 1, waterway 2, zone 2, building 277).

Evidence: documented 0, mapped 336, inferred 0, derived 1; heights documented 0, inferred 0, unknown 277.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":178,"medianInside":1.3,"medianOutside":6.8}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.01307/-61.74655) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=3; wikidata:Q15953420 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 336 elements); data/traces/tour-du-pere-labat-q15953420.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
