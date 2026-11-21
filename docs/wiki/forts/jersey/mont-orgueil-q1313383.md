# Mont Orgueil

> Jersey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mont-orgueil-q1313383` |
| Coordinates | 49.19944, -2.01944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.19944/-2.01944)) |
| Wikidata | [Q1313383](https://www.wikidata.org/wiki/Q1313383) (CC0) |
| Wikidata class | castle |
| Types | archaeological site\|castle\|history museum |
| Administrative area | Saint Martin |
| Inception | 1204 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.jerseyheritage.org/places-to-visit/mont-orgueil-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, marker 1, road 61, building 30, zone 8, wall 9, cliff 1, retaining-wall 4, coastline 1, water 2).

Evidence: documented 0, mapped 118, inferred 0, derived 2; heights documented 14, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166410471 historic=castle Q1313383 16 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":69,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":228,"medianInside":0,"medianOutside":16.3}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.19944/-2.01944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; archaeological site\|castle\|history museum; sitelinks=10; wikidata:Q1313383 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/mont-orgueil-q1313383.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
