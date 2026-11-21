# Počitelj Citadel

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pocitelj-citadel-q3798371` |
| Coordinates | 43.13533, 17.73157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.13533/17.73157)) |
| Wikidata | [Q3798371](https://www.wikidata.org/wiki/Q3798371) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Počitelj |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `fortification_type` | citadel |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, marker 2, waterway 1, road 46, zone 11, wall 25, building 112, water 1, retaining-wall 27, cliff 6).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 1, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19475186 historic=castle Q3798371 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.13533/17.73157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=6; wikidata:Q3798371 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 232 elements); data/traces/pocitelj-citadel-q3798371.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
