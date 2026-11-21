# Arras citadel

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arras-citadel-q206234` |
| Coordinates | 50.2824, 2.7591 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.2824/2.7591)) |
| Wikidata | [Q206234](https://www.wikidata.org/wiki/Q206234) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Arras |
| Designations | part of UNESCO World Heritage Site\|classified historical monument |
| UNESCO WHC id | 1283-001 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 1, road 372, zone 95, waterway 29, wall 52, water 10, building 308, retaining-wall 1).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 36, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/78252880 historic=fort 115 m from ledger point
- pruned to the outline plus 150 m: 869 -> 466 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 66 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 278 mapped (trace size budget); minor lanes are not drawn
- origin moved 119 m from the ledger point to the outline centroid
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.2824/2.7591) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=4; wikidata:Q206234 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/arras-citadel-q206234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
