# Portsburgh

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portsburgh-q7232402` |
| Coordinates | 55.9444, -3.19167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.9444/-3.19167)) |
| Wikidata | [Q7232402](https://www.wikidata.org/wiki/Q7232402) (CC0) |
| Wikidata class | fortification |
| Types | burgh of barony |
| Administrative area | City of Edinburgh |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 343 elements (marker 45, road 471, zone 20, building 406, cliff 8, wall 180, retaining-wall 20).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 28, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20345392 historic=citywalls Q5338311 266 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (322 x 134 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 406 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 471 mapped (trace size budget); minor lanes are not drawn
- origin moved 210 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.9444/-3.19167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; burgh of barony; sitelinks=2; wikidata:Q7232402 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 343 elements); data/traces/portsburgh-q7232402.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
