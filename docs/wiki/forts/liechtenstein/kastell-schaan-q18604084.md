# Kastell Schaan

> Liechtenstein · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastell-schaan-q18604084` |
| Coordinates | 47.16353, 9.50903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.16353/9.50903)) |
| Wikidata | [Q18604084](https://www.wikidata.org/wiki/Q18604084) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Schaan |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, road 241, zone 8, building 148, wall 1, retaining-wall 8, waterway 3).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 4, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46923264 historic=archaeological_site 577 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 148 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 241 mapped (trace size budget); minor lanes are not drawn
- origin moved 576 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.16353/9.50903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=3; wikidata:Q18604084 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/kastell-schaan-q18604084.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/liechtenstein.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
