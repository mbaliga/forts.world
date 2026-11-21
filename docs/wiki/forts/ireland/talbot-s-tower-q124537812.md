# Talbot's Tower

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `talbot-s-tower-q124537812` |
| Coordinates | 52.64801, -7.25268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.64801/-7.25268)) |
| Wikidata | [Q124537812](https://www.wikidata.org/wiki/Q124537812) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|watchtower |
| Administrative area | Kilkenny |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 230 elements (outline 1, marker 25, road 506, waterway 5, building 197, zone 32, wall 80, water 3).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 30, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1023433070 historic=castle Q2453267 360 m from ledger point
- pruned to the outline plus 150 m: 849 -> 520 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 100 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 330 mapped (trace size budget); minor lanes are not drawn
- origin moved 360 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.64801/-7.25268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|watchtower; sitelinks=1; wikidata:Q124537812 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 230 elements); data/traces/talbot-s-tower-q124537812.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
