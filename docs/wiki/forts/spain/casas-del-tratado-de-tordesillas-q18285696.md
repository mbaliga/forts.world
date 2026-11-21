# Casas del Tratado de Tordesillas

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casas-del-tratado-de-tordesillas-q18285696` |
| Coordinates | 41.49996, -5.0011 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.49996/-5.0011)) |
| Wikidata | [Q18285696](https://www.wikidata.org/wiki/Q18285696) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building\|monument |
| Administrative area | Tordesillas |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 2, road 84, waterway 3, building 354, wall 5).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9456827 historic=castle Q18285696 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the outline centroid
- 41 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.49996/-5.0011) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building\|monument; sitelinks=5; wikidata:Q18285696 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/casas-del-tratado-de-tordesillas-q18285696.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
