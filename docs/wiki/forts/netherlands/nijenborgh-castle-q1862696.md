# Nijenborgh Castle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nijenborgh-castle-q1862696` |
| Coordinates | 51.25652, 5.70891 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.25652/5.70891)) |
| Wikidata | [Q1862696](https://www.wikidata.org/wiki/Q1862696) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Weert |
| Inception | 1923 |
| Designations | Rijksmonument |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `ruins` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 2, road 133, water 4, zone 41, waterway 2, building 223, retaining-wall 2, wall 24).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 13, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1098350610 historic=ruins 52 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 223 mapped (trace size budget); the rest of the town is not drawn
- origin moved 53 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.25652/5.70891) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=4; wikidata:Q1862696 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/nijenborgh-castle-q1862696.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
