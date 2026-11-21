# bunker in Punta Mabrera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-in-punta-mabrera-q115640641` |
| Coordinates | 41.21814, 1.74312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.21814/1.74312)) |
| Wikidata | [Q115640641](https://www.wikidata.org/wiki/Q115640641) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Vilanova i la Geltrú |
| Inception | 1937 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, road 116, coastline 2, waterway 3, building 57, wall 13, water 2).

Evidence: documented 0, mapped 194, inferred 0, derived 2; heights documented 50, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/610319721 historic=yes 496 m from ledger point
- origin moved 495 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":24,"medianInside":0,"medianOutside":5.8}
- sea-1: DEM check ok {"cells":28,"medianInside":0.1,"medianOutside":5.9}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.21814/1.74312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q115640641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/bunker-in-punta-mabrera-q115640641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
