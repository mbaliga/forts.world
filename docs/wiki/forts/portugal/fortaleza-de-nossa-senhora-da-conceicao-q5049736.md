# Fortaleza de Nossa Senhora da Conceição

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-nossa-senhora-da-conceicao-q5049736` |
| Coordinates | 41.378, -8.7642 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.378/-8.7642)) |
| Wikidata | [Q5049736](https://www.wikidata.org/wiki/Q5049736) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | União das Freguesias da Póvoa de Varzim, Beiriz e Argivai |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 7, road 149, building 500, coastline 1, zone 16, wall 9, water 4, retaining-wall 3).

Evidence: documented 0, mapped 311, inferred 0, derived 2; heights documented 9, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/154909664 historic=fort Q5049736 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 500 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":0,"medianOutside":7.1}
- sea-1: DEM check ok {"cells":4,"medianInside":0,"medianOutside":7.1}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.378/-8.7642) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=4; wikidata:Q5049736 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/fortaleza-de-nossa-senhora-da-conceicao-q5049736.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
