# Karlshamns Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karlshamns-castle-q10543837` |
| Coordinates | 56.16006, 14.86561 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.16006/14.86561)) |
| Wikidata | [Q10543837](https://www.wikidata.org/wiki/Q10543837) (CC0) |
| Wikidata class | fort |
| Types | star fort\|sconce\|ancient monument |
| Administrative area | Karlshamn Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, marker 1, coastline 3, road 5, wall 5, building 5, waterway 1, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6550627 historic=fort Q10543837 17 m from ledger point
- island ring (35252 m2) cut out of sea-0
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":487,"medianInside":6,"medianOutside":5.3}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.16006/14.86561) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort\|sconce\|ancient monument; sitelinks=3; wikidata:Q10543837 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/karlshamns-castle-q10543837.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
