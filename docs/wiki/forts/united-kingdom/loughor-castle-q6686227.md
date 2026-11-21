# Loughor Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `loughor-castle-q6686227` |
| Coordinates | 51.66221, -4.07711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.66221/-4.07711)) |
| Wikidata | [Q6686227](https://www.wikidata.org/wiki/Q6686227) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Llwchwr |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 104 elements (outline 1, road 48, zone 2, coastline 1, building 48, waterway 2, water 2).

Evidence: documented 0, mapped 104, inferred 0, derived 2; heights documented 30, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/222122369 historic=castle Q6686227 21 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":188,"medianInside":4,"medianOutside":8}
- sea-1: DEM check ok {"cells":35,"medianInside":3.7,"medianOutside":7.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.66221/-4.07711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=9; wikidata:Q6686227 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 104 elements); data/traces/loughor-castle-q6686227.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
