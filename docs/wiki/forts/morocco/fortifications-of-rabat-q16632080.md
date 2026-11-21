# Fortifications of Rabat

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-rabat-q16632080` |
| Coordinates | 34.03269, -6.83694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.03269/-6.83694)) |
| Wikidata | [Q16632080](https://www.wikidata.org/wiki/Q16632080) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Rabat |
| Wikipedia language editions | 3 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 14, zone 16, road 144, coastline 2, building 218, wall 21, water 2).

Evidence: documented 0, mapped 320, inferred 0, derived 2; heights documented 5, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/754253683 historic=tomb 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 218 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":8,"medianInside":3.5,"medianOutside":13.1}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":12.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 79 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.03269/-6.83694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=3; wikidata:Q16632080 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/fortifications-of-rabat-q16632080.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
