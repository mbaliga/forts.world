# Château de Murol en Saint Amant

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-murol-en-saint-amant-q18181292` |
| Coordinates | 45.66776, 3.10834 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.66776/3.10834)) |
| Wikidata | [Q18181292](https://www.wikidata.org/wiki/Q18181292) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Saint-Amant-Tallende |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 200 elements (outline 1, marker 1, road 74, building 398, waterway 2, zone 2).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148934526 historic=castle Q18181292 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 398 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.66776/3.10834) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q18181292 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 200 elements); data/traces/chateau-de-murol-en-saint-amant-q18181292.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
