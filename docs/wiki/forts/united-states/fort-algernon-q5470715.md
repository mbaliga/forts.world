# Fort Algernon

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-algernon-q5470715` |
| Coordinates | 37.0018, -76.3097 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.0018/-76.3097)) |
| Wikidata | [Q5470715](https://www.wikidata.org/wiki/Q5470715) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1609 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 1, road 233, zone 5, building 152, waterway 1, coastline 2, wall 15, water 1).

Evidence: documented 0, mapped 297, inferred 0, derived 1; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51064272 historic=fort Q1438639 283 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 288 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":107,"medianInside":0,"medianOutside":1.4}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.0018/-76.3097) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q5470715 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/fort-algernon-q5470715.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
