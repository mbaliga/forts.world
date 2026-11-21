# Castillo de San Pedro de la Roca

> Cuba · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-pedro-de-la-roca-q910189` |
| Coordinates | 19.96871, -75.8703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.96871/-75.8703)) |
| Wikidata | [Q910189](https://www.wikidata.org/wiki/Q910189) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Santiago de Cuba |
| Designations | World Heritage Site |
| UNESCO WHC id | 841 |
| Wikipedia language editions | 36 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Castillo Patrimonio Cultural de la Humanidad |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, road 7, building 8, wall 4, coastline 2, cliff 2, water 2).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20345825 historic=castle Q910189 14 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":212,"medianInside":6.4,"medianOutside":42.1}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.96871/-75.8703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=36; wikidata:Q910189 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/castillo-de-san-pedro-de-la-roca-q910189.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cuba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
