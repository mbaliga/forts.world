# Castillo de San Felipe

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-felipe-q5757552` |
| Coordinates | 28.41444, -16.55861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.41444/-16.55861)) |
| Wikidata | [Q5757552](https://www.wikidata.org/wiki/Q5757552) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|concert hall\|monument\|exhibition space |
| Administrative area | Puerto de la Cruz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 120 elements (outline 1, marker 1, building 15, road 82, zone 8, waterway 1, coastline 2, retaining-wall 9, water 1).

Evidence: documented 0, mapped 120, inferred 0, derived 1; heights documented 9, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/47638732 historic=castle Q5757552 11 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":520,"medianInside":0,"medianOutside":12.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.41444/-16.55861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|concert hall\|monument\|exhibition space; sitelinks=10; wikidata:Q5757552 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 120 elements); data/traces/castillo-de-san-felipe-q5757552.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
