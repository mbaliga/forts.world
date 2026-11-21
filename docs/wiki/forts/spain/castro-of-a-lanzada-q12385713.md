# Castro of A Lanzada

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-of-a-lanzada-q12385713` |
| Coordinates | 42.42907, -8.87484 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.42907/-8.87484)) |
| Wikidata | [Q12385713](https://www.wikidata.org/wiki/Q12385713) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|hillfort\|archaeological site |
| Administrative area | Noalla |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, road 26, coastline 2, building 11, wall 2, cliff 2, zone 1, water 2).

Evidence: documented 0, mapped 47, inferred 0, derived 2; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/234776669 historic=ruins Q12385713 7 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":81,"medianInside":0,"medianOutside":4.8}
- sea-1: DEM check ok {"cells":113,"medianInside":0,"medianOutside":5.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.42907/-8.87484) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|hillfort\|archaeological site; sitelinks=2; wikidata:Q12385713 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/castro-of-a-lanzada-q12385713.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
