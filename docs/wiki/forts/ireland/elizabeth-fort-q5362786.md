# Elizabeth Fort

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elizabeth-fort-q5362786` |
| Coordinates | 51.8945, -8.478 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8945/-8.478)) |
| Wikidata | [Q5362786](https://www.wikidata.org/wiki/Q5362786) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cork |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `website` | http://www.elizabethfort.ie/ |

## What the model contains

Tier **T1**, status `outline+walls`, 230 elements (outline 1, marker 3, road 400, water 2, waterway 7, building 690, wall 350, zone 34, retaining-wall 13).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 0, inferred 0, unknown 171.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54598301 historic=fort Q5362786 14 m from ledger point
- pruned to the outline plus 60 m: 1500 -> 511 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 191 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 160 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8945/-8.478) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5362786 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 230 elements); data/traces/elizabeth-fort-q5362786.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
