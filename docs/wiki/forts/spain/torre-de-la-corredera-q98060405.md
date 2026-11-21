# Torre de la Corredera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-corredera-q98060405` |
| Coordinates | 36.25413, -5.96249 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.25413/-5.96249)) |
| Wikidata | [Q98060405](https://www.wikidata.org/wiki/Q98060405) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Vejer de la Frontera |
| Inception | 1500 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 8, road 131, waterway 1, building 373, wall 56, cliff 2, retaining-wall 16, zone 2).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 131, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/982348879 historic=yes 118 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 373 mapped (trace size budget); the rest of the town is not drawn
- origin moved 119 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.25413/-5.96249) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q98060405 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/torre-de-la-corredera-q98060405.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
