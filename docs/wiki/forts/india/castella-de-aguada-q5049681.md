# Castella de Aguada

> India · Mumbai Suburban district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castella-de-aguada-q5049681` |
| Coordinates | 19.04177, 72.81858 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.04177/72.81858)) |
| Wikidata | [Q5049681](https://www.wikidata.org/wiki/Q5049681) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Mumbai Suburban district |
| Inception | 1640 |
| Designations | Heritage of Portuguese Influence\|State Protected Monument |
| Wikipedia language editions | 8 |
| Programme catalogue | confidence high, significance rank 361; sources wikidata:Q5049681;smith-newton:r193 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, marker 1, road 25, wall 1, building 5, zone 2, coastline 1, water 1).

Evidence: documented 0, mapped 37, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/654567861 historic=fort 19 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1127,"medianInside":0.3,"medianOutside":12}
- 19 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.04177/72.81858) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 3/10), checked against all other batch files at push time. type=fort; confidence=high; rank=361; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/castella-de-aguada-q5049681.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
