# Fort Adams

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-adams-q5470704` |
| Coordinates | 41.475, -71.34111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.475/-71.34111)) |
| Wikidata | [Q5470704](https://www.wikidata.org/wiki/Q5470704) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Rhode Island |
| Inception | 1798 |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `heritage` | yes |
| OSM `website` | https://www.fortadams.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 128 elements (outline 1, marker 4, road 68, building 39, zone 9, coastline 4, wall 2, water 1).

Evidence: documented 0, mapped 128, inferred 0, derived 1; heights documented 0, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1102813402 historic=fort 468 m from ledger point
- origin moved 468 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":228,"medianInside":0,"medianOutside":7.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.475/-71.34111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q5470704 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 128 elements); data/traces/fort-adams-q5470704.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
