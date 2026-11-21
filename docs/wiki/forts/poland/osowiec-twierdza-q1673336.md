# Osowiec-Twierdza

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `osowiec-twierdza-q1673336` |
| Coordinates | 53.4735, 22.66405 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4735/22.66405)) |
| Wikidata | [Q1673336](https://www.wikidata.org/wiki/Q1673336) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|human settlement |
| Administrative area | Gmina Goniądz |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `fortification_type` | ring_ditch |
| OSM `heritage` | no |
| OSM `description` | Twierdza Osowiec zbudowana przez Rosjan w latach 1882-1892. Twierdza składała się z 4 fortów: "Centralny" - fort nr 1, "Zarzeczny" - fort nr 2, "Szwedzki" - fort nr 3 i "Nowy” fort nr 4. |

## What the model contains

Tier **T1**, status `outline-only`, 36 elements (outline 1, zone 6, water 3, road 10, building 16).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 2, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/355196032 historic=castle Q1673336 65 m from ledger point
- origin moved 86 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4735/22.66405) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|human settlement; sitelinks=14; wikidata:Q1673336 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 36 elements); data/traces/osowiec-twierdza-q1673336.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
