# Castle of San Carlos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-carlos-q133286626` |
| Coordinates | 42.90456, -9.26085 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.90456/-9.26085)) |
| Wikidata | [Q133286626](https://www.wikidata.org/wiki/Q133286626) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|fortress |
| Administrative area | Fisterra, Fisterra |
| Inception | 1800 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, marker 5, road 130, building 32, wall 15, coastline 2, zone 3, water 1).

Evidence: documented 0, mapped 189, inferred 0, derived 1; heights documented 0, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/662624327 historic=castle Q133286626 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":174,"medianInside":0,"medianOutside":17.1}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.90456/-9.26085) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|fortress; sitelinks=2; wikidata:Q133286626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/castle-of-san-carlos-q133286626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
