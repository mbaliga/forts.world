# Torre de la Plata

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-plata-q2606632` |
| Coordinates | 37.3832, -5.99543 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.3832/-5.99543)) |
| Wikidata | [Q2606632](https://www.wikidata.org/wiki/Q2606632) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Seville |
| Designations | bien de interés cultural |
| Wikipedia language editions | 12 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 2, road 177, building 151, water 3, zone 17, retaining-wall 2, waterway 1).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 39, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/119589084 historic=citywalls 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.3832/-5.99543) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=12; wikidata:Q2606632 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/torre-de-la-plata-q2606632.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
