# Royal Palace

> Cambodia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-palace-q420618` |
| Coordinates | 11.56348, 104.9305 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.56348/104.9305)) |
| Wikidata | [Q420618](https://www.wikidata.org/wiki/Q420618) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|royal palace |
| Administrative area | Phnom Penh |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 15, road 254, building 454, water 8, zone 125, wall 9, waterway 1).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 0, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1315431760 historic=castle Q420618 65 m from ledger point
- pruned to the outline plus 150 m: 867 -> 615 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 196 mapped (trace size budget); minor lanes are not drawn
- origin moved 62 m from the ledger point to the outline centroid
- 38 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.56348/104.9305) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|royal palace; sitelinks=23; wikidata:Q420618 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/royal-palace-q420618.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cambodia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
