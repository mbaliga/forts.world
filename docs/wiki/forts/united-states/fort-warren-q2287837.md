# Fort Warren

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-warren-q2287837` |
| Coordinates | 42.32028, -70.92778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.32028/-70.92778)) |
| Wikidata | [Q2287837](https://www.wikidata.org/wiki/Q2287837) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Boston |
| Inception | 1833 |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 62 elements (outline 1, marker 1, road 32, coastline 1, building 11, wall 12, retaining-wall 2, waterway 1, water 1).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/212121743 historic=yes 73 m from ledger point
- origin moved 73 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":357,"medianInside":1.3,"medianOutside":8}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.32028/-70.92778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q2287837 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 62 elements); data/traces/fort-warren-q2287837.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
