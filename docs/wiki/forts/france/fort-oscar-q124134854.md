# Fort Oscar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-oscar-q124134854` |
| Coordinates | 17.89728, -62.85356 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.89728/-62.85356)) |
| Wikidata | [Q124134854](https://www.wikidata.org/wiki/Q124134854) (CC0) |
| Wikidata class | fort |
| Types | military base\|fort |
| Administrative area | Saint Barthélemy |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 190 elements (outline 1, marker 1, road 42, building 138, coastline 1, zone 6, water 1).

Evidence: documented 0, mapped 190, inferred 0, derived 1; heights documented 12, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/399498051 historic=fort Q124134854 9 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":195,"medianInside":4.3,"medianOutside":11.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.89728/-62.85356) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; military base\|fort; sitelinks=4; wikidata:Q124134854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 190 elements); data/traces/fort-oscar-q124134854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
