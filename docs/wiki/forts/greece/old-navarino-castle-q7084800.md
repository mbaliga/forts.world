# Old Navarino Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-navarino-castle-q7084800` |
| Coordinates | 36.95828, 21.65707 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.95828/21.65707)) |
| Wikidata | [Q7084800](https://www.wikidata.org/wiki/Q7084800) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|fort |
| Administrative area | Municipality of Pylos-Nestor |
| Designations | archaeological site in Greece\|protected building in Greece |
| Wikipedia language editions | 12 |
| OSM `historic` | citywalls |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, marker 3, coastline 1, road 11, water 4, wall 3, zone 2).

Evidence: documented 0, mapped 26, inferred 0, derived 3; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/146968312 historic=citywalls Q7084800 33 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":0,"medianOutside":33.3}
- sea-1: DEM check ok {"cells":8,"medianInside":0,"medianOutside":33.4}
- sea-2: DEM check ok {"cells":163,"medianInside":0,"medianOutside":36.6}
- 568 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.95828/21.65707) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|fort; sitelinks=12; wikidata:Q7084800 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/old-navarino-castle-q7084800.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
