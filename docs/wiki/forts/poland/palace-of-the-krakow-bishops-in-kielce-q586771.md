# Palace of the Kraków Bishops in Kielce

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-krakow-bishops-in-kielce-q586771` |
| Coordinates | 50.86915, 20.62782 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.86915/20.62782)) |
| Wikidata | [Q586771](https://www.wikidata.org/wiki/Q586771) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural heritage monument |
| Administrative area | Kielce |
| Inception | 1641 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 18, road 464, water 4, building 149, wall 48, retaining-wall 7, waterway 4, zone 102, cliff 1).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 5, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/201180429 historic=castle Q586771 12 m from ledger point
- pruned to the outline plus 150 m: 798 -> 613 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 100 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 372 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.86915/20.62782) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural heritage monument; sitelinks=11; wikidata:Q586771 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/palace-of-the-krakow-bishops-in-kielce-q586771.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
