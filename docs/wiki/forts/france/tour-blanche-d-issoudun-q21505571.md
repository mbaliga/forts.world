# Tour Blanche d'Issoudun

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-blanche-d-issoudun-q21505571` |
| Coordinates | 46.94789, 1.98983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.94789/1.98983)) |
| Wikidata | [Q21505571](https://www.wikidata.org/wiki/Q21505571) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Issoudun |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, waterway 10, road 223, building 638, wall 44, zone 1, water 1).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 0, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/238738944 historic=building Q22940966 150 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 638 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- origin moved 150 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.94789/1.98983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=2; wikidata:Q21505571 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/tour-blanche-d-issoudun-q21505571.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
