# Castillo de San Miguel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-miguel-q5757574` |
| Coordinates | 36.7307, -3.6927 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.7307/-3.6927)) |
| Wikidata | [Q5757574](https://www.wikidata.org/wiki/Q5757574) (CC0) |
| Wikidata class | fort |
| Types | fortification\|archaeological site\|fortress |
| Administrative area | Almuñécar |
| Designations | bien de interés cultural |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 3, coastline 1, road 136, zone 6, building 500, wall 10, waterway 1, water 1).

Evidence: documented 0, mapped 279, inferred 0, derived 1; heights documented 1, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/408659717 historic=castle Q5757574 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 500 mapped (trace size budget); the rest of the town is not drawn
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":333,"medianInside":0,"medianOutside":11.8}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.7307/-3.6927) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|archaeological site\|fortress; sitelinks=10; wikidata:Q5757574 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/castillo-de-san-miguel-q5757574.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
