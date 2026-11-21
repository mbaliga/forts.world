# Fort Apollonia

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-apollonia-q2159452` |
| Coordinates | 4.987, -2.59 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/4.987/-2.59)) |
| Wikidata | [Q2159452](https://www.wikidata.org/wiki/Q2159452) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Western Region |
| Designations | Ghana’s material cultural heritage |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, coastline 1, road 13, building 14, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/937830248 historic=castle Q2159452 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":387,"medianInside":1.4,"medianOutside":7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/4.987/-2.59) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q2159452 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/fort-apollonia-q2159452.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
