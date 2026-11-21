# Larnaca Castle

> Cyprus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `larnaca-castle-q580797` |
| Coordinates | 34.91052, 33.63769 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.91052/33.63769)) |
| Wikidata | [Q580797](https://www.wikidata.org/wiki/Q580797) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Larnaca Municipality |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, marker 2, road 76, coastline 1, building 145, zone 1, wall 2, waterway 1, water 1).

Evidence: documented 0, mapped 231, inferred 0, derived 1; heights documented 4, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/116724647 historic=castle Q580797 30 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":155,"medianInside":0,"medianOutside":4.8}
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.91052/33.63769) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=22; wikidata:Q580797 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/larnaca-castle-q580797.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cyprus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
