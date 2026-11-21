# Ribat of Sousse

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ribat-of-sousse-q48816409` |
| Coordinates | 35.82768, 10.63875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.82768/10.63875)) |
| Wikidata | [Q48816409](https://www.wikidata.org/wiki/Q48816409) (CC0) |
| Wikidata class | fortification |
| Types | ribat |
| Administrative area | Sousse |
| Inception | 0821 |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `fortification_type` | ribat |

## What the model contains

Tier **T1**, status `outline+walls`, 170 elements (outline 1, marker 1, road 110, wall 21, coastline 1, building 452, zone 11).

Evidence: documented 0, mapped 170, inferred 0, derived 0; heights documented 0, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8876363 historic=fort Q48816409 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 25 nearest the outline centre of 452 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.82768/10.63875) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fortification; ribat; sitelinks=5; wikidata:Q48816409 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 597 elements); data/traces/ribat-of-sousse-q48816409.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
