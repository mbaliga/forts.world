# Fort San Diego

> Mexico · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-diego-q3543967` |
| Coordinates | 16.85, -99.9024 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.85/-99.9024)) |
| Wikidata | [Q3543967](https://www.wikidata.org/wiki/Q3543967) (CC0) |
| Wikidata class | fort |
| Types | star fort |
| Administrative area | Acapulco de Juárez |
| Inception | 1616 |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, marker 1, wall 3, zone 2, building 29, road 50, coastline 1, water 4).

Evidence: documented 0, mapped 91, inferred 0, derived 4; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/158418 historic=castle Q3543967 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":188,"medianInside":-5.1,"medianOutside":12.5}
- sea-1: DEM check ok {"cells":23,"medianInside":4.1,"medianOutside":11.9}
- sea-2: DEM check ok {"cells":14,"medianInside":5.9,"medianOutside":11.8}
- sea-3: DEM check failed {"cells":0,"medianInside":null,"medianOutside":11.7}
- 628 DEM cells below -3 m (bathymetry) clamped to -3 m
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.85/-99.9024) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort; sitelinks=9; wikidata:Q3543967 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/fort-san-diego-q3543967.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mexico.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
