# Sparrenberg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sparrenberg-castle-q328291` |
| Coordinates | 52.0149, 8.52677 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0149/8.52677)) |
| Wikidata | [Q328291](https://www.wikidata.org/wiki/Q328291) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bielefeld-Mitte |
| Inception | 1250 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 7, road 346, building 170, zone 29, retaining-wall 9, waterway 3, wall 33).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 46, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/19789175 historic=castle Q328291 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 170 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 346 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0149/8.52677) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q328291 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/sparrenberg-castle-q328291.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
