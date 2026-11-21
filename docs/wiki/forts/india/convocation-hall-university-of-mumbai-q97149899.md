# Convocation Hall, University of Mumbai

> India · Mumbai City district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `convocation-hall-university-of-mumbai-q97149899` |
| Coordinates | 18.929775, 72.830027 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.929775/72.830027)) |
| Wikidata | [Q97149899](https://www.wikidata.org/wiki/Q97149899) (CC0) |
| Programme catalogue | confidence high, significance rank 38; sources wikidata:Q97149899;wikidata:Q97175288;wikidata:Q5471207;wikidata:Q16942531;unesco:1480;smith-newton:r1894;smith-newton:r1895 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 78 elements (outline 1, marker 1, road 31, building 38, wall 1, zone 3, coastline 1, water 2).

Evidence: documented 0, mapped 78, inferred 0, derived 2; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6418845 historic=fort Q4940545 869 m from ledger point
- origin moved 870 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":2.8,"medianOutside":10.4}
- sea-1: DEM check ok {"cells":435,"medianInside":4.6,"medianOutside":11}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.929775/72.830027) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=38; sources=7 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 78 elements); data/traces/convocation-hall-university-of-mumbai-q97149899.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
