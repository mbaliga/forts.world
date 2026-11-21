# Castro da Cola

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-da-cola-q3752952` |
| Coordinates | 37.57875, -8.30047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.57875/-8.30047)) |
| Wikidata | [Q3752952](https://www.wikidata.org/wiki/Q3752952) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage\|hillfort\|archaeological site |
| Administrative area | Ourique |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, road 18, building 11, waterway 3, wall 2, zone 1).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 1, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/805514397 historic=ruins 17 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.57875/-8.30047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage\|hillfort\|archaeological site; sitelinks=8; wikidata:Q3752952 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/castro-da-cola-q3752952.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
