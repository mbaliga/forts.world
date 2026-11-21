# Sándor Palace

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sandor-palace-q927806` |
| Coordinates | 47.49797, 19.03805 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.49797/19.03805)) |
| Wikidata | [Q927806](https://www.wikidata.org/wiki/Q927806) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|presidential palace |
| Administrative area | Budapest District I |
| Inception | 1806 |
| Wikipedia language editions | 31 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 378 elements (outline 1, marker 11, road 257, wall 51, building 32, zone 5, retaining-wall 20, waterway 1).

Evidence: documented 0, mapped 378, inferred 0, derived 0; heights documented 49, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/165910 historic=castle Q927806 1 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.49797/19.03805) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|presidential palace; sitelinks=31; wikidata:Q927806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 378 elements); data/traces/sandor-palace-q927806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
