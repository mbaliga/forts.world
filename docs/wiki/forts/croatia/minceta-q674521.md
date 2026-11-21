# Minčeta

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `minceta-q674521` |
| Coordinates | 42.64283, 18.10859 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.64283/18.10859)) |
| Wikidata | [Q674521](https://www.wikidata.org/wiki/Q674521) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Dubrovnik |
| Wikipedia language editions | 9 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 1, road 221, wall 38, retaining-wall 11, building 323, cliff 3, water 3, coastline 2, zone 2).

Evidence: documented 0, mapped 332, inferred 0, derived 1; heights documented 0, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171296971 historic=citywalls 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 221 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":7,"medianInside":-0.7,"medianOutside":41.6}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.64283/18.10859) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=9; wikidata:Q674521 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/minceta-q674521.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
