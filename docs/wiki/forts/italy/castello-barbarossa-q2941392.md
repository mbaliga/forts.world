# Castello Barbarossa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-barbarossa-q2941392` |
| Coordinates | 40.5556, 14.22711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.5556/14.22711)) |
| Wikidata | [Q2941392](https://www.wikidata.org/wiki/Q2941392) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Anacapri |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, road 25, coastline 1, building 12, wall 2, retaining-wall 1, cliff 2, zone 2).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/751445563 historic=castle Q2941392 0 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.5556/14.22711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=10; wikidata:Q2941392 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/castello-barbarossa-q2941392.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
