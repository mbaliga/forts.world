# Palacete Seixas

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-seixas-q64504994` |
| Coordinates | 38.69755, -9.41866 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69755/-9.41866)) |
| Wikidata | [Q64504994](https://www.wikidata.org/wiki/Q64504994) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage\|wardroom |
| Administrative area | Cascais e Estoril |
| Inception | 1916 |
| Designations | Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, marker 1, road 111, retaining-wall 3, building 351, wall 7, zone 10, water 4, waterway 1, coastline 1).

Evidence: documented 0, mapped 259, inferred 0, derived 2; heights documented 29, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/147322725 historic=castle Q64504994 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":6,"medianOutside":0}
- sea-1: DEM check ok {"cells":192,"medianInside":0,"medianOutside":11.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69755/-9.41866) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage\|wardroom; sitelinks=1; wikidata:Q64504994 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/palacete-seixas-q64504994.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
