# Goose Tower

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `goose-tower-q12314777` |
| Coordinates | 55.00722, 11.91247 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.00722/11.91247)) |
| Wikidata | [Q12314777](https://www.wikidata.org/wiki/Q12314777) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Vordingborg Municipality |
| Inception | 1160 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 6, road 373, coastline 1, building 282, retaining-wall 23, wall 63, water 8, zone 3, waterway 5).

Evidence: documented 0, mapped 380, inferred 0, derived 1; heights documented 5, inferred 0, unknown 201.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20426380 historic=castle Q1014431 71 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 282 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 373 mapped (trace size budget); minor lanes are not drawn
- origin moved 71 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":83,"medianInside":1.9,"medianOutside":9.3}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.00722/11.91247) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=4; wikidata:Q12314777 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/goose-tower-q12314777.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
