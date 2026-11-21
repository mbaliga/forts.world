# Lubart's Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lubart-s-castle-q1866166` |
| Coordinates | 50.73889, 25.32333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.73889/25.32333)) |
| Wikidata | [Q1866166](https://www.wikidata.org/wiki/Q1866166) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lutsk |
| Inception | 1340 |
| Wikipedia language editions | 38 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Пам'ятка архітектури національного значення |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 2, road 92, building 118, water 3, wall 19, waterway 6, zone 28, retaining-wall 4, cliff 2).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 73, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/633707797 historic=castle Q1866166 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.73889/25.32333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=38; wikidata:Q1866166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/lubart-s-castle-q1866166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
