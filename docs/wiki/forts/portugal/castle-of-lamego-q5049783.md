# Castle of Lamego

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-lamego-q5049783` |
| Coordinates | 41.09917, -7.80861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.09917/-7.80861)) |
| Wikidata | [Q5049783](https://www.wikidata.org/wiki/Q5049783) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Lamego (Almacave e Sé) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 177 elements (outline 1, marker 2, road 75, building 90, water 1, waterway 2, zone 4, wall 2).

Evidence: documented 0, mapped 177, inferred 0, derived 0; heights documented 5, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89009206 historic=castle Q5049783 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.09917/-7.80861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=4; wikidata:Q5049783 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 177 elements); data/traces/castle-of-lamego-q5049783.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
