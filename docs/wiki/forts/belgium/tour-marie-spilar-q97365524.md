# Tour Marie Spilar

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-marie-spilar-q97365524` |
| Coordinates | 50.46338, 4.86841 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.46338/4.86841)) |
| Wikidata | [Q97365524](https://www.wikidata.org/wiki/Q97365524) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 230 elements (outline 1, road 94, zone 6, wall 5, retaining-wall 2, building 318, waterway 2).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/444268272 historic=castle Q1823577 468 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 318 mapped (trace size budget); the rest of the town is not drawn
- origin moved 467 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.46338/4.86841) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=3; wikidata:Q97365524 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 230 elements); data/traces/tour-marie-spilar-q97365524.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
