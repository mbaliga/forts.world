# Castra Deva Victrix

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-deva-victrix-q2450247` |
| Coordinates | 53.1914, -2.89278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1914/-2.89278)) |
| Wikidata | [Q2450247](https://www.wikidata.org/wiki/Q2450247) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum\|ancient Roman structure |
| Administrative area | Chester |
| Wikipedia language editions | 14 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 4, road 337, building 474, waterway 6, water 2, zone 4, wall 11).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 4, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21150135 historic=fort 105 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 474 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 337 mapped (trace size budget); minor lanes are not drawn
- origin moved 102 m from the ledger point to the outline centroid
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1914/-2.89278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum\|ancient Roman structure; sitelinks=14; wikidata:Q2450247 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/castra-deva-victrix-q2450247.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
