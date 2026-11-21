# Allesley Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `allesley-castle-q17640662` |
| Coordinates | 52.4176, -1.56168 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.4176/-1.56168)) |
| Wikidata | [Q17640662](https://www.wikidata.org/wiki/Q17640662) (CC0) |
| Wikidata class | castle |
| Types | castle\|ringwork castle\|motte-and-bailey castle |
| Administrative area | Coventry |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 1, road 84, building 324, zone 5, wall 1).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 110, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/190293233 historic=castle 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 324 mapped (trace size budget); the rest of the town is not drawn
- origin moved 12 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.4176/-1.56168) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|ringwork castle\|motte-and-bailey castle; sitelinks=3; wikidata:Q17640662 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/allesley-castle-q17640662.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
