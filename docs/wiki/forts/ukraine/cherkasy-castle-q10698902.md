# Cherkasy Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cherkasy-castle-q10698902` |
| Coordinates | 49.44778, 32.06472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44778/32.06472)) |
| Wikidata | [Q10698902](https://www.wikidata.org/wiki/Q10698902) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cherkasy |
| Wikipedia language editions | 6 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 4, road 184, building 232, wall 2, zone 43, retaining-wall 11).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 1, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12510119 historic=monument Q12137429 240 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 232 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 184 mapped (trace size budget); minor lanes are not drawn
- origin moved 239 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44778/32.06472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q10698902 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/cherkasy-castle-q10698902.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
