# The Well Gate

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `the-well-gate-q19860654` |
| Coordinates | 57.64251, 18.30091 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.64251/18.30091)) |
| Wikidata | [Q19860654](https://www.wikidata.org/wiki/Q19860654) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Region Gotland |
| Inception | 1868 |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 1, road 95, building 228, cliff 1, zone 10, coastline 1, wall 4).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 19, inferred 0, unknown 213.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/686918930 historic=ruins 102 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 101 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.64251/18.30091) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q19860654 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/the-well-gate-q19860654.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
