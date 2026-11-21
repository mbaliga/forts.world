# Manoir de Kernault

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-kernault-q3286211` |
| Coordinates | 47.88854, -3.59765 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.88854/-3.59765)) |
| Wikidata | [Q3286211](https://www.wikidata.org/wiki/Q3286211) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor house |
| Administrative area | Mellac |
| Inception | C15 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |
| OSM `website` | https://www.cdp29.fr/fr/presentation-kernault-le-manoir-de-kernault |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 34, water 1, zone 21, building 4, wall 2).

Evidence: documented 0, mapped 63, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94968785 historic=castle Q3286211 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.88854/-3.59765) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor house; sitelinks=3; wikidata:Q3286211 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/manoir-de-kernault-q3286211.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
