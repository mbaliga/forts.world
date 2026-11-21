# Haspelturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haspelturm-q127326057` |
| Coordinates | 48.93215, 8.95991 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.93215/8.95991)) |
| Wikidata | [Q127326057](https://www.wikidata.org/wiki/Q127326057) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Vaihingen an der Enz |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, road 384, building 493, wall 7, retaining-wall 14, zone 4).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 11, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50548563 historic=yes Q127326057 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 493 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 384 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.93215/8.95991) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q127326057 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/haspelturm-q127326057.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
