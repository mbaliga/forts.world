# Château du Vieux-Windstein

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-vieux-windstein-q440833` |
| Coordinates | 48.99866, 7.68172 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.99866/7.68172)) |
| Wikidata | [Q440833](https://www.wikidata.org/wiki/Q440833) (CC0) |
| Wikidata class | castle |
| Types | summit\|rock castle |
| Administrative area | Windstein |
| Inception | 1147 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, marker 4, road 25, zone 2, waterway 1, wall 13).

Evidence: documented 0, mapped 47, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7162838 historic=castle 623 m from ledger point
- origin moved 621 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.99866/7.68172) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; summit\|rock castle; sitelinks=5; wikidata:Q440833 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/chateau-du-vieux-windstein-q440833.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
