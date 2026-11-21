# Welfenschloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `welfenschloss-q17315749` |
| Coordinates | 51.418, 9.65434 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.418/9.65434)) |
| Wikidata | [Q17315749](https://www.wikidata.org/wiki/Q17315749) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|barracks |
| Administrative area | Hann. Münden |
| Designations | architectural heritage monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 3, road 133, waterway 18, building 378, zone 12, water 2, wall 1, retaining-wall 3).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 11, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35020748 historic=castle Q17315749 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 378 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.418/9.65434) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|barracks; sitelinks=2; wikidata:Q17315749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/welfenschloss-q17315749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
