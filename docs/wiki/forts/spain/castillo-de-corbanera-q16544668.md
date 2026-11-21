# Castillo de Corbanera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-corbanera-q16544668` |
| Coordinates | 43.47718, -3.83556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.47718/-3.83556)) |
| Wikidata | [Q16544668](https://www.wikidata.org/wiki/Q16544668) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Santander |
| Inception | 1874 |
| Designations | Red List of Endangered Heritage item\|bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, road 57, building 146, coastline 2, zone 1, water 1).

Evidence: documented 0, mapped 209, inferred 0, derived 1; heights documented 145, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28951115 historic=castle Q16544668 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":1.1,"medianOutside":19}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.47718/-3.83556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q16544668 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/castillo-de-corbanera-q16544668.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
