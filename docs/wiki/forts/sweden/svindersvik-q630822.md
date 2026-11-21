# Svindersvik

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `svindersvik-q630822` |
| Coordinates | 59.31022, 18.1305 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.31022/18.1305)) |
| Wikidata | [Q630822](https://www.wikidata.org/wiki/Q630822) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|museum\|cultural property\|manor house\|heritage site in Sweden |
| Administrative area | Nacka Municipality |
| Inception | 1740s |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.nordiskamuseet.se/slott-och-gardar/svindersvik |

## What the model contains

Tier **T1**, status `outline+walls`, 79 elements (outline 1, road 54, cliff 3, building 14, retaining-wall 2, coastline 1, wall 1, zone 1, water 2).

Evidence: documented 0, mapped 79, inferred 0, derived 2; heights documented 14, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46934908 historic=castle Q630822 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":162,"medianInside":13.6,"medianOutside":20.1}
- sea-1: DEM check failed {"cells":378,"medianInside":16.1,"medianOutside":16.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.31022/18.1305) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|museum\|cultural property\|manor house\|heritage site in Sweden; sitelinks=4; wikidata:Q630822 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 79 elements); data/traces/svindersvik-q630822.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
