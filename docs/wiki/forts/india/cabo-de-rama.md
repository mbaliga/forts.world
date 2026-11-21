# Cabo de Rama, Goa

> India · Goa · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cabo-de-rama` |
| Coordinates | 15.088631, 73.921643 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.088631/73.921643)) |
| Programme catalogue | confidence high, significance rank 256; sources catalogue:cabo-de-rama;wikidata:Q5015741;smith-newton:r178;smith-newton:r596 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, marker 2, coastline 2, road 7, waterway 1, building 9, water 3).

Evidence: documented 0, mapped 25, inferred 0, derived 3; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/265848074 historic=fort 267 m from ledger point
- origin moved 266 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1664,"medianInside":3.3,"medianOutside":27}
- sea-1: DEM check ok {"cells":462,"medianInside":5.8,"medianOutside":17.6}
- sea-2: DEM check ok {"cells":1660,"medianInside":3.7,"medianOutside":27}
- 138 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.088631/73.921643) | 2026-11-02 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-02 |

## Research notes

- [docs/research/cabo-de-rama-mapped-headland.md](../../../research/cabo-de-rama-mapped-headland.md)
- [docs/research/cabo-de-rama-pass.md](../../../research/cabo-de-rama-pass.md)

## Ledger note

src/levels/cabo-de-rama.trace.js (curation tools/trace/curation/cabo-de-rama.mjs), level src/levels/cabo-de-rama.js; eras 1763/~1805/today (boundary, coast, sea carried back, inferred; church from 1805, inferred). Only boundary, coast, church, footways and village buildings are drawn: no mapped wall line, gate, bastion, tank or height exists; OSM 60 m retaining-wall tag rejected; British dates conflict. T2 needs: Phaldesai 2001 fig 7.1 and pp.365-369, Goa archaeology survey drawings, wall heights. docs/research/cabo-de-rama-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
