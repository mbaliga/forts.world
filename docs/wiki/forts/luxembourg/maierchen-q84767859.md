# Maierchen

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maierchen-q84767859` |
| Coordinates | 49.60776, 6.13879 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.60776/6.13879)) |
| Wikidata | [Q84767859](https://www.wikidata.org/wiki/Q84767859) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Luxembourg |
| Inception | 1500 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 389 elements (outline 1, marker 1, road 213, building 80, retaining-wall 28, wall 21, water 2, waterway 8, zone 24, cliff 11).

Evidence: documented 0, mapped 389, inferred 0, derived 0; heights documented 12, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225017997 historic=fort 229 m from ledger point
- origin moved 229 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.60776/6.13879) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q84767859 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 389 elements); data/traces/maierchen-q84767859.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
