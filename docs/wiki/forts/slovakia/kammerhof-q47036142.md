# Kammerhof

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kammerhof-q47036142` |
| Coordinates | 48.45943, 18.89767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.45943/18.89767)) |
| Wikidata | [Q47036142](https://www.wikidata.org/wiki/Q47036142) (CC0) |
| Wikidata class | castle |
| Types | castle\|administrative building |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 7, road 145, building 229, waterway 1, wall 18, retaining-wall 15, zone 3).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 7, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/463734530 historic=building 205 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 229 mapped (trace size budget); the rest of the town is not drawn
- origin moved 205 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.45943/18.89767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|administrative building; sitelinks=4; wikidata:Q47036142 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/kammerhof-q47036142.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
