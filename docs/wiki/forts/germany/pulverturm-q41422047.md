# Pulverturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pulverturm-q41422047` |
| Coordinates | 49.45443, 12.18051 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45443/12.18051)) |
| Wikidata | [Q41422047](https://www.wikidata.org/wiki/Q41422047) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Nabburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 8, road 114, building 353, zone 3, waterway 2, wall 15, retaining-wall 1).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/284014278 historic=building Q98671884 113 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 353 mapped (trace size budget); the rest of the town is not drawn
- origin moved 113 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45443/12.18051) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q41422047 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/pulverturm-q41422047.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
