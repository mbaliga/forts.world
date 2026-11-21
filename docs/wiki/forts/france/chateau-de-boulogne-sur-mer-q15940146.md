# Château de Boulogne-sur-Mer

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-boulogne-sur-mer-q15940146` |
| Coordinates | 50.7256, 1.6169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7256/1.6169)) |
| Wikidata | [Q15940146](https://www.wikidata.org/wiki/Q15940146) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 11, road 381, wall 4, building 2561, zone 2, water 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 1, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1358111 historic=citywalls 221 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 2561 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 381 mapped (trace size budget); minor lanes are not drawn
- origin moved 237 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7256/1.6169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q15940146 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/chateau-de-boulogne-sur-mer-q15940146.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
