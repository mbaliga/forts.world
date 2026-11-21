# Biskupska palača

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `biskupska-palaca-q20072838` |
| Coordinates | 44.11589, 15.22407 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.11589/15.22407)) |
| Wikidata | [Q20072838](https://www.wikidata.org/wiki/Q20072838) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Zadar |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 14, road 186, wall 16, coastline 2, building 251, retaining-wall 1, zone 1, water 2).

Evidence: documented 0, mapped 307, inferred 0, derived 2; heights documented 19, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2839782 historic=castle Q20072838 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 186 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":-0.2,"medianOutside":3.6}
- sea-1: DEM check ok {"cells":49,"medianInside":0,"medianOutside":4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.11589/15.22407) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=3; wikidata:Q20072838 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/biskupska-palaca-q20072838.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
