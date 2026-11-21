# Torna (Prachandagad)

> India · Maharashtra · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torna` |
| Coordinates | 18.276, 73.622 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.276/73.622)) |
| Programme catalogue | confidence high, significance rank 230; sources catalogue:torna;wikidata:Q7825964;smith-newton:r75 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (marker 2, road 9, building 5, water 4).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.276/73.622) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/torna-pass.md](../../../research/torna-pass.md)

## Ledger note

src/levels/torna.trace.js (curation tools/trace/curation/torna.mjs), level src/levels/torna-t1.js, registered in alpha-x0.js. No closed fort polygon is mapped; location-only scene with 2 markers, 9 paths, 5 buildings and 4 water bodies in a 1.6 km window (minHalf 800 m).. Missing for T2: Any plan or survey with the machis, gates, temple and cisterns; an OSM outline; wall heights. Research: docs/research/torna-pass.md. Batch-0 run 2026-11-15; written history not researched. Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 10/10), distinct from batch 0, alpha-K, alpha-L, alpha-X and the H set.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
