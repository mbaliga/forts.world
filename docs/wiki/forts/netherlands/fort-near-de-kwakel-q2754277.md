# Fort near De Kwakel

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-near-de-kwakel-q2754277` |
| Coordinates | 52.23697, 4.7897 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.23697/4.7897)) |
| Wikidata | [Q2754277](https://www.wikidata.org/wiki/Q2754277) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Uithoorn |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 759-012 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 234 elements (outline 1, road 77, building 586, waterway 1, zone 19, water 16).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/951791025 historic=fort Q2754277 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 586 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 109 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.23697/4.7897) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=3; wikidata:Q2754277 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 234 elements); data/traces/fort-near-de-kwakel-q2754277.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
