# Bozner Tor

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bozner-tor-q98608888` |
| Coordinates | 46.67051, 11.16468 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.67051/11.16468)) |
| Wikidata | [Q98608888](https://www.wikidata.org/wiki/Q98608888) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Merano |
| Designations | cultural heritage monument in South Tyrol |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `website` | https://www.kallmuenz.it/ |

## What the model contains

Tier **T1**, status `outline-only`, 284 elements (outline 1, marker 2, road 161, building 367, water 1, waterway 4, retaining-wall 1, zone 5).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 21, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69313886 historic=castle Q107155837 106 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 367 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 106 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.67051/11.16468) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q98608888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 284 elements); data/traces/bozner-tor-q98608888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
