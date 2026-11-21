# Baluarte de San Carlos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluarte-de-san-carlos-q43133793` |
| Coordinates | 36.53687, -6.29216 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.53687/-6.29216)) |
| Wikidata | [Q43133793](https://www.wikidata.org/wiki/Q43133793) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cádiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, marker 8, road 69, building 106, wall 1, zone 2, coastline 1, water 1).

Evidence: documented 0, mapped 189, inferred 0, derived 1; heights documented 3, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18680645 historic=castle Q5717687 656 m from ledger point
- origin moved 647 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":240,"medianInside":0,"medianOutside":16.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.53687/-6.29216) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q43133793 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/baluarte-de-san-carlos-q43133793.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
