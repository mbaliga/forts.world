# Renaissance castle in Galanta

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `renaissance-castle-in-galanta-q7312464` |
| Coordinates | 48.19556, 17.7325 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.19556/17.7325)) |
| Wikidata | [Q7312464](https://www.wikidata.org/wiki/Q7312464) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Galanta |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 2, road 252, building 214, wall 5, zone 13).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 89, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59155151 historic=yes 437 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 214 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 252 mapped (trace size budget); minor lanes are not drawn
- origin moved 436 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.19556/17.7325) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q7312464 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/renaissance-castle-in-galanta-q7312464.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
