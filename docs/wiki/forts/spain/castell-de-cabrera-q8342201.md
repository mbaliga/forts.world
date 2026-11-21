# Castell de Cabrera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-cabrera-q8342201` |
| Coordinates | 39.15259, 2.93174 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.15259/2.93174)) |
| Wikidata | [Q8342201](https://www.wikidata.org/wiki/Q8342201) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Palma |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, coastline 2, road 10, building 8, wall 2, cliff 5, zone 3, retaining-wall 3, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/291799259 historic=castle 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":471,"medianInside":0,"medianOutside":31.7}
- 35 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.15259/2.93174) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=8; wikidata:Q8342201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/castell-de-cabrera-q8342201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
