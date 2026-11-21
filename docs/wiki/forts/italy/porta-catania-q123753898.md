# Porta Catania

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-catania-q123753898` |
| Coordinates | 37.85114, 15.28189 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.85114/15.28189)) |
| Wikidata | [Q123753898](https://www.wikidata.org/wiki/Q123753898) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Taormina |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 394 elements (outline 1, marker 4, waterway 1, road 165, building 199, zone 2, coastline 1, retaining-wall 9, wall 9, cliff 2, water 1).

Evidence: documented 0, mapped 394, inferred 0, derived 0; heights documented 1, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1395470273 historic=castle Q3890050 33 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.85114/15.28189) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q123753898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 394 elements); data/traces/porta-catania-q123753898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
