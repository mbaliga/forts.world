# Delbekehuis

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `delbekehuis-q33100296` |
| Coordinates | 51.22207, 4.40637 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.22207/4.40637)) |
| Wikidata | [Q33100296](https://www.wikidata.org/wiki/Q33100296) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|house |
| Administrative area | Antwerp |
| Inception | 1516. |
| Designations | beschermd monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, marker 5, road 79, building 598, wall 1, zone 4).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/496126599 historic=castle Q33100296 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 598 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.22207/4.40637) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|house; sitelinks=1; wikidata:Q33100296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 210 elements); data/traces/delbekehuis-q33100296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
