# Arco dei Becci

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-dei-becci-q3621762` |
| Coordinates | 43.4671, 11.0433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4671/11.0433)) |
| Wikidata | [Q3621762](https://www.wikidata.org/wiki/Q3621762) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | San Gimignano |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 3, road 144, zone 4, building 110, wall 14, waterway 3, retaining-wall 3).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 3, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1202967361 historic=citywalls 160 m from ledger point
- origin moved 160 m from the ledger point to the centre of the mapped site
- 38 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4671/11.0433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3621762 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/arco-dei-becci-q3621762.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
