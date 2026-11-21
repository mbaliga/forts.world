# Alexander Battery

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alexander-battery-q67484726` |
| Coordinates | 60.13477, 24.99908 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.13477/24.99908)) |
| Wikidata | [Q67484726](https://www.wikidata.org/wiki/Q67484726) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|artillery battery\|barracks |
| Administrative area | Helsinki |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 69 elements (outline 1, road 42, coastline 2, building 6, retaining-wall 7, cliff 2, zone 4, waterway 3, water 2).

Evidence: documented 0, mapped 69, inferred 0, derived 2; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1622785 historic=castle Q1292442 1508 m from ledger point
- origin moved 1101 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":81,"medianInside":16.8,"medianOutside":21.5}
- sea-1: DEM check failed {"cells":11,"medianInside":17,"medianOutside":19.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.13477/24.99908) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|artillery battery\|barracks; sitelinks=1; wikidata:Q67484726 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 69 elements); data/traces/alexander-battery-q67484726.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
