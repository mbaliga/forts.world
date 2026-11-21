# Hünenburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hunenburg-q1355071` |
| Coordinates | 51.2365, 7.82284 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2365/7.82284)) |
| Wikidata | [Q1355071](https://www.wikidata.org/wiki/Q1355071) (CC0) |
| Wikidata class | fort |
| Types | hillfort\|Bodendenkmal |
| Administrative area | Plettenberg |
| Inception | 0700 |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `location-only`, 66 elements (marker 2, road 12, waterway 4, zone 5, building 43).

Evidence: documented 0, mapped 66, inferred 0, derived 0; heights documented 0, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6428263 historic=archaeological_site Q1355071 50 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (284 x 287 m)
- origin moved 42 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2365/7.82284) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort\|Bodendenkmal; sitelinks=1; wikidata:Q1355071 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 66 elements); data/traces/hunenburg-q1355071.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
