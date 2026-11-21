# Steintor (Goch)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steintor-goch-q1725054` |
| Coordinates | 51.67583, 6.15833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.67583/6.15833)) |
| Wikidata | [Q1725054](https://www.wikidata.org/wiki/Q1725054) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Goch |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 307 elements (outline 1, marker 52, road 128, waterway 2, building 563, water 3, zone 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164178804 historic=monument Q1590925 104 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 563 mapped (trace size budget); the rest of the town is not drawn
- origin moved 104 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.67583/6.15833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=2; wikidata:Q1725054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 307 elements); data/traces/steintor-goch-q1725054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
