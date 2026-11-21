# Fort d'Ivry

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-d-ivry-q1203691` |
| Coordinates | 48.80222, 2.39 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.80222/2.39)) |
| Wikidata | [Q1203691](https://www.wikidata.org/wiki/Q1203691) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ivry-sur-Seine |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 1, road 202, zone 23, wall 15, building 468, water 2).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 4, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5658089 historic=fort Q1203691 39 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 468 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 40 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.80222/2.39) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q1203691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/fort-d-ivry-q1203691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
