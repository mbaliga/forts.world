# Royal Palace of Madrid

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-palace-of-madrid-q171517` |
| Coordinates | 40.41783, -3.71436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.41783/-3.71436)) |
| Wikidata | [Q171517](https://www.wikidata.org/wiki/Q171517) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum\|official residence\|Monument (Spain)\|city palace\|royal palace |
| Administrative area | Madrid |
| Inception | 1735 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 45 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Construido sobre el solar del antiguo Alcázar tras un incendio en 1734. Proyectado por Juvara en 1735 y construido por Sachet de 1738 a 1764 bajo las influencias del clasicismo barroco. A partir de 1770 Sabatini añadió el ala sudeste y la gran escalera. |
| OSM `website` | https://www.patrimonionacional.es/ |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 48, road 284, building 87, retaining-wall 35, wall 8, water 12, zone 11).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 17, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/30399 historic=castle Q171517 47 m from ledger point
- roads capped: kept the 150 longest of 284 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.41783/-3.71436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum\|official residence\|Monument (Spain)\|city palace\|royal palace; sitelinks=45; wikidata:Q171517 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/royal-palace-of-madrid-q171517.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
