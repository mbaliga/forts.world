# Indrapatra Fort

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `indrapatra-fort-q56486827` |
| Coordinates | 5.63433, 95.4713 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.63433/95.4713)) |
| Wikidata | [Q56486827](https://www.wikidata.org/wiki/Q56486827) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort |
| Administrative area | Aceh |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, coastline 1, road 3, building 6, wall 2, waterway 2, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1320796697 historic=fort 36 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":60,"medianInside":2.4,"medianOutside":3.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.63433/95.4713) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort; sitelinks=3; wikidata:Q56486827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 17 elements); data/traces/indrapatra-fort-q56486827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
