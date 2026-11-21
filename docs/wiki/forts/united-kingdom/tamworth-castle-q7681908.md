# Tamworth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tamworth-castle-q7681908` |
| Coordinates | 52.6325, -1.69635 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.6325/-1.69635)) |
| Wikidata | [Q7681908](https://www.wikidata.org/wiki/Q7681908) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|archaeological site\|local authority museum |
| Administrative area | Tamworth |
| Inception | 1070 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 3, waterway 7, road 154, building 230, water 3, zone 11, retaining-wall 1, wall 56).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 66, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/75739303 historic=castle Q7681908 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.6325/-1.69635) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|archaeological site\|local authority museum; sitelinks=8; wikidata:Q7681908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/tamworth-castle-q7681908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
