# Bomarsund

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bomarsund-q834336` |
| Coordinates | 60.21222, 20.23833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.21222/20.23833)) |
| Wikidata | [Q834336](https://www.wikidata.org/wiki/Q834336) (CC0) |
| Wikidata class | ruin |
| Types | fortress\|ruins\|historic site |
| Administrative area | Sund |
| Inception | 1832 |
| Wikipedia language editions | 12 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 5, road 77, coastline 3, building 17, wall 15, zone 5, waterway 3, water 3).

Evidence: documented 0, mapped 129, inferred 0, derived 3; heights documented 2, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/218150765 historic=archaeological_site Q834336 22 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":21,"medianInside":15.6,"medianOutside":21.3}
- sea-1: DEM check ok {"cells":227,"medianInside":5.2,"medianOutside":22.5}
- sea-2: DEM check failed {"cells":886,"medianInside":21.2,"medianOutside":20.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.21222/20.23833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortress\|ruins\|historic site; sitelinks=12; wikidata:Q834336 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/bomarsund-q834336.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
