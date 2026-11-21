# Château Beaufort-en-Vallée

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-beaufort-en-vallee-q2968464` |
| Coordinates | 47.4391, -0.21933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.4391/-0.21933)) |
| Wikidata | [Q2968464](https://www.wikidata.org/wiki/Q2968464) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Beaufort-en-Anjou |
| Inception | 1100 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 2, road 89, waterway 2, building 351, zone 22, wall 4).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171404136 historic=castle 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.4391/-0.21933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2968464 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/chateau-beaufort-en-vallee-q2968464.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
