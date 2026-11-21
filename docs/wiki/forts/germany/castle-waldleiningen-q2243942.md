# Castle Waldleiningen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-waldleiningen-q2243942` |
| Coordinates | 49.56726, 9.11621 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.56726/9.11621)) |
| Wikidata | [Q2243942](https://www.wikidata.org/wiki/Q2243942) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|sanatorium\|Schloss |
| Administrative area | Mudau |
| Inception | 1828 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://schloss-waldleiningen.de/geschichte/ |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, road 21, building 14, waterway 1, zone 1).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6624154 historic=castle Q2243942 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.56726/9.11621) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|sanatorium\|Schloss; sitelinks=4; wikidata:Q2243942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/castle-waldleiningen-q2243942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
