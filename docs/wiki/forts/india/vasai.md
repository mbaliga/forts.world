# Vasai (Bassein) Fort

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vasai` |
| Coordinates | 19.33, 72.815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.33/72.815)) |
| Wikidata | [Q3230299](https://www.wikidata.org/wiki/Q3230299) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Palghar district |
| Inception | 1184 |
| Designations | Heritage of Portuguese Influence\|Monument of National Importance |
| Wikipedia language editions | 14 |
| Programme catalogue | confidence high, significance rank 217; sources catalogue:vasai;wikidata:Q3230299;smith-newton:r69 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, marker 2, road 31, waterway 1, wall 1, building 7, water 2, coastline 2).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122375191 historic=castle Q3230299 77 m from ledger point
- origin moved 72 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":75,"medianInside":1.3,"medianOutside":4.6}
- 107 DEM cells below -3 m (bathymetry) clamped to -3 m
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.33/72.815) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/vasai.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
