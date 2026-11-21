# Newcastle town wall

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `newcastle-town-wall-q7017551` |
| Coordinates | 54.97167, -1.62139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.97167/-1.62139)) |
| Wikidata | [Q7017551](https://www.wikidata.org/wiki/Q7017551) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Newcastle upon Tyne |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `website` | https://co-curate.ncl.ac.uk/herber-tower/ |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 7, road 245, wall 20, building 135, zone 7).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 5, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/498259324 historic=citywalls 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 135 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.97167/-1.62139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=7; wikidata:Q7017551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/newcastle-town-wall-q7017551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
