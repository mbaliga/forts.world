# Fort d'Aubin-Neufchâteau

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-d-aubin-neufchateau-q1438445` |
| Coordinates | 50.72139, 5.78972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.72139/5.78972)) |
| Wikidata | [Q1438445](https://www.wikidata.org/wiki/Q1438445) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum |
| Administrative area | Dalhem |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `website` | http://fort-aubin-neufchateau.be/fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, marker 1, road 21, zone 15, building 9, wall 5).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48374049 historic=fort 53 m from ledger point
- origin moved 52 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.72139/5.78972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum; sitelinks=8; wikidata:Q1438445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 52 elements); data/traces/fort-d-aubin-neufchateau-q1438445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
