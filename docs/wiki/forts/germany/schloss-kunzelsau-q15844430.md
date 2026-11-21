# Schloss Künzelsau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-kunzelsau-q15844430` |
| Coordinates | 49.27921, 9.69168 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.27921/9.69168)) |
| Wikidata | [Q15844430](https://www.wikidata.org/wiki/Q15844430) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Künzelsau |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 14, road 241, building 295, zone 26, waterway 4, wall 16, retaining-wall 11).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 61, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1999847 historic=castle Q15844430 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 295 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 241 mapped (trace size budget); minor lanes are not drawn
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.27921/9.69168) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q15844430 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/schloss-kunzelsau-q15844430.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
