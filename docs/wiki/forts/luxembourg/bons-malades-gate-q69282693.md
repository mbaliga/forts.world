# Bons-Malades Gate

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bons-malades-gate-q69282693` |
| Coordinates | 49.61682, 6.13245 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.61682/6.13245)) |
| Wikidata | [Q69282693](https://www.wikidata.org/wiki/Q69282693) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Luxembourg |
| Inception | 1685 |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 5, road 202, building 137, wall 29, retaining-wall 24, water 3, zone 20, waterway 2, cliff 10).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 51, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52345103 historic=citywalls 111 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 137 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 111 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.61682/6.13245) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=3; wikidata:Q69282693 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/bons-malades-gate-q69282693.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
