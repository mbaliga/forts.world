# Rivellino leonardesco

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rivellino-leonardesco-q88188988` |
| Coordinates | 46.16847, 8.79389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.16847/8.79389)) |
| Wikidata | [Q88188988](https://www.wikidata.org/wiki/Q88188988) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Locarno |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |
| OSM `website` | https://castellolocarno.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 16, road 186, building 181, zone 10, wall 1, retaining-wall 6).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 5, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/317356795 historic=castle Q3662393 81 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 181 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 186 mapped (trace size budget); minor lanes are not drawn
- origin moved 81 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.16847/8.79389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q88188988 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/rivellino-leonardesco-q88188988.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
