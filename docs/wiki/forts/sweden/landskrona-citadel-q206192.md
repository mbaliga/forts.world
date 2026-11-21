# Landskrona Citadel

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `landskrona-citadel-q206192` |
| Coordinates | 55.87306, 12.8225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.87306/12.8225)) |
| Wikidata | [Q206192](https://www.wikidata.org/wiki/Q206192) (CC0) |
| Wikidata class | fort |
| Types | fortress\|sconce\|architectural ensemble |
| Administrative area | Landskrona Municipality |
| Inception | 1559 |
| Designations | governmental listed building complex\|monument in Fornminnesregistret |
| Wikipedia language editions | 9 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 182 elements (outline 1, marker 3, coastline 4, road 85, wall 3, building 84, retaining-wall 1, water 1).

Evidence: documented 0, mapped 182, inferred 0, derived 1; heights documented 0, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237124920 historic=yes 435 m from ledger point
- origin moved 434 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":121,"medianInside":1.1,"medianOutside":5.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.87306/12.8225) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|sconce\|architectural ensemble; sitelinks=9; wikidata:Q206192 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 182 elements); data/traces/landskrona-citadel-q206192.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
