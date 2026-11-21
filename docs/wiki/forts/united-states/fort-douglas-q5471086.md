# Fort Douglas

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-douglas-q5471086` |
| Coordinates | 40.76528, -111.83306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.76528/-111.83306)) |
| Wikidata | [Q5471086](https://www.wikidata.org/wiki/Q5471086) (CC0) |
| Wikidata class | fort |
| Types | historic site\|fort |
| Administrative area | Salt Lake City |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 320 elements (outline 1, road 521, building 109, zone 58, waterway 2).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 21, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33927866 historic=yes Q5471086 297 m from ledger point
- roads capped: kept the 150 longest of 521 mapped (trace size budget); minor lanes are not drawn
- origin moved 297 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.76528/-111.83306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; historic site\|fort; sitelinks=5; wikidata:Q5471086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 320 elements); data/traces/fort-douglas-q5471086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
