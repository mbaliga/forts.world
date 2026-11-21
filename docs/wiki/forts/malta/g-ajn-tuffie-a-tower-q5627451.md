# Għajn Tuffieħa Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `g-ajn-tuffie-a-tower-q5627451` |
| Coordinates | 35.93094, 14.34333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.93094/14.34333)) |
| Wikidata | [Q5627451](https://www.wikidata.org/wiki/Q5627451) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Mġarr |
| Inception | 1637 |
| Designations | Grade 1 |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `description` | Lascaris Tower |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, road 18, building 2, zone 5, coastline 2, cliff 1, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/328914410 historic=fort 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":986,"medianInside":0,"medianOutside":15.6}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.93094/14.34333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=9; wikidata:Q5627451 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/g-ajn-tuffie-a-tower-q5627451.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
