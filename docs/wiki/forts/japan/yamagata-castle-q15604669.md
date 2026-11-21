# Yamagata Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yamagata-castle-q15604669` |
| Coordinates | 38.25556, 140.32806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.25556/140.32806)) |
| Wikidata | [Q15604669](https://www.wikidata.org/wiki/Q15604669) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|hirajiro |
| Administrative area | Yamagata |
| Inception | 1357 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 4, road 193, building 1091, water 19, wall 8, retaining-wall 38, zone 2).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 0, inferred 0, unknown 166.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237928625 historic=castle Q15604669 130 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1091 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 112 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.25556/140.32806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|hirajiro; sitelinks=13; wikidata:Q15604669 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/yamagata-castle-q15604669.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
