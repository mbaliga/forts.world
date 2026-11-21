# Fort Zeelandia

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-zeelandia-q20706255` |
| Coordinates | 23.00175, 120.16092 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.00175/120.16092)) |
| Wikidata | [Q20706255](https://www.wikidata.org/wiki/Q20706255) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Anping District |
| Inception | 1624 |
| Designations | country-level monument |
| Wikipedia language editions | 24 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 5, water 5, road 104, wall 4, waterway 1, building 226, coastline 1, zone 5).

Evidence: documented 0, mapped 352, inferred 0, derived 1; heights documented 7, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1248733360 historic=castle Q20706255 64 m from ledger point
- origin moved 63 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":67,"medianInside":-4.6,"medianOutside":3.5}
- 330 DEM cells below -3 m (bathymetry) clamped to -3 m
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.00175/120.16092) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=24; wikidata:Q20706255 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/fort-zeelandia-q20706255.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
