# Fort Gorazda

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-gorazda-q20949377` |
| Coordinates | 42.39589, 18.76414 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.39589/18.76414)) |
| Wikidata | [Q20949377](https://www.wikidata.org/wiki/Q20949377) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Inception | 1884 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, road 12, wall 2, building 1).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207431732 historic=fort Q20949377 14 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.39589/18.76414) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q20949377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 16 elements); data/traces/fort-gorazda-q20949377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
