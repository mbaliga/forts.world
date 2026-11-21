# Hôtel des Postes (Réunion)

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-des-postes-reunion-q3146239` |
| Coordinates | -21.16633, 55.28708 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-21.16633/55.28708)) |
| Wikidata | [Q3146239](https://www.wikidata.org/wiki/Q3146239) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Saint-Leu |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 239 elements (marker 3, road 68, coastline 3, building 161, waterway 1, zone 1, water 2).

Evidence: documented 0, mapped 239, inferred 0, derived 2; heights documented 8, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":106,"medianInside":8.1,"medianOutside":9.9}
- sea-1: DEM check ok {"cells":397,"medianInside":9.6,"medianOutside":12.3}
- 29 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-21.16633/55.28708) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=2; wikidata:Q3146239 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 239 elements); data/traces/hotel-des-postes-reunion-q3146239.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
