# Castrum di Grado

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castrum-di-grado-q113381081` |
| Coordinates | 45.67667, 13.38508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.67667/13.38508)) |
| Wikidata | [Q113381081](https://www.wikidata.org/wiki/Q113381081) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Grado |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 13, road 192, building 377, water 4, zone 12, coastline 1, wall 39).

Evidence: documented 0, mapped 340, inferred 0, derived 1; heights documented 20, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1104376196 historic=building 70 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 377 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 70 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":119,"medianInside":0,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.67667/13.38508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113381081 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/castrum-di-grado-q113381081.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
