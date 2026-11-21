# Lakhpat Fort

> India · Kutch district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lakhpat-fort-q98871090` |
| Coordinates | 23.823611, 68.78 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.823611/68.78)) |
| Wikidata | [Q98871090](https://www.wikidata.org/wiki/Q98871090) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kutch district |
| Designations | State Protected Monument |
| Wikipedia language editions | 1 |
| Programme catalogue | confidence high, significance rank 717; sources wikidata:Q98871090;smith-newton:r661 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, road 4, wall 1, coastline 1, building 4, zone 1, water 3).

Evidence: documented 0, mapped 15, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1243926300 historic=fort Q31773279 498 m from ledger point
- origin moved 480 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":45,"medianInside":5.3,"medianOutside":11.9}
- sea-1: DEM check ok {"cells":89,"medianInside":6.1,"medianOutside":11.9}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.823611/68.78) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=717; sources=2 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/lakhpat-fort-q98871090.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
