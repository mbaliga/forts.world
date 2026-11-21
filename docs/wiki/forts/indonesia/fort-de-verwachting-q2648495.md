# Fort De Verwachting

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-verwachting-q2648495` |
| Coordinates | -2.05531, 125.97996 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-2.05531/125.97996)) |
| Wikidata | [Q2648495](https://www.wikidata.org/wiki/Q2648495) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Sanana |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 1, coastline 1, road 28, waterway 2, building 298, wall 1, water 1).

Evidence: documented 0, mapped 333, inferred 0, derived 1; heights documented 1, inferred 0, unknown 298.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1443115697 historic=castle 134 m from ledger point
- origin moved 144 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":31,"medianInside":3.8,"medianOutside":6.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-2.05531/125.97996) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q2648495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/fort-de-verwachting-q2648495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
