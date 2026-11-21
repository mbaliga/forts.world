# Wachturm Vom Faulturm bis zum Hohennersturm - Schwefelturm in Rothenburg ob der Tauber

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-vom-faulturm-bis-zum-hohennersturm-schw-q98632633` |
| Coordinates | 49.37541, 10.18305 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.37541/10.18305)) |
| Wikidata | [Q98632633](https://www.wikidata.org/wiki/Q98632633) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Rothenburg ob der Tauber |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 6, road 249, zone 40, waterway 1, building 420, wall 107, water 2, retaining-wall 18).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 48, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195714202 historic=citywalls 29 m from ledger point
- pruned to the outline plus 150 m: 844 -> 488 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 143 mapped (trace size budget); minor lanes are not drawn
- origin moved 27 m from the ledger point to the centre of the mapped site
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.37541/10.18305) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98632633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/wachturm-vom-faulturm-bis-zum-hohennersturm-schw-q98632633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
