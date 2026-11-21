# Tour de Constance

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-constance-q1518963` |
| Coordinates | 43.56848, 4.1897 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.56848/4.1897)) |
| Wikidata | [Q1518963](https://www.wikidata.org/wiki/Q1518963) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Aigues-Mortes |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 239 elements (outline 1, marker 2, road 100, water 1, building 1115, wall 10, zone 4, retaining-wall 1).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 6, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136741937 historic=yes Q2957396 300 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1115 mapped (trace size budget); the rest of the town is not drawn
- origin moved 300 m from the ledger point to the outline centroid
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.56848/4.1897) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=6; wikidata:Q1518963 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 239 elements); data/traces/tour-de-constance-q1518963.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
