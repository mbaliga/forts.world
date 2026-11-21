# Castle of Astypalaia

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-astypalaia-q38284794` |
| Coordinates | 36.54412, 26.35516 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.54412/26.35516)) |
| Wikidata | [Q38284794](https://www.wikidata.org/wiki/Q38284794) (CC0) |
| Wikidata class | fort |
| Types | fortified settlement |
| Administrative area | Astypalaia Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 1, coastline 1, road 33, zone 3, wall 1, cliff 1, building 271, water 2).

Evidence: documented 0, mapped 314, inferred 0, derived 2; heights documented 0, inferred 0, unknown 272.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/125102426 historic=castle 10 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":15,"medianInside":0.5,"medianOutside":68.3}
- sea-1: DEM check ok {"cells":12,"medianInside":7.1,"medianOutside":67.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.54412/26.35516) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified settlement; sitelinks=3; wikidata:Q38284794 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/castle-of-astypalaia-q38284794.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
