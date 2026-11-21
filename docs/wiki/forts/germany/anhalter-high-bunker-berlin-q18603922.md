# Anhalter high bunker Berlin

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anhalter-high-bunker-berlin-q18603922` |
| Coordinates | 52.50278, 13.38028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.50278/13.38028)) |
| Wikidata | [Q18603922](https://www.wikidata.org/wiki/Q18603922) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Berlin |
| Designations | architectural heritage monument |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 6, road 322, waterway 1, water 1, building 73, zone 9, wall 5).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 63, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31418047 historic=citywalls 276 m from ledger point
- roads capped: kept the 150 longest of 322 mapped (trace size budget); minor lanes are not drawn
- origin moved 277 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.50278/13.38028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=2; wikidata:Q18603922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/anhalter-high-bunker-berlin-q18603922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
