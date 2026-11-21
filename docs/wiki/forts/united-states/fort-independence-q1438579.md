# Fort Independence

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-independence-q1438579` |
| Coordinates | 42.33806, -71.01167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.33806/-71.01167)) |
| Wikidata | [Q1438579](https://www.wikidata.org/wiki/Q1438579) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Boston |
| Inception | 1643 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 10 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, marker 2, road 31, building 10, coastline 8, wall 6, zone 8, water 2).

Evidence: documented 0, mapped 68, inferred 0, derived 2; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/64881 historic=fort Q1438579 55 m from ledger point
- origin moved 55 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":219,"medianInside":0.9,"medianOutside":3.7}
- sea-1: DEM check ok {"cells":80,"medianInside":2.1,"medianOutside":2.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.33806/-71.01167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=10; wikidata:Q1438579 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/fort-independence-q1438579.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
