# Motako Gaztelua-Castillo de la Mota

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `motako-gaztelua-castillo-de-la-mota-q12268644` |
| Coordinates | 43.32499, -1.98895 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.32499/-1.98895)) |
| Wikidata | [Q12268644](https://www.wikidata.org/wiki/Q12268644) (CC0) |
| Wikidata class | castle |
| Types | castle\|building\|military base\|monument |
| Administrative area | San Sebastián |
| Designations | Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 7, road 126, building 49, wall 13, coastline 2, retaining-wall 13, zone 11, water 3).

Evidence: documented 0, mapped 225, inferred 0, derived 2; heights documented 11, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28156564 historic=castle Q12268644 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":44.5}
- sea-1: DEM check failed {"cells":6,"medianInside":23.5,"medianOutside":45.3}
- 24 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.32499/-1.98895) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building\|military base\|monument; sitelinks=5; wikidata:Q12268644 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/motako-gaztelua-castillo-de-la-mota-q12268644.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
