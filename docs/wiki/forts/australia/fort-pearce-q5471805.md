# Fort Pearce

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-pearce-q5471805` |
| Coordinates | -38.3067, 144.658 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-38.3067/144.658)) |
| Wikidata | [Q5471805](https://www.wikidata.org/wiki/Q5471805) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Victoria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, marker 2, coastline 2, road 20, zone 4, building 2, retaining-wall 1, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 1, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1127659393 historic=castle Q720563 593 m from ledger point
- origin moved 591 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":252,"medianInside":4,"medianOutside":12.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-38.3067/144.658) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q5471805 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/fort-pearce-q5471805.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
