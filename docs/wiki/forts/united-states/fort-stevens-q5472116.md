# Fort Stevens

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-stevens-q5472116` |
| Coordinates | 38.96444, -77.02889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.96444/-77.02889)) |
| Wikidata | [Q5472116](https://www.wikidata.org/wiki/Q5472116) (CC0) |
| Wikidata class | fort |
| Types | national park\|fort |
| Administrative area | Washington, D.C. |
| Inception | 1861 |
| Designations | National Register of Historic Places contributing property |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `website` | https://www.nps.gov/places/fort-stevens.htm |

## What the model contains

Tier **T1**, status `outline-only`, 276 elements (outline 1, marker 4, road 207, building 217, zone 1).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/41965357 historic=fort Q5472116 46 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 217 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 47 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.96444/-77.02889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; national park\|fort; sitelinks=4; wikidata:Q5472116 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 276 elements); data/traces/fort-stevens-q5472116.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
