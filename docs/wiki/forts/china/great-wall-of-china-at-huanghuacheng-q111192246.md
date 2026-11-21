# Great Wall of China at Huanghuacheng

> China · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `great-wall-of-china-at-huanghuacheng-q111192246` |
| Coordinates | 40.415, 116.3131 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.415/116.3131)) |
| Wikidata | [Q111192246](https://www.wikidata.org/wiki/Q111192246) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Huanghuacheng |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `location-only`, 31 elements (wall 4, road 24, waterway 1, zone 2).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/318110 historic=citywalls Q12501 281902 m from ledger point
- site is a collection relation of 10539 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (2809342 x 1927496 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.415/116.3131) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q111192246 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/great-wall-of-china-at-huanghuacheng-q111192246.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
