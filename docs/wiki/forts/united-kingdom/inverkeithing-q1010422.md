# Inverkeithing

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `inverkeithing-q1010422` |
| Coordinates | 56.03333, -3.38333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.03333/-3.38333)) |
| Wikidata | [Q1010422](https://www.wikidata.org/wiki/Q1010422) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Fife |
| Wikipedia language editions | 18 |

## What the model contains

Tier **T1**, status `location-only`, 239 elements (road 106, building 283, zone 13).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 283 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.03333/-3.38333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=18; wikidata:Q1010422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 239 elements); data/traces/inverkeithing-q1010422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
