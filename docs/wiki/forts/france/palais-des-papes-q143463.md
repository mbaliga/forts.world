# Palais des Papes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-des-papes-q143463` |
| Coordinates | 43.95072, 4.80758 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.95072/4.80758)) |
| Wikidata | [Q143463](https://www.wikidata.org/wiki/Q143463) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|art museum\|palace of the Popes |
| Administrative area | Avignon |
| Inception | C14 |
| Designations | classified historical monument |
| Wikipedia language editions | 46 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://palais-des-papes.com/fr |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 9, road 282, building 561, zone 8, wall 13, retaining-wall 2, water 5, waterway 1).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 32, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1253164 historic=castle Q143463 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 561 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 27 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.95072/4.80758) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|art museum\|palace of the Popes; sitelinks=46; wikidata:Q143463 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/palais-des-papes-q143463.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
