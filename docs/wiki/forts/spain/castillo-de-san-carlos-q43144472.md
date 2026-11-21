# Castillo de San Carlos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-carlos-q43144472` |
| Coordinates | 43.46472, -8.28562 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.46472/-8.28562)) |
| Wikidata | [Q43144472](https://www.wikidata.org/wiki/Q43144472) (CC0) |
| Wikidata class | fort |
| Types | fortress\|monument |
| Administrative area | Ferrol |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, coastline 1, road 15, zone 3, building 20, wall 1, water 1).

Evidence: documented 0, mapped 42, inferred 0, derived 1; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33711834 historic=castle Q3395068 305 m from ledger point
- origin moved 306 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":407,"medianInside":0,"medianOutside":27.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.46472/-8.28562) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|monument; sitelinks=1; wikidata:Q43144472 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/castillo-de-san-carlos-q43144472.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
