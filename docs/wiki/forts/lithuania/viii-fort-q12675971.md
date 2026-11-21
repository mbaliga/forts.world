# VIII Fort

> Lithuania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `viii-fort-q12675971` |
| Coordinates | 54.91972, 23.88528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.91972/23.88528)) |
| Wikidata | [Q12675971](https://www.wikidata.org/wiki/Q12675971) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, road 118, building 304, zone 22, wall 2, cliff 4).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 3, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72077979 historic=fort Q12675971 47 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 304 mapped (trace size budget); the rest of the town is not drawn
- origin moved 55 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.91972/23.88528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q12675971 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/viii-fort-q12675971.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lithuania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
