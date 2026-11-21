# Fort Ross

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ross-q1278115` |
| Coordinates | 38.51444, -123.24361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.51444/-123.24361)) |
| Wikidata | [Q1278115](https://www.wikidata.org/wiki/Q1278115) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site\|fort |
| Administrative area | California |
| Inception | 1812 |
| Designations | National Register of Historic Places listed place\|California Historical Landmark\|National Historic Landmark |
| Wikipedia language editions | 34 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, road 24, building 18, coastline 1, waterway 1, water 1).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112515244 historic=fort Q1278115 15 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":11,"medianInside":1.8,"medianOutside":29.8}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.51444/-123.24361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site\|fort; sitelinks=34; wikidata:Q1278115 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/fort-ross-q1278115.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
