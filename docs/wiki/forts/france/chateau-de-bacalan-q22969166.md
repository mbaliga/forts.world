# château de Bacalan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-bacalan-q22969166` |
| Coordinates | 44.98088, -0.60274 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.98088/-0.60274)) |
| Wikidata | [Q22969166](https://www.wikidata.org/wiki/Q22969166) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Ludon-Médoc |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, road 38, zone 1, building 261, wall 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 1, inferred 0, unknown 261.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173631993 historic=castle Q22969166 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- 1107 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.98088/-0.60274) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=0; wikidata:Q22969166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/chateau-de-bacalan-q22969166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
