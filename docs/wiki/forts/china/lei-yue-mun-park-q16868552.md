# Lei Yue Mun Park

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lei-yue-mun-park-q16868552` |
| Coordinates | 22.2771, 114.23395 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.2771/114.23395)) |
| Wikidata | [Q16868552](https://www.wikidata.org/wiki/Q16868552) (CC0) |
| Wikidata class | fort |
| Types | fort\|park\|barracks\|resort |
| Administrative area | Eastern District |
| Inception | 1988 |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `website` | https://www.lcsd.gov.hk/camp/b5/p_lymp.php |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, road 208, building 152, waterway 2, wall 2, zone 6, cliff 27, retaining-wall 1, coastline 2, water 1).

Evidence: documented 0, mapped 312, inferred 0, derived 1; heights documented 34, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/557930264 historic=fort Q16868552 84 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 208 mapped (trace size budget); minor lanes are not drawn
- origin moved 86 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5,"medianInside":9.1,"medianOutside":52.3}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.2771/114.23395) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|park\|barracks\|resort; sitelinks=6; wikidata:Q16868552 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/lei-yue-mun-park-q16868552.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
