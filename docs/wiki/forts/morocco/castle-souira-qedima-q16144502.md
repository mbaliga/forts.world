# Castle Souira Qedima

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-souira-qedima-q16144502` |
| Coordinates | 32.05056, -9.34111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.05056/-9.34111)) |
| Wikidata | [Q16144502](https://www.wikidata.org/wiki/Q16144502) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Souira Guedima |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, coastline 1, zone 1, road 4, building 4, wall 2, retaining-wall 1, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/319393521 historic=castle 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":186,"medianInside":-0.5,"medianOutside":4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.05056/-9.34111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q16144502 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/castle-souira-qedima-q16144502.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
