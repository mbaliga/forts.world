# Fort Monroe

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-monroe-q1438639` |
| Coordinates | 37.00361, -76.3075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.00361/-76.3075)) |
| Wikidata | [Q1438639](https://www.wikidata.org/wiki/Q1438639) (CC0) |
| Wikidata class | fort |
| Types | fort\|unincorporated community |
| Administrative area | Hampton |
| Inception | 1834 |
| Designations | National Register of Historic Places listed place\|Virginia Historic Landmark\|National Historic Landmark |
| Wikipedia language editions | 14 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 1, road 245, zone 5, building 160, waterway 1, coastline 2, wall 15, water 1).

Evidence: documented 0, mapped 297, inferred 0, derived 1; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51064272 historic=fort Q1438639 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 160 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":107,"medianInside":0,"medianOutside":1.4}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.00361/-76.3075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|unincorporated community; sitelinks=14; wikidata:Q1438639 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/fort-monroe-q1438639.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
