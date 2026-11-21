# Castle of Montemor-o-Velho

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-montemor-o-velho-q66943448` |
| Coordinates | 40.17494, -8.68418 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.17494/-8.68418)) |
| Wikidata | [Q66943448](https://www.wikidata.org/wiki/Q66943448) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Montemor-o-Velho e Gatões |
| Inception | 1088 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 2, road 195, wall 90, waterway 4, water 1, building 115, retaining-wall 12, zone 5).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 0, inferred 0, unknown 217.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10492658 historic=castle Q66943448 49 m from ledger point
- roads capped: kept the 150 longest of 195 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.17494/-8.68418) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=5; wikidata:Q66943448 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/castle-of-montemor-o-velho-q66943448.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
