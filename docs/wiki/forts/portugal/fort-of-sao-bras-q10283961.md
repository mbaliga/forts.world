# Fort of São Brás

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-sao-bras-q10283961` |
| Coordinates | 36.9463, -25.14672 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.9463/-25.14672)) |
| Wikidata | [Q10283961](https://www.wikidata.org/wiki/Q10283961) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 162 elements (outline 1, marker 1, road 40, building 96, retaining-wall 6, water 6, coastline 2, waterway 8, wall 2).

Evidence: documented 0, mapped 162, inferred 0, derived 2; heights documented 0, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/955303301 historic=fort Q10283961 25 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":47,"medianInside":4.2,"medianOutside":26.5}
- sea-1: DEM check ok {"cells":31,"medianInside":4.1,"medianOutside":24.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.9463/-25.14672) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q10283961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 162 elements); data/traces/fort-of-sao-bras-q10283961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
