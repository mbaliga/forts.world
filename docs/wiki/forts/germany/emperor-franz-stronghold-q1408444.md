# Emperor Franz Stronghold

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `emperor-franz-stronghold-q1408444` |
| Coordinates | 50.3707, 7.59101 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3707/7.59101)) |
| Wikidata | [Q1408444](https://www.wikidata.org/wiki/Q1408444) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Koblenz |
| Inception | 1822 |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.feste-franz.org/ |

## What the model contains

Tier **T1**, status `location-only`, 341 elements (road 317, building 251, zone 42, wall 17, retaining-wall 12).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 24, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20463945 historic=castle Q1408444 83 m from ledger point
- site is a site relation of 17 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (249 x 343 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 317 mapped (trace size budget); minor lanes are not drawn
- origin moved 80 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3707/7.59101) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q1408444 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 341 elements); data/traces/emperor-franz-stronghold-q1408444.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
