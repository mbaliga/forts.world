# Muralla en el Paseo de Ramiro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-en-el-paseo-de-ramiro-q56604811` |
| Coordinates | 38.34611, -0.47871 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.34611/-0.47871)) |
| Wikidata | [Q56604811](https://www.wikidata.org/wiki/Q56604811) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Alicante |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 1, coastline 2, road 288, building 248, zone 6, wall 37, retaining-wall 13, water 1).

Evidence: documented 0, mapped 331, inferred 0, derived 1; heights documented 114, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/22561001 historic=castle Q11939847 98 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 248 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 96 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":24,"medianInside":1.2,"medianOutside":17.3}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.34611/-0.47871) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q56604811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/muralla-en-el-paseo-de-ramiro-q56604811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
