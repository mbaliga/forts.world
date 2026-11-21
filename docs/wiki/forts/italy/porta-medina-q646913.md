# Porta Medina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-medina-q646913` |
| Coordinates | 40.83333, 14.25 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.83333/14.25)) |
| Wikidata | [Q646913](https://www.wikidata.org/wiki/Q646913) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Naples |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://palazzorealedinapoli.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 10, coastline 1, road 304, building 180, wall 9, zone 17, retaining-wall 12, water 4).

Evidence: documented 0, mapped 324, inferred 0, derived 3; heights documented 14, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/62237 historic=castle Q426339 362 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 180 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 304 mapped (trace size budget); minor lanes are not drawn
- origin moved 364 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":32,"medianInside":0.1,"medianOutside":29.2}
- sea-1: DEM check failed {"cells":841,"medianInside":28.8,"medianOutside":null}
- sea-2: DEM check ok {"cells":29,"medianInside":0,"medianOutside":29.1}
- 36 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.83333/14.25) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q646913 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/porta-medina-q646913.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
