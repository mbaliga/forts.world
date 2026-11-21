# Conde Luna Palace

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `conde-luna-palace-q6058532` |
| Coordinates | 42.59721, -5.56938 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.59721/-5.56938)) |
| Wikidata | [Q6058532](https://www.wikidata.org/wiki/Q6058532) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|monument\|mansion |
| Designations | Red List of Endangered Heritage item\|bien de interés cultural |
| UNESCO WHC id | 669-1535 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 4, road 145, building 336, wall 15, retaining-wall 2, zone 3, water 3).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 22, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/47378918 historic=castle Q6058532 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 336 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.59721/-5.56938) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|monument\|mansion; sitelinks=2; wikidata:Q6058532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/conde-luna-palace-q6058532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
