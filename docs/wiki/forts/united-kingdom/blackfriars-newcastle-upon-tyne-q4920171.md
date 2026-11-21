# BlackFriars, Newcastle-upon-Tyne

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blackfriars-newcastle-upon-tyne-q4920171` |
| Coordinates | 54.97207, -1.61961 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.97207/-1.61961)) |
| Wikidata | [Q4920171](https://www.wikidata.org/wiki/Q4920171) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|building complex\|friary |
| Administrative area | Newcastle upon Tyne |
| Inception | 1201 |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `website` | http://www.mordentower.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 9, road 288, wall 21, building 117, zone 13).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 10, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/498559810 historic=citywalls Q15256178 74 m from ledger point
- roads capped: kept the 150 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 75 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.97207/-1.61961) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|building complex\|friary; sitelinks=4; wikidata:Q4920171 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/blackfriars-newcastle-upon-tyne-q4920171.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
