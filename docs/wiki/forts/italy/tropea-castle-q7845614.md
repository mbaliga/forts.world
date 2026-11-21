# Tropea Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tropea-castle-q7845614` |
| Coordinates | 38.67892, 15.89685 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.67892/15.89685)) |
| Wikidata | [Q7845614](https://www.wikidata.org/wiki/Q7845614) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Tropea |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 2, road 182, coastline 1, building 96, zone 4, cliff 4, wall 13, waterway 1, retaining-wall 8, water 2).

Evidence: documented 0, mapped 314, inferred 0, derived 2; heights documented 1, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16282797 historic=building 21 m from ledger point
- origin moved 24 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":46,"medianInside":0,"medianOutside":30.5}
- sea-1: DEM check ok {"cells":13,"medianInside":0,"medianOutside":27.1}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.67892/15.89685) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=2; wikidata:Q7845614 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/tropea-castle-q7845614.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
