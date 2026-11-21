# Muralla de la Figuera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-la-figuera-q43126407` |
| Coordinates | 41.21677, 0.73143 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.21677/0.73143)) |
| Wikidata | [Q43126407](https://www.wikidata.org/wiki/Q43126407) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|city walls |
| Administrative area | La Figuera |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, road 61, zone 19, building 209, wall 21).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 3, inferred 0, unknown 227.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1309916675 historic=fort 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.21677/0.73143) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|city walls; sitelinks=1; wikidata:Q43126407 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/muralla-de-la-figuera-q43126407.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
