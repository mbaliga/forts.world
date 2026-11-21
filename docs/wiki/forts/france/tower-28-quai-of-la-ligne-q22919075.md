# Tower, 28 quai of la Ligne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-28-quai-of-la-ligne-q22919075` |
| Coordinates | 43.95366, 4.80947 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.95366/4.80947)) |
| Wikidata | [Q22919075](https://www.wikidata.org/wiki/Q22919075) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Avignon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 9, road 233, building 129, zone 20, wall 22, retaining-wall 2, cliff 1, water 6, waterway 3).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 19, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1253215 historic=castle Q22919067 258 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 129 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 252 m from the ledger point to the centre of the mapped site
- 31 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.95366/4.80947) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22919075 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/tower-28-quai-of-la-ligne-q22919075.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
