# Castle of Silves

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-silves-q1971757` |
| Coordinates | 37.19099, -8.43791 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.19099/-8.43791)) |
| Wikidata | [Q1971757](https://www.wikidata.org/wiki/Q1971757) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage\|archaeological site |
| Administrative area | Silves |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, waterway 2, road 147, wall 11, zone 7, building 107, water 1).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 1, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6669586 historic=castle Q1971757 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 29 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.19099/-8.43791) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage\|archaeological site; sitelinks=13; wikidata:Q1971757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/castle-of-silves-q1971757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
