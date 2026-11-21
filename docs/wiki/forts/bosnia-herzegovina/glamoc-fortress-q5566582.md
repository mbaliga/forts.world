# Glamoč Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `glamoc-fortress-q5566582` |
| Coordinates | 44.04197, 16.84401 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.04197/16.84401)) |
| Wikidata | [Q5566582](https://www.wikidata.org/wiki/Q5566582) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Glamoč |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, marker 1, road 20, building 39, wall 3, zone 26, waterway 8, cliff 1).

Evidence: documented 0, mapped 99, inferred 0, derived 0; heights documented 1, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232344288 historic=castle Q5566582 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.04197/16.84401) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=12; wikidata:Q5566582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/glamoc-fortress-q5566582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
