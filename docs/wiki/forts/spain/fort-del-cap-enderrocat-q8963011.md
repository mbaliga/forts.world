# Fort del Cap Enderrocat

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-del-cap-enderrocat-q8963011` |
| Coordinates | 39.47611, 2.72472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.47611/2.72472)) |
| Wikidata | [Q8963011](https://www.wikidata.org/wiki/Q8963011) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Llucmajor |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, wall 6, road 13, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/388086520 historic=fort 445 m from ledger point
- origin moved 452 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":67,"medianInside":0,"medianOutside":46.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.47611/2.72472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q8963011 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/fort-del-cap-enderrocat-q8963011.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
