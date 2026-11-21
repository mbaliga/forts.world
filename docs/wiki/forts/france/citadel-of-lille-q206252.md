# Citadel of Lille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-lille-q206252` |
| Coordinates | 50.64111, 3.04444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.64111/3.04444)) |
| Wikidata | [Q206252](https://www.wikidata.org/wiki/Q206252) (CC0) |
| Wikidata class | fort |
| Types | citadel\|fort |
| Administrative area | Lille |
| Designations | classified historical monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 2 |
| OSM `description` | La porte de la Citadelle : classement par arrêté du 9 mai 1914 - La chapelle : classement par arrêté du 11 janvier 1921 - La citadelle proprement dite avec ses bâtiments, ses bastions, ses fossés, ses demi-lunes et ses glacis ; l'ouvrage dit du Grand Car |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 5, road 305, building 75, retaining-wall 40, waterway 10, wall 44, water 9, zone 31).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 1, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1096436747 historic=castle Q206252 30 m from ledger point
- roads capped: kept the 150 longest of 305 mapped (trace size budget); minor lanes are not drawn
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.64111/3.04444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|fort; sitelinks=10; wikidata:Q206252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/citadel-of-lille-q206252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
