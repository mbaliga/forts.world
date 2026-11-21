# Grace's Old Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grace-s-old-castle-q85764217` |
| Coordinates | 52.65419, -7.25368 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.65419/-7.25368)) |
| Wikidata | [Q85764217](https://www.wikidata.org/wiki/Q85764217) (CC0) |
| Wikidata class | castle |
| Types | castle\|prison\|bourgeois house\|courthouse |
| Administrative area | County Kilkenny |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | residential |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 50, road 626, waterway 5, building 350, zone 26, wall 110, water 2).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 50, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/839042195 historic=castle Q85764217 13 m from ledger point
- pruned to the outline plus 150 m: 1170 -> 779 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 219 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 443 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.65419/-7.25368) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|prison\|bourgeois house\|courthouse; sitelinks=2; wikidata:Q85764217 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/grace-s-old-castle-q85764217.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
