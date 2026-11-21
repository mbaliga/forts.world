# Fortifications of Loudun

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-loudun-q22956056` |
| Coordinates | 47.00958, 0.08106 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.00958/0.08106)) |
| Wikidata | [Q22956056](https://www.wikidata.org/wiki/Q22956056) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Loudun |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 2, road 114, building 214, wall 36, zone 29, cliff 6).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 0, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/263938239 historic=castle 253 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 214 mapped (trace size budget); the rest of the town is not drawn
- origin moved 253 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.00958/0.08106) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=0; wikidata:Q22956056 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/fortifications-of-loudun-q22956056.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
