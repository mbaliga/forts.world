# Fort James Jackson

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-james-jackson-q1438578` |
| Coordinates | 32.08194, -81.03611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.08194/-81.03611)) |
| Wikidata | [Q1438578](https://www.wikidata.org/wiki/Q1438578) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Chatham County |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `website` | https://www.chsgeorgia.org/Old-Fort-Jackson.html |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, marker 1, road 11, waterway 3, building 7, wall 1).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8141172 historic=fort 19 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- 335 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.08194/-81.03611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q1438578 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/fort-james-jackson-q1438578.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
