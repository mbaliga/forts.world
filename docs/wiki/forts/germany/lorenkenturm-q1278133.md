# Lorenkenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lorenkenturm-q1278133` |
| Coordinates | 51.8315, 7.27861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8315/7.27861)) |
| Wikidata | [Q1278133](https://www.wikidata.org/wiki/Q1278133) (CC0) |
| Wikidata class | fort |
| Types | tower\|fortified tower |
| Administrative area | Dülmen |
| Inception | 1500 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 12, road 122, building 371, wall 3).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 7, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161701372 historic=yes Q1278133 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 371 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8315/7.27861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|fortified tower; sitelinks=2; wikidata:Q1278133 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/lorenkenturm-q1278133.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
