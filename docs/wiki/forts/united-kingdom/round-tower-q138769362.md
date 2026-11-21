# Round Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `round-tower-q138769362` |
| Coordinates | 51.48393, -0.60438 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.48393/-0.60438)) |
| Wikidata | [Q138769362](https://www.wikidata.org/wiki/Q138769362) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|tower |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 10, road 181, zone 70, building 183, waterway 1, wall 89, water 5, retaining-wall 22).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 1, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92729166 historic=castle Q138769362 2 m from ledger point
- pruned to the outline plus 150 m: 562 -> 300 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 91 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 83 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.48393/-0.60438) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|tower; sitelinks=1; wikidata:Q138769362 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/round-tower-q138769362.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
