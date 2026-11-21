# Tour de Garnavie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-garnavie-q22939938` |
| Coordinates | 43.09488, -0.04818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.09488/-0.04818)) |
| Wikidata | [Q22939938](https://www.wikidata.org/wiki/Q22939938) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Lourdes |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 2, road 168, zone 9, wall 6, building 543, water 2, retaining-wall 6, waterway 1).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 1, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68862926 historic=yes Q22939938 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 543 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 168 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.09488/-0.04818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22939938 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/tour-de-garnavie-q22939938.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
