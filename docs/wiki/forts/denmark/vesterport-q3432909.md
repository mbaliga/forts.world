# Vesterport

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vesterport-q3432909` |
| Coordinates | 55.6763, 12.5691 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.6763/12.5691)) |
| Wikidata | [Q3432909](https://www.wikidata.org/wiki/Q3432909) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Copenhagen Municipality |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://denkongeligesamling.dk/christiansborg-slot/ |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 10, road 158, building 314, coastline 4, water 1, wall 2, retaining-wall 4, zone 6).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 10, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25992657 historic=castle Q940733 600 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 314 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 601 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.6763/12.5691) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=4; wikidata:Q3432909 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/vesterport-q3432909.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
