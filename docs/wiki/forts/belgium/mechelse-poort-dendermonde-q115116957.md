# Mechelse Poort (Dendermonde)

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mechelse-poort-dendermonde-q115116957` |
| Coordinates | 51.03103, 4.10698 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.03103/4.10698)) |
| Wikidata | [Q115116957](https://www.wikidata.org/wiki/Q115116957) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Dendermonde |
| Inception | 1822 |
| Designations | vastgesteld bouwkundig erfgoed |
| Wikipedia language editions | 2 |
| OSM `historic` | monastery |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, marker 1, road 75, water 6, building 500, wall 5, zone 1).

Evidence: documented 0, mapped 209, inferred 0, derived 0; heights documented 1, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16636669 historic=monastery 543 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 500 mapped (trace size budget); the rest of the town is not drawn
- origin moved 543 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.03103/4.10698) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q115116957 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/mechelse-poort-dendermonde-q115116957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
