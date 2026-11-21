# Son Tay Ancient Citadel

> Vietnam · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `son-tay-ancient-citadel-q4240280` |
| Coordinates | 21.1388, 105.5042 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/21.1388/105.5042)) |
| Wikidata | [Q4240280](https://www.wikidata.org/wiki/Q4240280) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 1, road 99, waterway 1, building 1037, zone 15, water 2, wall 3).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 1, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/921987266 historic=castle Q4240280 47 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1037 mapped (trace size budget); the rest of the town is not drawn
- origin moved 41 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/21.1388/105.5042) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q4240280 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/son-tay-ancient-citadel-q4240280.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/vietnam.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
