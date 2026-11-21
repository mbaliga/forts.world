# Uenglinger Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `uenglinger-tor-q2473644` |
| Coordinates | 52.6081, 11.8522 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.6081/11.8522)) |
| Wikidata | [Q2473644](https://www.wikidata.org/wiki/Q2473644) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Stendal |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, marker 6, road 79, building 431, wall 1, zone 1).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 8, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/386867786 historic=building 478 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 431 mapped (trace size budget); the rest of the town is not drawn
- origin moved 478 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.6081/11.8522) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q2473644 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 208 elements); data/traces/uenglinger-tor-q2473644.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
