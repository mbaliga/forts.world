# Bordj Tamentfoust

> Algeria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bordj-tamentfoust-q16303490` |
| Coordinates | 36.80724, 3.23074 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.80724/3.23074)) |
| Wikidata | [Q16303490](https://www.wikidata.org/wiki/Q16303490) (CC0) |
| Wikidata class | fort |
| Types | fort\|building |
| Administrative area | Tamentfoust |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, road 30, zone 4, building 155, wall 1, coastline 1, water 4).

Evidence: documented 0, mapped 196, inferred 0, derived 4; heights documented 10, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4083823 historic=fort Q16303490 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5,"medianInside":1,"medianOutside":7.5}
- sea-1: DEM check ok {"cells":25,"medianInside":0.4,"medianOutside":7.9}
- sea-2: DEM check ok {"cells":41,"medianInside":1.1,"medianOutside":8.9}
- sea-3: DEM check ok {"cells":34,"medianInside":3.3,"medianOutside":8.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.80724/3.23074) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|building; sitelinks=7; wikidata:Q16303490 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/bordj-tamentfoust-q16303490.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/algeria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
