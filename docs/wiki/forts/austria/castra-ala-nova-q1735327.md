# Castra Ala Nova

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-ala-nova-q1735327` |
| Coordinates | 48.1439, 16.4699 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1439/16.4699)) |
| Wikidata | [Q1735327](https://www.wikidata.org/wiki/Q1735327) (CC0) |
| Wikidata class | fortification |
| Types | ancient Roman structure\|castrum |
| Administrative area | Schwechat |
| Wikipedia language editions | 5 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, wall 2, road 108, building 89, water 1, waterway 1, zone 6).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 15, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/335839659 historic=tomb Q55441146 101 m from ledger point
- origin moved 101 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1439/16.4699) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; ancient Roman structure\|castrum; sitelinks=5; wikidata:Q1735327 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 208 elements); data/traces/castra-ala-nova-q1735327.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
