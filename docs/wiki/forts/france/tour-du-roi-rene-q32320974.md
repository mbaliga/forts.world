# Tour du roi René

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-du-roi-rene-q32320974` |
| Coordinates | 43.2947, 5.36286 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.2947/5.36286)) |
| Wikidata | [Q32320974](https://www.wikidata.org/wiki/Q32320974) (CC0) |
| Wikidata class | fort |
| Types | fort\|tower |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 5, road 235, coastline 10, building 59, water 8, retaining-wall 12, zone 4, wall 7).

Evidence: documented 0, mapped 341, inferred 0, derived 6; heights documented 10, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/67714466 historic=fort Q32320974 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":355,"medianInside":2.4,"medianOutside":3.5}
- sea-1: DEM check ok {"cells":386,"medianInside":2.2,"medianOutside":6.4}
- sea-2: DEM check ok {"cells":398,"medianInside":2.5,"medianOutside":4.2}
- sea-3: DEM check ok {"cells":399,"medianInside":2.5,"medianOutside":4.4}
- sea-4: DEM check ok {"cells":399,"medianInside":2.5,"medianOutside":4.4}
- sea-5: DEM check ok {"cells":263,"medianInside":0.1,"medianOutside":9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.2947/5.36286) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|tower; sitelinks=1; wikidata:Q32320974 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/tour-du-roi-rene-q32320974.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
