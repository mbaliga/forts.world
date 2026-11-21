# Dresden Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dresden-castle-q167314` |
| Coordinates | 51.05257, 13.73694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.05257/13.73694)) |
| Wikidata | [Q167314](https://www.wikidata.org/wiki/Q167314) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|château |
| Administrative area | Dresden |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `website` | http://www.skd.museum/de/museen-institutionen/residenzschloss/ |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 13, road 356, waterway 1, building 32, wall 48, zone 42, water 1, retaining-wall 18).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 46, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5764 historic=castle Q167314 6 m from ledger point
- roads capped: kept the 150 longest of 356 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.05257/13.73694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|château; sitelinks=32; wikidata:Q167314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/dresden-castle-q167314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
