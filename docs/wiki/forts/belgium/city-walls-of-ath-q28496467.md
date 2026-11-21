# City walls of Ath

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-ath-q28496467` |
| Coordinates | 50.63114, 3.77694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.63114/3.77694)) |
| Wikidata | [Q28496467](https://www.wikidata.org/wiki/Q28496467) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Ath |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 2, road 85, waterway 7, building 826, water 6, wall 25, zone 3).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 0, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1318333397 historic=castle 175 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 826 mapped (trace size budget); the rest of the town is not drawn
- origin moved 175 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.63114/3.77694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q28496467 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/city-walls-of-ath-q28496467.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
