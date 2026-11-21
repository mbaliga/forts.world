# Ruins of Szádvár

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruins-of-szadvar-q1300990` |
| Coordinates | 48.54455, 20.66378 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.54455/20.66378)) |
| Wikidata | [Q1300990](https://www.wikidata.org/wiki/Q1300990) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|medieval fortification |
| Administrative area | Szögliget |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 62 elements (outline 1, road 36, waterway 1, wall 24).

Evidence: documented 0, mapped 62, inferred 0, derived 0; heights documented 21, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/327500646 historic=ruins Q1300990 20 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.54455/20.66378) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|medieval fortification; sitelinks=3; wikidata:Q1300990 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 62 elements); data/traces/ruins-of-szadvar-q1300990.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
