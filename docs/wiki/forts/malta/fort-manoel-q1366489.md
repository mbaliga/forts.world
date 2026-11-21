# Fort Manoel

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-manoel-q1366489` |
| Coordinates | 35.90306, 14.505 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.90306/14.505)) |
| Wikidata | [Q1366489](https://www.wikidata.org/wiki/Q1366489) (CC0) |
| Wikidata class | fort |
| Types | star fort |
| Administrative area | Gżira |
| Inception | 1723 |
| Designations | Grade 1 |
| Wikipedia language editions | 14 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 131 elements (outline 1, marker 3, road 63, coastline 3, building 15, wall 34, retaining-wall 7, zone 2, water 2).

Evidence: documented 0, mapped 131, inferred 0, derived 2; heights documented 3, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/551701982 historic=fort Q1366489 23 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":870,"medianInside":0,"medianOutside":7.4}
- sea-1: DEM check ok {"cells":281,"medianInside":0.1,"medianOutside":3.6}
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.90306/14.505) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort; sitelinks=14; wikidata:Q1366489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 131 elements); data/traces/fort-manoel-q1366489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
