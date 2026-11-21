# Güvercinada Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `guvercinada-castle-q126915860` |
| Coordinates | 37.86364, 27.24767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.86364/27.24767)) |
| Wikidata | [Q126915860](https://www.wikidata.org/wiki/Q126915860) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Kuşadası district |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 34 elements (outline 1, marker 3, coastline 3, road 19, wall 1, building 6, water 1).

Evidence: documented 0, mapped 34, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/740168986 historic=castle Q126915860 9 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":338,"medianInside":0,"medianOutside":0.6}
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.86364/27.24767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=5; wikidata:Q126915860 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 34 elements); data/traces/guvercinada-castle-q126915860.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
