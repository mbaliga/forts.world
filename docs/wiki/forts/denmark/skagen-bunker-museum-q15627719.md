# Skagen Bunker Museum

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skagen-bunker-museum-q15627719` |
| Coordinates | 57.73891, 10.6318 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.73891/10.6318)) |
| Wikidata | [Q15627719](https://www.wikidata.org/wiki/Q15627719) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|military museum\|former hospital |
| Administrative area | Frederikshavn Municipality |
| Inception | 2008 |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |
| OSM `website` | https://skagen-bunkermuseum.dk/ |

## What the model contains

Tier **T1**, status `outline-only`, 79 elements (outline 1, coastline 2, road 73, building 2, water 1).

Evidence: documented 0, mapped 79, inferred 0, derived 1; heights documented 1, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/671794713 historic=yes Q15627719 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":-0.9,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.73891/10.6318) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|military museum\|former hospital; sitelinks=4; wikidata:Q15627719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 79 elements); data/traces/skagen-bunker-museum-q15627719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
