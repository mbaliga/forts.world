# Torre de la Malmuerta

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-malmuerta-q2696372` |
| Coordinates | 37.89173, -4.77766 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.89173/-4.77766)) |
| Wikidata | [Q2696372](https://www.wikidata.org/wiki/Q2696372) (CC0) |
| Wikidata class | fortification |
| Types | watchtower\|albarrana tower |
| Administrative area | Córdoba |
| Inception | 1500 |
| Wikipedia language editions | 10 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 1, road 271, building 616, zone 13, waterway 4, water 5, retaining-wall 3, wall 20).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 23, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/429285055 historic=citywalls 868 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 616 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 271 mapped (trace size budget); minor lanes are not drawn
- origin moved 866 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.89173/-4.77766) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower\|albarrana tower; sitelinks=10; wikidata:Q2696372 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/torre-de-la-malmuerta-q2696372.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
