# Kastelholm Castle

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastelholm-castle-q1735335` |
| Coordinates | 60.2329, 20.08066 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.2329/20.08066)) |
| Wikidata | [Q1735335](https://www.wikidata.org/wiki/Q1735335) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Sund |
| Inception | 1400 |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `website` | https://www.kastelholm.ax |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, coastline 2, road 24, building 9, waterway 2, water 3).

Evidence: documented 0, mapped 41, inferred 0, derived 2; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/230385754 historic=castle Q1735335 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":294,"medianInside":19.8,"medianOutside":21.4}
- sea-1: DEM check failed {"cells":206,"medianInside":19.5,"medianOutside":21.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.2329/20.08066) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=19; wikidata:Q1735335 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 41 elements); data/traces/kastelholm-castle-q1735335.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
