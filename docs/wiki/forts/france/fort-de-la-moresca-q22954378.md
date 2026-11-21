# Fort de la Moresca

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-la-moresca-q22954378` |
| Coordinates | 42.5244, 3.1095 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.5244/3.1095)) |
| Wikidata | [Q22954378](https://www.wikidata.org/wiki/Q22954378) (CC0) |
| Wikidata class | fort |
| Types | building\|fort |
| Administrative area | Port-Vendres |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, coastline 2, road 10, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/539498107 historic=castle Q22954378 25 m from ledger point
- origin moved 24 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":255,"medianInside":0,"medianOutside":0}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.5244/3.1095) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; building\|fort; sitelinks=3; wikidata:Q22954378 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/fort-de-la-moresca-q22954378.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
