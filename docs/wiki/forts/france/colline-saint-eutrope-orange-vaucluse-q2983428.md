# Colline Saint Eutrope (Orange, Vaucluse)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `colline-saint-eutrope-orange-vaucluse-q2983428` |
| Coordinates | 44.13474, 4.80843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.13474/4.80843)) |
| Wikidata | [Q2983428](https://www.wikidata.org/wiki/Q2983428) (CC0) |
| Wikidata class | castle |
| Types | castle\|yes\|archaeological site\|hill |
| Administrative area | Orange |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 7, road 376, zone 26, building 435, retaining-wall 9, wall 121, cliff 137, pit 1, waterway 2).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 8, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/242024188 historic=castle 3 m from ledger point
- pruned to the outline plus 60 m: 1115 -> 293 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 55 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 51 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.13474/4.80843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|yes\|archaeological site\|hill; sitelinks=2; wikidata:Q2983428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/colline-saint-eutrope-orange-vaucluse-q2983428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
