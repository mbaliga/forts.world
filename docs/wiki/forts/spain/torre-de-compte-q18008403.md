# Torre de Compte

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-compte-q18008403` |
| Coordinates | 38.97275, 1.23041 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.97275/1.23041)) |
| Wikidata | [Q18008403](https://www.wikidata.org/wiki/Q18008403) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Sant Josep de sa Talaia |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, coastline 2, wall 2, building 2, road 3, cliff 1, zone 2, water 2).

Evidence: documented 0, mapped 15, inferred 0, derived 2; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/732213367 historic=yes Q18008403 4 m from ledger point
- island ring (1708 m2) cut out of sea-0
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":116,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":97,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.97275/1.23041) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q18008403 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/torre-de-compte-q18008403.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
