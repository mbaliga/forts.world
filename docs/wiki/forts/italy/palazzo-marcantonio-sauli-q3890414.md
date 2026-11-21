# Palazzo Marcantonio Sauli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-marcantonio-sauli-q3890414` |
| Coordinates | 44.40627, 8.92998 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.40627/8.92998)) |
| Wikidata | [Q3890414](https://www.wikidata.org/wiki/Q3890414) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Genoa |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 51, road 336, building 295, wall 7, retaining-wall 19, coastline 1, zone 6, waterway 1, water 1).

Evidence: documented 0, mapped 357, inferred 0, derived 1; heights documented 4, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136404354 historic=castle Q3890414 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 295 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 336 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":2,"medianInside":-0.3,"medianOutside":28.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.40627/8.92998) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q3890414 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/palazzo-marcantonio-sauli-q3890414.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
