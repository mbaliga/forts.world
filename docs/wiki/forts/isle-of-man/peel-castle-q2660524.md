# Peel Castle

> Isle of Man · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peel-castle-q2660524` |
| Coordinates | 54.22645, -4.6991 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.22645/-4.6991)) |
| Wikidata | [Q2660524](https://www.wikidata.org/wiki/Q2660524) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Peel |
| Inception | 1860 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | https://manxnationalheritage.im/our-sites/peel-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 121 elements (outline 1, marker 4, road 52, water 5, wall 41, zone 4, building 11, coastline 1, cliff 1).

Evidence: documented 0, mapped 121, inferred 0, derived 3; heights documented 0, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59700905 historic=castle Q2660524 27 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":95,"medianInside":17,"medianOutside":3}
- sea-1: DEM check ok {"cells":413,"medianInside":2.4,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":1109,"medianInside":2,"medianOutside":4}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.22645/-4.6991) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q2660524 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 121 elements); data/traces/peel-castle-q2660524.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/isle-of-man.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
