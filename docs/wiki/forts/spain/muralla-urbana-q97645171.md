# Muralla urbana

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-urbana-q97645171` |
| Coordinates | 37.40284, -5.98843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.40284/-5.98843)) |
| Wikidata | [Q97645171](https://www.wikidata.org/wiki/Q97645171) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Seville |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 2, road 251, building 680, water 1, zone 9, wall 2).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 26, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28370223 historic=citywalls Q3831846 154 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 680 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 251 mapped (trace size budget); minor lanes are not drawn
- origin moved 156 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.40284/-5.98843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=0; wikidata:Q97645171 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/muralla-urbana-q97645171.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
