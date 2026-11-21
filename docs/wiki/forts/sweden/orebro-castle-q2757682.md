# Örebro Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orebro-castle-q2757682` |
| Coordinates | 59.27389, 15.21528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.27389/15.21528)) |
| Wikidata | [Q2757682](https://www.wikidata.org/wiki/Q2757682) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage\|architectural ensemble |
| Administrative area | Örebro Municipality |
| Inception | 1400 |
| Designations | cultural heritage |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://orebroslott.se |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 1, road 215, waterway 27, wall 10, building 84, zone 4, water 1).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 21, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1521058 historic=castle Q2757682 8 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 32 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.27389/15.21528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage\|architectural ensemble; sitelinks=23; wikidata:Q2757682 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/orebro-castle-q2757682.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
