# San Juan de las Águilas Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-juan-de-las-aguilas-castle-q5757561` |
| Coordinates | 37.40139, -1.58028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.40139/-1.58028)) |
| Wikidata | [Q5757561](https://www.wikidata.org/wiki/Q5757561) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Águilas |
| Inception | 1759 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |
| OSM `website` | https://castillosricsol.es/castillo-de-san-juan-de-las-aguilas/ |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 51, building 7, coastline 1, water 2).

Evidence: documented 0, mapped 63, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233139402 historic=castle Q5757561 46 m from ledger point
- origin moved 47 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":185,"medianInside":0,"medianOutside":13.4}
- sea-1: DEM check ok {"cells":16,"medianInside":0.1,"medianOutside":9.3}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.40139/-1.58028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q5757561 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/san-juan-de-las-aguilas-castle-q5757561.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
