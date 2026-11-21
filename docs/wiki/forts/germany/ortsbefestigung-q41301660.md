# Ortsbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ortsbefestigung-q41301660` |
| Coordinates | 49.93321, 9.13296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.93321/9.13296)) |
| Wikidata | [Q41301660](https://www.wikidata.org/wiki/Q41301660) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Aschaffenburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 199 elements (outline 1, marker 2, road 55, zone 3, building 327, water 3, waterway 14, wall 1).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/508440820 historic=yes Q41301678 304 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 327 mapped (trace size budget); the rest of the town is not drawn
- origin moved 303 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.93321/9.13296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q41301660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 199 elements); data/traces/ortsbefestigung-q41301660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
