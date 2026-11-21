# Kraton Kacirebonan

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kraton-kacirebonan-q643137` |
| Coordinates | -6.72513, 108.56538 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-6.72513/108.56538)) |
| Wikidata | [Q643137](https://www.wikidata.org/wiki/Q643137) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage\|kraton |
| Administrative area | Cirebon |
| Inception | 1808 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 1, road 82, building 1013, waterway 1, zone 10, wall 10).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 0, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1426215303 historic=castle Q643143 402 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1013 mapped (trace size budget); the rest of the town is not drawn
- origin moved 399 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-6.72513/108.56538) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage\|kraton; sitelinks=6; wikidata:Q643137 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/kraton-kacirebonan-q643137.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
