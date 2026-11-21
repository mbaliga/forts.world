# Lynæs Fort

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lyn-s-fort-q30241705` |
| Coordinates | 55.947, 11.85475 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.947/11.85475)) |
| Wikidata | [Q30241705](https://www.wikidata.org/wiki/Q30241705) (CC0) |
| Wikidata class | fort |
| Types | fortification\|ancient monument |
| Administrative area | Halsnæs Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 73 elements (outline 1, road 29, water 2, zone 7, building 33, coastline 1).

Evidence: documented 0, mapped 73, inferred 0, derived 1; heights documented 1, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96412304 historic=fort Q30241705 20 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":183,"medianInside":0.1,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.947/11.85475) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|ancient monument; sitelinks=1; wikidata:Q30241705 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 73 elements); data/traces/lyn-s-fort-q30241705.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
