# Fort Gomer

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-gomer-q5471232` |
| Coordinates | 50.791, -1.165 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.791/-1.165)) |
| Wikidata | [Q5471232](https://www.wikidata.org/wiki/Q5471232) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Gosport |
| Inception | 1858 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 248 elements (outline 1, road 114, zone 9, waterway 2, building 354, water 2).

Evidence: documented 0, mapped 248, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/305692493 historic=fort Q5471232 96 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- origin moved 86 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.791/-1.165) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q5471232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 248 elements); data/traces/fort-gomer-q5471232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
