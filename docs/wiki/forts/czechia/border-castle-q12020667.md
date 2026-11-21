# Border Castle

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `border-castle-q12020667` |
| Coordinates | 48.78045, 16.75788 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.78045/16.75788)) |
| Wikidata | [Q12020667](https://www.wikidata.org/wiki/Q12020667) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|maison de plaisance |
| Administrative area | Hlohovec |
| Inception | 1820 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `location-only`, 51 elements (marker 1, road 29, water 3, building 7, waterway 9, zone 2).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 4, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21453962 historic=castle Q12020667 1 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (17 x 60 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.78045/16.75788) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|maison de plaisance; sitelinks=4; wikidata:Q12020667 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 52 elements); data/traces/border-castle-q12020667.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
