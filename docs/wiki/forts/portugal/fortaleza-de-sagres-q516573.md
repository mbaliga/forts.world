# Fortaleza de Sagres

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-sagres-q516573` |
| Coordinates | 37.00085, -8.94839 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.00085/-8.94839)) |
| Wikidata | [Q516573](https://www.wikidata.org/wiki/Q516573) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Sagres |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 13 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 84 elements (outline 1, marker 1, road 58, building 5, zone 3, wall 9, cliff 3, coastline 2, water 2).

Evidence: documented 0, mapped 84, inferred 0, derived 2; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1328757662 historic=fort Q516573 25 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":451,"medianInside":0,"medianOutside":20}
- sea-1: DEM check ok {"cells":379,"medianInside":0,"medianOutside":18.5}
- 116 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.00085/-8.94839) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=13; wikidata:Q516573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 84 elements); data/traces/fortaleza-de-sagres-q516573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
