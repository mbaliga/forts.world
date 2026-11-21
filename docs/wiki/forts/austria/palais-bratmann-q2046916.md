# Palais Bratmann

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-bratmann-q2046916` |
| Coordinates | 48.19776, 16.38215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.19776/16.38215)) |
| Wikidata | [Q2046916](https://www.wikidata.org/wiki/Q2046916) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Vienna |
| Inception | 1898 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 5, road 293, wall 14, building 121, zone 31, retaining-wall 3).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 105, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/182677897 historic=castle Q2046916 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 121 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 293 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.19776/16.38215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q2046916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/palais-bratmann-q2046916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
