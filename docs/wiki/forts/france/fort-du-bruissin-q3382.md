# Fort du Bruissin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-bruissin-q3382` |
| Coordinates | 45.73053, 4.73851 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.73053/4.73851)) |
| Wikidata | [Q3382](https://www.wikidata.org/wiki/Q3382) (CC0) |
| Wikidata class | fort |
| Types | fortress\|fort |
| Administrative area | Francheville |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, road 63, building 330, retaining-wall 1, water 2, wall 3, zone 3).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 1, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23088545 historic=fort 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 330 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.73053/4.73851) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|fort; sitelinks=4; wikidata:Q3382 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/fort-du-bruissin-q3382.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
