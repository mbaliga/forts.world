# Castillo de Santa Ana

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-santa-ana-q16544769` |
| Coordinates | 36.75401, -2.60598 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.75401/-2.60598)) |
| Wikidata | [Q16544769](https://www.wikidata.org/wiki/Q16544769) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Roquetas de Mar |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `website` | https://www.aytoroquetas.org/seccion/lugares-historicos_209 |

## What the model contains

Tier **T1**, status `outline-only`, 177 elements (outline 1, coastline 1, road 68, building 101, zone 2, water 3, retaining-wall 1).

Evidence: documented 0, mapped 177, inferred 0, derived 2; heights documented 95, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/236723589 historic=castle Q16544769 16 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":132,"medianInside":0,"medianOutside":6.6}
- sea-1: DEM check ok {"cells":32,"medianInside":0,"medianOutside":3.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.75401/-2.60598) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q16544769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 177 elements); data/traces/castillo-de-santa-ana-q16544769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
