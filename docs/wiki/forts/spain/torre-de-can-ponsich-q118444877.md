# Torre de Can Ponsich

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-can-ponsich-q118444877` |
| Coordinates | 41.39725, 2.11897 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.39725/2.11897)) |
| Wikidata | [Q118444877](https://www.wikidata.org/wiki/Q118444877) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Sarrià |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 6, road 230, building 511, zone 5, retaining-wall 5, waterway 2, wall 5).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 120, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21206030 historic=building Q17589803 319 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 511 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 230 mapped (trace size budget); minor lanes are not drawn
- origin moved 320 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.39725/2.11897) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q118444877 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/torre-de-can-ponsich-q118444877.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
