# Tour de la Saunerie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-la-saunerie-q22919074` |
| Coordinates | 43.94914, 4.81011 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.94914/4.81011)) |
| Wikidata | [Q22919074](https://www.wikidata.org/wiki/Q22919074) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Avignon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://palais-des-papes.com/fr |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 9, road 282, building 561, zone 8, wall 13, retaining-wall 2, water 5, waterway 1).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 32, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1253164 historic=castle Q143463 258 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 561 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 262 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.94914/4.81011) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22919074 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/tour-de-la-saunerie-q22919074.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
