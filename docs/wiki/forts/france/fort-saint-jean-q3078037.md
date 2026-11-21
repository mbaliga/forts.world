# Fort Saint-Jean

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-jean-q3078037` |
| Coordinates | 45.7706, 4.8151 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7706/4.8151)) |
| Wikidata | [Q3078037](https://www.wikidata.org/wiki/Q3078037) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | 1st arrondissement of Lyon |
| Inception | 1834 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 3, road 294, waterway 1, building 178, retaining-wall 24, cliff 5, wall 16, zone 15).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 10, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/512708363 historic=castle Q3078037 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 178 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 294 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7706/4.8151) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q3078037 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/fort-saint-jean-q3078037.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
