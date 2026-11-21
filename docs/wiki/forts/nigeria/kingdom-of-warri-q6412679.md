# Kingdom of Warri

> Nigeria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kingdom-of-warri-q6412679` |
| Coordinates | 5.52604, 5.73568 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.52604/5.73568)) |
| Wikidata | [Q6412679](https://www.wikidata.org/wiki/Q6412679) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|traditional state in Nigeria |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 160 elements (outline 1, marker 1, road 35, building 432, zone 2, waterway 1).

Evidence: documented 0, mapped 160, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1139094189 historic=castle Q6412679 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 432 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.52604/5.73568) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|traditional state in Nigeria; sitelinks=5; wikidata:Q6412679 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 160 elements); data/traces/kingdom-of-warri-q6412679.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/nigeria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
