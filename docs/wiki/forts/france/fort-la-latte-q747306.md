# Fort la Latte

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-la-latte-q747306` |
| Coordinates | 48.66833, -2.28444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.66833/-2.28444)) |
| Wikidata | [Q747306](https://www.wikidata.org/wiki/Q747306) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Plévenon |
| Designations | classified historical monument |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.lefortlalatte.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, marker 3, road 64, coastline 1, zone 5, building 11, wall 11, cliff 2, water 1).

Evidence: documented 0, mapped 99, inferred 0, derived 1; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28431246 historic=castle Q747306 53 m from ledger point
- origin moved 53 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":405,"medianInside":0,"medianOutside":0.6}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.66833/-2.28444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q747306 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/fort-la-latte-q747306.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
