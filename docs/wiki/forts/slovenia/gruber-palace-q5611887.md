# Gruber Palace

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gruber-palace-q5611887` |
| Coordinates | 46.04543, 14.50703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.04543/14.50703)) |
| Wikidata | [Q5611887](https://www.wikidata.org/wiki/Q5611887) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|palace |
| Administrative area | Ljubljana City Municipality |
| Designations | monument of local significance |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 10, road 239, waterway 5, building 275, wall 14, zone 34, retaining-wall 23).

Evidence: documented 0, mapped 357, inferred 0, derived 0; heights documented 31, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1091291542 historic=castle Q5611887 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 239 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.04543/14.50703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|palace; sitelinks=5; wikidata:Q5611887 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/gruber-palace-q5611887.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
