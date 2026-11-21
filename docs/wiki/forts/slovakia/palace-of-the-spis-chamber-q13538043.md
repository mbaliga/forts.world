# Palace of the Spiš Chamber

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-spis-chamber-q13538043` |
| Coordinates | 48.72257, 21.25615 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72257/21.25615)) |
| Wikidata | [Q13538043](https://www.wikidata.org/wiki/Q13538043) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Košice |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 20, road 213, building 269, waterway 2, wall 52, water 3, zone 45).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 20, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48358446 historic=castle Q13538043 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 213 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72257/21.25615) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=3; wikidata:Q13538043 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/palace-of-the-spis-chamber-q13538043.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
