# Fort Orthen

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-orthen-q2276008` |
| Coordinates | 51.70565, 5.30756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.70565/5.30756)) |
| Wikidata | [Q2276008](https://www.wikidata.org/wiki/Q2276008) (CC0) |
| Wikidata class | fort |
| Types | fort\|built structure |
| Administrative area | 's-Hertogenbosch |
| Inception | 1630 |
| Designations | Rijksmonument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 318 elements (outline 1, marker 1, road 157, zone 40, water 4, waterway 2, building 697).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/952318741 historic=fort Q2276008 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 697 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.70565/5.30756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|built structure; sitelinks=3; wikidata:Q2276008 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 318 elements); data/traces/fort-orthen-q2276008.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
