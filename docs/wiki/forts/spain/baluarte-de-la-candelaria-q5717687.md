# Baluarte de la Candelaria

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluarte-de-la-candelaria-q5717687` |
| Coordinates | 36.53792, -6.29951 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.53792/-6.29951)) |
| Wikidata | [Q5717687](https://www.wikidata.org/wiki/Q5717687) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fortification\|public building |
| Administrative area | Cádiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 9, road 84, building 184, wall 1, zone 2, coastline 1, water 1).

Evidence: documented 0, mapped 283, inferred 0, derived 1; heights documented 4, inferred 0, unknown 181.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18680645 historic=castle Q5717687 11 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":240,"medianInside":0,"medianOutside":16.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.53792/-6.29951) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fortification\|public building; sitelinks=2; wikidata:Q5717687 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/baluarte-de-la-candelaria-q5717687.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
