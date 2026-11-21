# Palais de la Berbie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-de-la-berbie-q3361047` |
| Coordinates | 43.92933, 2.14317 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.92933/2.14317)) |
| Wikidata | [Q3361047](https://www.wikidata.org/wiki/Q3361047) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum |
| Administrative area | Albi |
| Designations | World Heritage Site\|classified historical monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Historical monument: Palais de l'Archevêché : classement par liste de 1862;Décor en stuc de la chapelle Notre-Dame du 18s;boiseries du salon dit de Berbie;décor intérieur avec son plafond peint du grand salon dit de Daillon de Lude, du 17s;cheminé |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 2, road 138, building 424, water 3, waterway 3, wall 9, retaining-wall 4).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 11, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3243408 historic=castle Q3361047 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 424 mapped (trace size budget); the rest of the town is not drawn
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.92933/2.14317) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum; sitelinks=10; wikidata:Q3361047 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/palais-de-la-berbie-q3361047.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
