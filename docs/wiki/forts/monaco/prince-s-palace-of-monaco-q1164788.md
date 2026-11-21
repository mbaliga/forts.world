# Prince's Palace of Monaco

> Monaco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prince-s-palace-of-monaco-q1164788` |
| Coordinates | 43.73128, 7.42015 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.73128/7.42015)) |
| Wikidata | [Q1164788](https://www.wikidata.org/wiki/Q1164788) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Monaco-Ville |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.palais.mc/ |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 17, road 376, retaining-wall 14, building 110, wall 2, cliff 4, coastline 5, zone 5, water 2).

Evidence: documented 0, mapped 310, inferred 0, derived 2; heights documented 67, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/393226 historic=castle Q1164788 12 m from ledger point
- roads capped: kept the 150 longest of 376 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":463,"medianInside":28.2,"medianOutside":10.1}
- sea-1: DEM check ok {"cells":109,"medianInside":5.6,"medianOutside":32.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.73128/7.42015) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=32; wikidata:Q1164788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/prince-s-palace-of-monaco-q1164788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/monaco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
