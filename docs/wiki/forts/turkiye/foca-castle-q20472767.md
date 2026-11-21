# Foça Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `foca-castle-q20472767` |
| Coordinates | 38.66922, 26.75082 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.66922/26.75082)) |
| Wikidata | [Q20472767](https://www.wikidata.org/wiki/Q20472767) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Foça district |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 74 elements (outline 1, coastline 2, road 24, zone 1, building 42, wall 3, water 1).

Evidence: documented 0, mapped 74, inferred 0, derived 1; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15582854 historic=castle Q20472767 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":263,"medianInside":0,"medianOutside":5.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.66922/26.75082) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q20472767 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 74 elements); data/traces/foca-castle-q20472767.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
