# Fort Christian

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-christian-q1773741` |
| Coordinates | 18.34083, -64.92972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.34083/-64.92972)) |
| Wikidata | [Q1773741](https://www.wikidata.org/wiki/Q1773741) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Charlotte Amalie |
| Designations | National Register of Historic Places listed place\|National Register of Historic Places contributing property\|National Historic Landmark |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 176 elements (outline 1, marker 12, road 77, building 81, wall 2, zone 1, coastline 1, water 1).

Evidence: documented 0, mapped 176, inferred 0, derived 1; heights documented 1, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14560476 historic=castle Q1773741 21 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":148,"medianInside":3,"medianOutside":6.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.34083/-64.92972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=11; wikidata:Q1773741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 176 elements); data/traces/fort-christian-q1773741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
