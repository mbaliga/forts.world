# Ximenes Redoubt

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ximenes-redoubt-q20667116` |
| Coordinates | 35.94789, 14.42575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.94789/14.42575)) |
| Wikidata | [Q20667116](https://www.wikidata.org/wiki/Q20667116) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Naxxar |
| Inception | 1715 |
| Designations | Grade 1 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 81 elements (outline 1, road 44, building 18, waterway 1, water 6, wall 8, coastline 2, zone 1).

Evidence: documented 0, mapped 81, inferred 0, derived 3; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406046882 historic=(none; chosen by its Wikidata id) Q20667116 7 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":102,"medianInside":0.3,"medianOutside":9.6}
- sea-1: DEM check failed {"cells":391,"medianInside":6.9,"medianOutside":0.3}
- sea-2: DEM check failed {"cells":400,"medianInside":6.7,"medianOutside":0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.94789/14.42575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=3; wikidata:Q20667116 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 81 elements); data/traces/ximenes-redoubt-q20667116.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 81 elements; outline osm:way/406046882 historic=(none; chosen by its Wikidata id) Q20667116 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
