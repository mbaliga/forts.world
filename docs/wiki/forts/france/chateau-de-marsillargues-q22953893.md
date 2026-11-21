# Château de Marsillargues

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-marsillargues-q22953893` |
| Coordinates | 43.66548, 4.17782 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.66548/4.17782)) |
| Wikidata | [Q22953893](https://www.wikidata.org/wiki/Q22953893) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Marsillargues |
| Inception | 1305 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `description` | Un château féodal devait exister vraisemblablement dès le 11e siècle. Du premier château édifié en 1305 par Guillaume de Nogaret ne subsiste que le donjon carré avec sa tourelle. |
| OSM `website` | https://www.pop.culture.gouv.fr/notice/merimee//PA00103500 |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 1, road 131, water 1, building 1254, waterway 1, wall 9, zone 1).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/414729566 historic=castle Q22953893 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1254 mapped (trace size budget); the rest of the town is not drawn
- origin moved 25 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.66548/4.17782) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q22953893 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/chateau-de-marsillargues-q22953893.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
