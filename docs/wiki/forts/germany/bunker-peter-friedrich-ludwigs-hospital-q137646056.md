# Bunker Peter-Friedrich-Ludwigs-Hospital

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-peter-friedrich-ludwigs-hospital-q137646056` |
| Coordinates | 53.14277, 8.20655 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.14277/8.20655)) |
| Wikidata | [Q137646056](https://www.wikidata.org/wiki/Q137646056) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Oldenburg |
| Inception | 1940 |
| Designations | cultural heritage monument in Lower Saxony |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 3, road 160, building 211, waterway 2, water 1, zone 13, wall 12).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 73, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193958490 historic=yes 45 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 160 mapped (trace size budget); minor lanes are not drawn
- origin moved 46 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.14277/8.20655) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=0; wikidata:Q137646056 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/bunker-peter-friedrich-ludwigs-hospital-q137646056.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
