# archbishop's palace of Split

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `archbishop-s-palace-of-split-q16112384` |
| Coordinates | 43.5067, 16.4426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5067/16.4426)) |
| Wikidata | [Q16112384](https://www.wikidata.org/wiki/Q16112384) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|archbishop's palace |
| Administrative area | Split |
| Inception | 1901 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 2, road 264, building 346, zone 12, wall 6, coastline 2, retaining-wall 10, water 1).

Evidence: documented 0, mapped 304, inferred 0, derived 1; heights documented 5, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/125506924 historic=castle Q16112384 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 346 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 264 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":54,"medianInside":0,"medianOutside":10.1}
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5067/16.4426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|archbishop's palace; sitelinks=6; wikidata:Q16112384 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/archbishop-s-palace-of-split-q16112384.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
