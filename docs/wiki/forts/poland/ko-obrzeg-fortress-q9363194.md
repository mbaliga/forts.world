# Kołobrzeg Fortress

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ko-obrzeg-fortress-q9363194` |
| Coordinates | 54.17797, 15.58319 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.17797/15.58319)) |
| Wikidata | [Q9363194](https://www.wikidata.org/wiki/Q9363194) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Kołobrzeg |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `website` | http://zabytkikolobrzeg.pl/artykuy/122-baszta-lontowa-zwana-prochow.html |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, marker 3, road 489, building 206, zone 141, wall 3, retaining-wall 1).

Evidence: documented 0, mapped 189, inferred 0, derived 0; heights documented 55, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/125096676 historic=building Q9166798 433 m from ledger point
- pruned to the outline plus 150 m: 844 -> 373 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 96 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 228 mapped (trace size budget); minor lanes are not drawn
- origin moved 433 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.17797/15.58319) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q9363194 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/ko-obrzeg-fortress-q9363194.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
