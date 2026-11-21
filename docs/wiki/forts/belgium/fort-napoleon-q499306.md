# Fort Napoleon

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-napoleon-q499306` |
| Coordinates | 51.23889, 2.93417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.23889/2.93417)) |
| Wikidata | [Q499306](https://www.wikidata.org/wiki/Q499306) (CC0) |
| Wikidata class | fort |
| Types | museum\|military museum\|military training area\|fort |
| Administrative area | Ostend |
| Designations | beschermd monument |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `heritage` | 4 |
| OSM `website` | https://www.fort-napoleon.be/ |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, road 36, water 2, wall 1, retaining-wall 2, zone 2, building 6, coastline 1).

Evidence: documented 0, mapped 51, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12750454 historic=fort Q499306 17 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":287,"medianInside":2,"medianOutside":6.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.23889/2.93417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|military museum\|military training area\|fort; sitelinks=8; wikidata:Q499306 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/fort-napoleon-q499306.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
