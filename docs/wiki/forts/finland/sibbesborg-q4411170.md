# Sibbesborg

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sibbesborg-q4411170` |
| Coordinates | 60.29228, 25.31949 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.29228/25.31949)) |
| Wikidata | [Q4411170](https://www.wikidata.org/wiki/Q4411170) (CC0) |
| Wikidata class | castle |
| Types | castle\|hillfort |
| Administrative area | Sipoo |
| Designations | registered archaeological site in Finland |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `description` | 1500-luvun linnan rauniot |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 36 elements (outline 1, road 13, zone 12, water 1, waterway 2, building 7).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/712255385 historic=archaeological_site Q4411170 38 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.29228/25.31949) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hillfort; sitelinks=6; wikidata:Q4411170 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 36 elements); data/traces/sibbesborg-q4411170.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
