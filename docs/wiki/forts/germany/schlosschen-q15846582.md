# Schlösschen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schlosschen-q15846582` |
| Coordinates | 49.42754, 8.68615 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.42754/8.68615)) |
| Wikidata | [Q15846582](https://www.wikidata.org/wiki/Q15846582) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Heidelberg |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 3, road 127, building 562, wall 25, zone 7, waterway 1).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 62, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31309584 historic=castle Q15846582 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 562 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.42754/8.68615) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q15846582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/schlosschen-q15846582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
