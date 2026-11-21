# Twthill, Caernarfon

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `twthill-caernarfon-q39006316` |
| Coordinates | 53.14292, -4.2704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.14292/-4.2704)) |
| Wikidata | [Q39006316](https://www.wikidata.org/wiki/Q39006316) (CC0) |
| Wikidata class | castle |
| Types | castle\|hill\|suburb |
| Administrative area | Caernarfon |
| Designations | National Monument of Wales |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 369 elements (outline 1, marker 9, coastline 2, road 406, building 381, zone 28, wall 52, waterway 1, retaining-wall 2, water 3).

Evidence: documented 0, mapped 369, inferred 0, derived 3; heights documented 59, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1493703310 historic=citywalls Q5016914 485 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 381 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 406 mapped (trace size budget); minor lanes are not drawn
- origin moved 485 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":960,"medianInside":8.3,"medianOutside":2}
- sea-1: DEM check ok {"cells":410,"medianInside":2.6,"medianOutside":11.2}
- sea-2: DEM check ok {"cells":908,"medianInside":8.1,"medianOutside":9.6}
- 100 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.14292/-4.2704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hill\|suburb; sitelinks=2; wikidata:Q39006316 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 369 elements); data/traces/twthill-caernarfon-q39006316.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
