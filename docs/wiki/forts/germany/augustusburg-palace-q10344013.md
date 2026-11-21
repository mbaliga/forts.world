# Augustusburg Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `augustusburg-palace-q10344013` |
| Coordinates | 50.8283, 6.9077 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8283/6.9077)) |
| Wikidata | [Q10344013](https://www.wikidata.org/wiki/Q10344013) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|hunting lodge |
| Administrative area | Brühl |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 1 |
| OSM `website` | https://www.schlossbruehl.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 384 elements (outline 1, marker 2, road 193, building 157, water 9, wall 4, retaining-wall 4, zone 87, waterway 7).

Evidence: documented 0, mapped 384, inferred 0, derived 0; heights documented 33, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25187730 historic=castle Q10344013 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 157 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8283/6.9077) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|hunting lodge; sitelinks=3; wikidata:Q10344013 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 384 elements); data/traces/augustusburg-palace-q10344013.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
