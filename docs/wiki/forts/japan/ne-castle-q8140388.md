# Ne Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ne-castle-q8140388` |
| Coordinates | 40.50619, 141.45961 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.50619/141.45961)) |
| Wikidata | [Q8140388](https://www.wikidata.org/wiki/Q8140388) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Nejō |
| Inception | 1334 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 13 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 3, waterway 10, road 145, building 813, wall 31, zone 11, retaining-wall 1, water 1).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 4, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/554500495 historic=fort Q8140388 225 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 813 mapped (trace size budget); the rest of the town is not drawn
- origin moved 221 m from the ledger point to the outline centroid
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.50619/141.45961) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=13; wikidata:Q8140388 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/ne-castle-q8140388.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
