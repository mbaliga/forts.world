# Ramparts of Aigues-Mortes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-aigues-mortes-q3424607` |
| Coordinates | 43.5619, 4.19684 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5619/4.19684)) |
| Wikidata | [Q3424607](https://www.wikidata.org/wiki/Q3424607) (CC0) |
| Wikidata class | castle |
| Types | castle\|rampart |
| Administrative area | Aigues-Mortes |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | La confrérie des Pénitents gris d'Aigues-Mortes aurait été fondée au début du 15e siècle (1400 selon la tradition). Une chapelle fut élevée dès cette époque sur l'emplacement de la chapelle actuelle. |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, marker 2, road 83, water 1, waterway 1, building 829, wall 7, zone 5).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 4, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136742186 historic=yes Q2957357 491 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 829 mapped (trace size budget); the rest of the town is not drawn
- origin moved 491 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5619/4.19684) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|rampart; sitelinks=4; wikidata:Q3424607 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 220 elements); data/traces/ramparts-of-aigues-mortes-q3424607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
