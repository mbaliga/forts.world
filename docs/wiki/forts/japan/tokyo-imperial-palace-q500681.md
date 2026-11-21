# Tokyo Imperial Palace

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tokyo-imperial-palace-q500681` |
| Coordinates | 35.68386, 139.75083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.68386/139.75083)) |
| Wikidata | [Q500681](https://www.wikidata.org/wiki/Q500681) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|royal palace\|Japanese Imperial Facilities |
| Administrative area | Chiyoda |
| Inception | 1868 |
| Wikipedia language editions | 45 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 382 elements (outline 1, marker 1, water 9, road 154, building 173, zone 33, retaining-wall 1, wall 10).

Evidence: documented 0, mapped 382, inferred 0, derived 0; heights documented 0, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7676266 historic=castle Q500681 72 m from ledger point
- origin moved 117 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.68386/139.75083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|royal palace\|Japanese Imperial Facilities; sitelinks=45; wikidata:Q500681 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 382 elements); data/traces/tokyo-imperial-palace-q500681.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
