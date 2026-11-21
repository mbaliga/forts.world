# Kronslot

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kronslot-q4241648` |
| Coordinates | 59.97917, 29.74833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.97917/29.74833)) |
| Wikidata | [Q4241648](https://www.wikidata.org/wiki/Q4241648) (CC0) |
| Wikidata class | fort |
| Types | fortification\|island\|architectural landmark |
| Administrative area | Kronstadt |
| Inception | 1703 |
| Designations | part of UNESCO World Heritage Site\|federal cultural heritage site in Russia |
| UNESCO WHC id | 540-003b 11 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, coastline 4, building 9, road 1).

Evidence: documented 0, mapped 15, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3685924 historic=fort Q4241648 25 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 22 m from the ledger point to the outline centroid
- 2070 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.97917/29.74833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|island\|architectural landmark; sitelinks=4; wikidata:Q4241648 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/kronslot-q4241648.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
