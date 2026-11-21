# Fernandine Wall (Porto)

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fernandine-wall-porto-q10333266` |
| Coordinates | 41.14283, -8.60842 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14283/-8.60842)) |
| Wikidata | [Q10333266](https://www.wikidata.org/wiki/Q10333266) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|defensive wall |
| Administrative area | Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 21, road 502, building 556, retaining-wall 80, wall 178, zone 23, cliff 22, waterway 2, water 1).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 21, inferred 0, unknown 211.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/459911510 historic=citywalls 98 m from ledger point
- pruned to the outline plus 150 m: 1386 -> 877 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 361 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 316 mapped (trace size budget); minor lanes are not drawn
- origin moved 101 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14283/-8.60842) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|defensive wall; sitelinks=6; wikidata:Q10333266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/fernandine-wall-porto-q10333266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
